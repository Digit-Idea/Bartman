import * as React from "react";
import style from "./Preloader.module.scss"
import bartman from "../../assets/gif/bartman.gif"

export const Preloader = () => {
    return (
        <div className={style.preloader}>
            <img src={bartman} alt="" className={style.img}/>
        </div>
    )
}
