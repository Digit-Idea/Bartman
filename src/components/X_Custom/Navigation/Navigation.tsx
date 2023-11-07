import * as React from "react";
import style from "./Navigation.module.scss";
import {FC} from "react";
import {svgIcons} from "../../../assets/svgIcons";

interface INavigation {
    onPrev: () => void
    onNext: () => void
}


export const Navigation: FC<INavigation> = ({onPrev, onNext}) => {
    return (
        <div className={style.navigation}>
            <button onClick={onPrev}>
                {svgIcons.buttonLeft}
            </button>
            <button onClick={onNext}>
                {svgIcons.buttonLeft}
            </button>
        </div>
    )
}
