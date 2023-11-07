import * as React from "react";
import style from "./Coin.module.scss";
import "./coin.scss";
import {svgIcons} from "../../../assets/svgIcons";
import clsx from "clsx";
import {FC} from "react";

interface ICoin {
    animationDuration?: number
    animationDelay?: number
    left: number
    width: number
}

export const Coin: FC<ICoin> = ({
                                    animationDuration = 3,
                                    animationDelay = 0,
                                    left,
                                    width
                                }) => {
    return (
        <div className={clsx(style.coin, "coin")}
             style={{
                 animationDuration: `${animationDuration}s`,
                 animationDelay: `${animationDelay}s`,
                 left: `${left}%`,
                 width: `${width}px`,
             }}
        >
            {svgIcons.coin}
        </div>
    )
}
