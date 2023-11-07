import * as React from "react";
import style from "./Cloud.module.scss";
import "./cloud.scss";
import {svgIcons} from "../../../assets/svgIcons";
import clsx from "clsx";
import {FC} from "react";

interface ICloud {
    animationDuration?: number
    animationDelay?: number
    top: number
}

export const Cloud: FC<ICloud> = ({
                                    animationDuration = 15,
                                    animationDelay = 0,
                                    top,
                                }) => {
    return (
        <div className={clsx(style.cloud, "cloud")}
             style={{
                 animationDuration: `${animationDuration}s`,
                 animationDelay: `${animationDelay}s`,
                 top: `${top}%`,
             }}
        >
            {svgIcons.cloud}
        </div>
    )
}
