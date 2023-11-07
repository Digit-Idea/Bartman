import * as React from "react";
import style from "./Footer.module.scss";
import {HashLink} from "react-router-hash-link";
import {links} from "../A1_Header/Header";
import {SocialIcon} from "../X_Custom/SocialIcon/SocialIcon";
import {socialLinks} from "../A2_BurgerMenu/BurgerMenu";

export const Footer = () => {
    return (
        <footer className={style.footer}>
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
                                    >
                                        {label}
                                    </a>
                                ) : (
                                    <HashLink key={key}
                                              smooth
                                              to={to}
                                              className={style.link}
                                    >
                                        {label}
                                    </HashLink>
                                )
                            }
                        </>
                    ))
                }
            </nav>

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
        </footer>
    )
}
