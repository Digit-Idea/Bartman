import * as React from "react";
import style from "./Timer.module.scss";
import {Coin} from "../X_Custom/Coin/Coin";
import useMediaQuery from "@mui/material/useMediaQuery";
import back from "../../assets/gif/timer.gif";
import {useStore} from "../../store/useStore";

export const Timer = () => {
    const matchDesktop = useMediaQuery(`(min-width:1440px)`);

    const {setLoading} = useStore();

    return (
        <div className={style.timer}>

            <img src={back} alt=""
                 className={style.back}
                 onLoad={() => setLoading(false)}

            />

            {/*<h2 className={style.title}>First Tournament starting in:</h2>*/}
            {/*<p className={style.time}>7D : 23H : 22M</p>*/}


            {
                matchDesktop && (
                    <>
                        <Coin animationDuration={10} left={10} width={162} animationDelay={0}/>
                        <Coin animationDuration={10} left={25} width={25} animationDelay={2}/>
                        <Coin animationDuration={10} left={35} width={40} animationDelay={8}/>
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
    )
}
