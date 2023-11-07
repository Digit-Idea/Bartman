import * as React from "react";
import style from "./PlayPage.module.scss";
import {HowToPlay} from "../B8_HowToPlay/HowToPlay";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {Preloader} from "../A6_Preloader/Preloader";

export const PlayPage = observer(() => {
    const {loading2} = useStore();

    return (
        <div className={style.playPage}>
            {loading2 && <Preloader/>}
            <HowToPlay/>
        </div>
    )
})
