import React from "react";
import style from "./Home.module.scss";
import bartman from "../../assets/png/B0_Home/bartman.png"
import {ButtonCustom} from "../X_Custom/ButtonCustom/ButtonCustom";
import imgMobileDefault from "../../assets/png/buttons/home/mobile/default.png";
import imgMobileClick from "../../assets/png/buttons/home/mobile/click.png";
import imgDesktopDefault from "../../assets/png/buttons/home/desktop/default.png";
import imgDesktopHover from "../../assets/png/buttons/home/desktop/hover.png";
import imgDesktopClick from "../../assets/png/buttons/home/desktop/click.png";
import {Coin} from "../X_Custom/Coin/Coin";
import useMediaQuery from "@mui/material/useMediaQuery";
import logoGif from "../../assets/gif/logo.gif";
import {LinkCustom} from "../X_Custom/LinkCustom/LinkCustom";

export const Home = () => {
    const matchDesktop = useMediaQuery(`(min-width:1440px)`);

    return (
        <div className={style.home} id="Home">
            <img src={logoGif}
                 alt=""
                 className={style.logo}
            />

            <img src={bartman}
                 alt=""
                 className={style.bartman}
            />


            <div className={style.buttons}>
                <LinkCustom widthMobile={112}
                            heightMobile={88}
                            widthDesktop={250}
                            heightDesktop={60}
                            imgMobileDefault={imgMobileDefault}
                            imgMobileClick={imgMobileClick}
                            imgDesktopDefault={imgDesktopDefault}
                            imgDesktopHover={imgDesktopHover}
                            imgDesktopClick={imgDesktopClick}
                            className={style.btn}
                            href="https://t.me/BartMAN_Inu"
                >
                    <p>Join our community</p>
                </LinkCustom>
                <ButtonCustom widthMobile={112}
                              heightMobile={88}
                              widthDesktop={250}
                              heightDesktop={60}
                              imgMobileDefault={imgMobileDefault}
                              imgMobileClick={imgMobileClick}
                              imgDesktopDefault={imgDesktopDefault}
                              imgDesktopHover={imgDesktopHover}
                              imgDesktopClick={imgDesktopClick}
                              className={style.btn}
                >
                    <p>Buy on UniSwap</p>
                </ButtonCustom>
            </div>

            {
                matchDesktop && (
                    <>
                        <Coin animationDuration={10} left={10} width={162} animationDelay={0}/>
                        <Coin animationDuration={10} left={25} width={35} animationDelay={2}/>
                        <Coin animationDuration={10} left={35} width={45} animationDelay={8}/>
                        <Coin animationDuration={10} left={65} width={55} animationDelay={6}/>
                        <Coin animationDuration={10} left={75} width={75} animationDelay={4}/>
                        <Coin animationDuration={10} left={90} width={100} animationDelay={0}/>
                    </>
                )
            }

            {
                !matchDesktop && (
                    <>
                        <Coin animationDuration={10} left={10} width={60} animationDelay={0}/>
                        <Coin animationDuration={10} left={35} width={35} animationDelay={2}/>
                        <Coin animationDuration={10} left={65} width={55} animationDelay={8}/>
                        <Coin animationDuration={10} left={90} width={40} animationDelay={6}/>
                    </>
                )
            }

        </div>
    );
}
