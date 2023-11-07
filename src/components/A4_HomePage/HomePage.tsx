import * as React from "react";
import style from "./HomePage.module.scss";
import {Home} from "../B0_Home/Home";
import {Video} from "../B1_Video/Video";
import {Timer} from "../B2_Timer/Timer";
import {OurPartners} from "../B3_OurPartners/OurPartners";
import {Texts} from "../B4_Texts/Texts";
import {Roadmap} from "../B5_Roadmap/Roadmap";
import {OurGoal} from "../B6_OurGoal/OurGoal";
import {Team} from "../B7_Team/Team";

import {Cloud} from "../X_Custom/Cloud/Cloud";
import {useStore} from "../../store/useStore";
import {observer} from "mobx-react-lite";
import {Preloader} from "../A6_Preloader/Preloader";

const HomePage = observer(() => {
    const {loading} = useStore();

    return (
        <div className={style.homePage}>
            {loading && <Preloader/>}
            <Home/>
            {/*<Video/>*/}

            <div className={style.cardWrapper}>
                <div className={style.card}>
                    <Timer/>

                    <div className={style.bottom}>

                        <div className={style.bottomInner}>
                            <OurPartners/>
                            <Texts/>
                            <Roadmap/>
                            <OurGoal/>
                            {/*<Team/>*/}
                        </div>

                        <Cloud animationDelay={0} top={2}/>
                        <Cloud animationDelay={3} top={13}/>
                        <Cloud animationDelay={6} top={30}/>
                        <Cloud animationDelay={9} top={40}/>
                        <Cloud animationDelay={3} top={50}/>
                        <Cloud animationDelay={6} top={60}/>
                        <Cloud animationDelay={9} top={70}/>
                        <Cloud animationDelay={3} top={80}/>
                        <Cloud animationDelay={0} top={95}/>
                    </div>

                </div>
            </div>
        </div>
    )
})
export default HomePage
