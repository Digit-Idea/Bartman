import * as React from "react";
import backDefault from "../../../assets/png/buttons/social/default.png";
import backHover from "../../../assets/png/buttons/social/hover.png";
import {FC} from "react";
import style from "./SocialIcon.module.scss";
import clsx from "clsx";

interface ISocialIcon {
    href: string
    icon: JSX.Element
    className?: string
}

export const SocialIcon: FC<ISocialIcon> = ({
                                                href,
                                                icon,
                                                className
}) => {
    return (
        <a href={href}
           className={clsx(style.socialIcon, Boolean(className) && className)}
           target="_blank"
           rel="nofollow noopener noreferrer"
        >
            <img src={backDefault} alt="" className={style.default}/>
            <img src={backHover} alt="" className={style.hover}/>
            {icon}
        </a>
    )
}
