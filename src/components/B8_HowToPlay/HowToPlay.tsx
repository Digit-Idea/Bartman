import * as React from "react";
import style from "./HowToPlay.module.scss";
import {svgIcons} from "../../assets/svgIcons";
import useMediaQuery from "@mui/material/useMediaQuery";
import src0 from "../../assets/png/B8_HowtoPlay/card0.png";
import src1 from "../../assets/png/B8_HowtoPlay/card1.png";
import src2 from "../../assets/png/B8_HowtoPlay/card2.png";
import src3 from "../../assets/png/B8_HowtoPlay/card3.png";
import {ButtonCustom} from "../X_Custom/ButtonCustom/ButtonCustom";

import playDesktopDefault from "../../assets/png/buttons/home/desktop/default.png";
import playDesktopHover from "../../assets/png/buttons/home/desktop/hover.png";
import playDesktopClick from "../../assets/png/buttons/home/desktop/click.png";

import logoGif from "../../assets/gif/logo.gif";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";

const items = [
    {
        title: "First, create metamask",
        textItems: [
            <p className={style.textItem}>Create metamask wallet. And top up your wallet</p>
        ],
        src: src0
    },
    {
        title: "First, create metamask",
        textItems: [
            <p className={style.textItem}>
                Go to <a href="www.play.bartman.com">www.play.bartman.com</a> and login. Using the wallet you created by
                clicking. At wallet connect.
            </p>
        ],
        src: src1
    },
    {
        title: "First, create metamask",
        textItems: [
            <p className={style.textItem}>
                Buy $BM Tokens BSC on Pancakeswap our smart contract XXXXXXXXXXXXXXXXXXXXXX
            </p>
        ],
        src: src2,
    },
    {
        title: "First, create metamask",
        textItems: [
            <p className={style.textItem}>
                BartMAN Will have different modes:
            </p>,
            <p className={style.textItem}>
                <span>Bart-MAN Mode</span> is for free.
            </p>,
            <p className={style.textItem}>
                <span>BartMAN Multiplayer</span> you have to hold 1,000 worth of $BM Tokens in your wallet.
            </p>,
            <p className={style.textItem}>
                <span>BartMAN Tournament</span> how to buy tickets for tournament buy $BM Tokens and pay directly using $BM Token in order to receive the tickets.
            </p>
        ],
        src: src3
    },
]

export const HowToPlay = observer(() => {
    const matchDesktop = useMediaQuery(`(min-width:1440px)`);
    const {setLoading2} = useStore();

    return (
        <div className={style.howToPlay}>
            <img src={logoGif} alt="" className={style.logo}/>
            <div className={style.content}>
                <h2 className={style.title}>How to play</h2>

                <div className={style.items}>
                    {
                        items.map(({title, textItems, src}, key) => (
                            <div className={style.item} key={key}>

                                <div className={style.textBlock}>

                                    <div className={style.number}>
                                        {svgIcons.box}
                                        <p>{key + 1}</p>
                                    </div>

                                    <div className={style.texts}>
                                        <p className={style.itemTitle}>{title}</p>
                                        <div className={style.textItems}>
                                            {
                                                textItems.map((item, key) => (
                                                    <React.Fragment key={key}>
                                                        {item}
                                                    </React.Fragment>
                                                ))
                                            }
                                        </div>

                                    </div>
                                </div>

                                <div className={style.card}>
                                    { !matchDesktop && key !== 3 && svgIcons.howToPlayCardMobile}
                                    { !matchDesktop && key === 3 && svgIcons.howToPlayCardMobileSpecial}
                                    { matchDesktop && key !== 3 && svgIcons.howToPlayCardDesktop}
                                    { matchDesktop && key === 3 && svgIcons.howToPlayCardDesktopSpecial}
                                    <img src={src} alt=""
                                         className={style.img}
                                         onLoad={() => {
                                             if (key === 3) {
                                                 setLoading2(false)
                                             }
                                         }}
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className={style.btnWrapper}>
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
                                  onClick={() => {} }
                    >
                        <p>How to play</p>
                    </ButtonCustom>
                </div>


            </div>

        </div>
    )
})
