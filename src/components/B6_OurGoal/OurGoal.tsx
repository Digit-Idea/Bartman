import * as React from "react";
import style from "./OurGoal.module.scss";
import src from "../../assets/png/B6_OurGoal/ourGoal.png";

const text = `Our objective at Bartman is to establish our own market based on the $BartMAN token where we can maintain our market price at the first two months for all. Most importantly, game outcomes will be burned in order to support our chart. For instance, if the game's outcome was $1,000, 1% of its token supply will be burned.`

export const OurGoal = () => {
    return (
        <div className={style.ourGoal} id="Goal">
            <h2 className={style.title}>Our Goal</h2>
            <p className={style.text}>{text}</p>
            <img src={src} alt=""/>
        </div>
    )
}
