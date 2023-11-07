import * as React from "react";
import style from "./BurgerMenu.module.scss";
import clsx from "clsx";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import close from "../../assets/png/buttons/close/default.png"
import {HashLink} from "react-router-hash-link";
import {links} from "../A1_Header/Header";
import {svgIcons} from "../../assets/svgIcons";
import {SocialIcon} from "../X_Custom/SocialIcon/SocialIcon";
import playMobileDefault from "../../assets/png/buttons/home/mobile/default.png";
import playMobileClick from "../../assets/png/buttons/home/mobile/click.png";
import playDesktopDefault from "../../assets/png/buttons/home/desktop/default.png";
import playDesktopHover from "../../assets/png/buttons/home/desktop/hover.png";
import playDesktopClick from "../../assets/png/buttons/home/desktop/click.png";
import {ButtonCustom} from "../X_Custom/ButtonCustom/ButtonCustom";
import {useNavigate} from "react-router-dom";

export const socialLinks = [
    {href: "https://twitter.com/BartMAN_Inu", icon: svgIcons.twitter},
    //{href: "#", icon: svgIcons.discord},
    {href: "https://t.me/BartMAN_Inu", icon: svgIcons.telegram},
    //{href: "#", icon: svgIcons.instagram},
]

export const BurgerMenu = observer(() => {
    const {burgerMenu, setBurgerMenu} = useStore();
    const navigate = useNavigate();

    return (
        <div className={clsx({
            [style.burgerMenu]: true,
            [style.burgerMenu_show]: burgerMenu,
        })}>
            <button className={style.closeBtn}
                    onClick={() => setBurgerMenu(false)}
            >
                <img src={close} alt=""/>
            </button>

            <nav className={style.links}>
                {
                    links.map(({to, label}, key) => (
                        <>
                            {
                                key === links.length - 1 ? (
                                    <a key={key}
                                       href={to}
                                       target="_blank"
                                       className={style.link}
                                       onClick={() => setBurgerMenu(false)}
                                    >
                                        {label}
                                    </a>
                                ) : (
                                    <HashLink key={key}
                                              smooth
                                              to={to}
                                              className={style.link}
                                              onClick={() => setBurgerMenu(false)}
                                    >
                                        {label}
                                    </HashLink>
                                )
                            }
                        </>
                    ))
                }
            </nav>

            <ButtonCustom widthMobile={250}
                          heightMobile={60}
                          widthDesktop={250}
                          heightDesktop={60}
                          imgMobileDefault={playDesktopDefault}
                          imgMobileClick={playDesktopClick}
                          imgDesktopDefault={playDesktopDefault}
                          imgDesktopHover={playDesktopHover}
                          imgDesktopClick={playDesktopClick}
                          className={style.btn}
                          onClick={() => {
                              navigate('/play');
                              setBurgerMenu(false)
                          } }
            >
                <p>How to play</p>
            </ButtonCustom>

            <nav className={style.socialLinks}>
                {
                    socialLinks.map(({href, icon}, key) => (
                        <SocialIcon className={style.socialLink}
                                    icon={icon}
                                    href={href}
                                    key={key}
                        />
                    ))
                }
            </nav>

            <p className={style.right}>© 2022 BartMAN. All rights reserves</p>
        </div>
    )
})
