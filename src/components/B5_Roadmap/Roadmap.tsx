import * as React from "react";
import style from "./Roadmap.module.scss"
import cardDesktop from "../../assets/png/B5_Roadmap/cardDesktop.png";
import cardMobile from "../../assets/png/B5_Roadmap/cardMobile.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {FC, useState} from "react";
import SwiperClass from 'swiper/types/swiper-class';
import {Navigation} from "../X_Custom/Navigation/Navigation";

const items = [
    {
        title: "Stage 1 - 25%",
        texts: [
            "CONCEPT OF THE PROJECT",
            "TEAM FORMING",
            "Graphics/Drawing OF The Project",
            "WEBSITE DEVELOPMENT",
            "TOKEN CONTRACT DEVELOPMENT",
            "KYC & CONTRACT AUDIT",
        ]
    },
    {
        title: "Stage 2 - 50%",
        texts: [
            "SET UP OF SOCIAL ACCOUNTS",
            "ONBOARDING INFLUENCERS PARTNERSHIP",
            "PRESALE LAUNCH",
            "PUBLIC LAUNCH ON PANCAKESWAP",
            "Soft PROMOTIONS RELEASE",
        ]
    },
    {
        title: "Stage 3 - 75%",
        texts: [
            "MULTI-PLATFORM MARKETING",
            "COINGECKO LISTING",
            "CoinMaemrk LISTINGS",
        ]
    },
    {
        title: "Stage 4 - 100%",
        texts: [
            "Bart-MAN FREE MODE LIVE!!",
            "BartMAN NFTS LIVE!!",
            "CHRISTMAS EVENT FOR COMMUNITY",
            "RELEASE OF 2023 ROADMAP/WHITEPAPER V2",
        ]
    },
]

interface IRoadmapCard {
    src: string
    title: string
    texts: string[]
}

const RoadmapCard: FC<IRoadmapCard> = ({src, title, texts}) => {
    return (
        <>
            <img src={src} alt="" className={style.back}/>
            <p className={style.title}>{title}</p>
            <div className={style.texts}>
                {
                    texts.map((text, key) => (
                        <p className={style.text} key={key}>{text}</p>
                    ))
                }
            </div>

        </>
    )
}

export const Roadmap = () => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);

    return (
        <div className={style.roadmap} id="RoadMap">
            <h2 className={style.title}>Roadmap</h2>

            <Swiper className={style.cardsMobile}
                    slidesPerView="auto"
                    spaceBetween={6}
                    centeredSlides={true}
                    //loop={true}
                    onSwiper={(swiper) => setSwiper(swiper)}
            >
                {
                    items.map(({title, texts}, key) => (
                        <SwiperSlide className={style.card} key={key}>
                            <RoadmapCard src={cardMobile} title={title} texts={texts}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <Navigation onPrev={() => swiper?.slidePrev()}
                            onNext={() => swiper?.slideNext()}
            />

            <div className={style.cardsDesktop}>
                {
                    items.map(({texts, title}, key) => (
                        <div className={style.card} key={key}>
                            <RoadmapCard src={cardDesktop} title={title} texts={texts}/>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}
