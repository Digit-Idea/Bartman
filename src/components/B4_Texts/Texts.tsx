import * as React from "react";
import style from "./Texts.module.scss";

const text = 'Vibes which you still crave for and multiply your investment in safe mode. Don\'t you miss nostalgia 2d games? Don\'t you miss old BSC Vibes? Surely, you do!! We are here to mesmerize you with those golden days back by developing eco-system where players can enjoy at their peak, flash back their nostalgia feelings and invest in what they love by bringing back the diamond game *Pac-Man* and the *Legendary Cartoon* simpsons combining them both and mesmerizing the nostalgia BSC vibes. So are you ready to flashback your nostalgia moments now? Are you ready to enjoy with your full energy? Are you ready to maximize your earnings in our token knowing your investment is safe. Join us today!! We are super-excited to cherish you in every possible way.'

export const Texts = () => {
    return (
        <div className={style.texts}>
            <h2 className={style.title}>The BartMAN aims to bring back the old-school</h2>
            <p className={style.text}>{text}</p>
        </div>

    )
}
