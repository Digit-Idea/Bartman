import * as React from "react";
import style from "./Video.module.scss"
import ReactPlayer from 'react-player/youtube';

export const Video = () => {
    return (
        <div className={style.video} id="AboutUs">
            <div className={style.inner}>

                <ReactPlayer url="https://youtu.be/Ll4tU3B4y1Y"
                             width="100%"
                             height="100%"
                             config={{
                                     playerVars: {}
                             }}

                />

            </div>
        </div>
    )
}
