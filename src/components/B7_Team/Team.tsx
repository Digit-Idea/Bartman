import * as React from "react";
import style from "./Team.module.scss";
import src0 from "../../assets/png/B7_Team/person0.png";
import src1 from "../../assets/png/B7_Team/person1.png";
import src2 from "../../assets/png/B7_Team/person2.png";
import src3 from "../../assets/png/B7_Team/person3.png";
import cardMobile from "../../assets/png/B7_Team/cardMobile.png";
import cardDesktop from "../../assets/png/B7_Team/cardDesktop.png";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {useState} from "react";
import SwiperClass from 'swiper/types/swiper-class';
import {Navigation} from "../X_Custom/Navigation/Navigation";
import {svgIcons} from "../../assets/svgIcons";

const cards = [
    {
        src: src0,
        name: 'Crown฿AT',
        job: 'CEO',
        text: 'He has worked in the blockchain industry for 10 years and is the most sincere and passionate person. Experience the NFTs he will show and the future of blockchain.',
        twitter: "#",
        instagram: '#',
        facebook: '#',
        telegram: 'https://t.me/CrownBAT'
    },
    {
        src: src1,
        name: 'NullKet',
        job: 'Game Developer',
        text: 'He has worked in the blockchain industry for 10 years and is the most sincere and passionate person. Experience the NFTs he will show and the future of blockchain.',
        twitter: "#",
        instagram: '#',
        facebook: '#',
        telegram: 'https://t.me/NullKet'
    },
    {
        src: src2,
        name: 'PIXEL',
        job: 'Designer',
        text: 'He has worked in the blockchain industry for 10 years and is the most sincere and passionate person. Experience the NFTs he will show and the future of blockchain.',
        twitter: "#",
        instagram: '#',
        facebook: '#',
        telegram: 'https://t.me/pixelilord'
    },
    {
        src: src3,
        name: 'Brother 1',
        job: 'Marketer',
        text: 'He has worked in the blockchain industry for 10 years and is the most sincere and passionate person. Experience the NFTs he will show and the future of blockchain.',
        twitter: "#",
        linkedIn: '#',
        facebook: '#',
        telegram: 'https://t.me/Brother91'
    },
    {
        src: src3,
        name: 'C0infidenc3',
        job: 'Speaker',
        text: 'He has worked in the blockchain industry for 10 years and is the most sincere and passionate person. Experience the NFTs he will show and the future of blockchain.',
        twitter: "#",
        linkedIn: '#',
        facebook: '#',
        telegram: 'https://t.me/C0infidenc3'
    },
    // {
    //     src: src3,
    //     name: 'Bossy',
    //     job: 'Advisor',
    //     text: 'He has worked in the blockchain industry for 10 years and is the most sincere and passionate person. Experience the NFTs he will show and the future of blockchain.',
    //     twitter: "#",
    //     linkedIn: '#',
    //     facebook: '#',
    //     telegram: 'https://t.me/Bossy_Adz786'
    // },
    // {
    //     src: src3,
    //     name: 'Matt',
    //     job: 'Advisor',
    //     text: 'He has worked in the blockchain industry for 10 years and is the most sincere and passionate person. Experience the NFTs he will show and the future of blockchain.',
    //     twitter: "#",
    //     linkedIn: '#',
    //     facebook: '#',
    //     telegram: 'https://t.me/mattlorion'
    // },
]


export const Team = () => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);

    return (
        <div className={style.team} id="Team">
            <h2 className={style.title}>Our team</h2>

            <Swiper className={style.cardsMobile}
                    slidesPerView="auto"
                    spaceBetween={10}
                    centeredSlides={true}
                    //loop={true}
                    onSwiper={(swiper) => setSwiper(swiper)}>
                {
                    cards.map(({src, name,job, text, twitter, linkedIn, facebook, telegram}, key) => (
                        <SwiperSlide className={style.card} key={key}>

                            <img src={cardMobile} alt="" className={style.back}/>

                            <div className={style.content}>
                                <img src={src} alt="" className={style.avatar}/>

                                <div className={style.nameWrapper}>
                                    <p className={style.name}>{name}</p>
                                    <p className={style.job}>{job}</p>
                                </div>

                                {/*<p className={style.text}>{text}</p>*/}

                                <div className={style.socialLinks}>
                                    {
                                        [
                                            {
                                                icon: svgIcons.telegram,
                                                href: telegram
                                            },
                                            // {
                                            //     icon: svgIcons.linkedIn,
                                            //     href: linkedIn
                                            // },
                                            // {
                                            //     icon: svgIcons.facebook,
                                            //     href: facebook
                                            // },
                                        ].map(({icon, href}, key) => (
                                            <a href={href} className={style.socialLink} key={key}>
                                                {icon}
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>

                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <Navigation onNext={() => swiper?.slideNext()}
                        onPrev={() => swiper?.slidePrev()}
            />

            <div className={style.cardsDesktop}>
                {
                    cards.map(({src, name,job, text, twitter, linkedIn, facebook, telegram}, key) => (
                        <div className={style.card} key={key}>

                            <img src={cardDesktop} alt="" className={style.back}/>

                            <div className={style.content}>
                                <img src={src} alt="" className={style.avatar}/>

                                <div className={style.nameWrapper}>
                                    <p className={style.name}>{name}</p>
                                    <p className={style.job}>{job}</p>
                                </div>

                                {/*<p className={style.text}>{text}</p>*/}

                                <div className={style.socialLinks}>
                                    {
                                        [
                                            {
                                                icon: svgIcons.telegram,
                                                href: telegram
                                            },
                                            // {
                                            //     icon: svgIcons.twitter2,
                                            //     href: twitter
                                            // },
                                            // {
                                            //     icon: svgIcons.linkedIn,
                                            //     href: linkedIn
                                            // },
                                            // {
                                            //     icon: svgIcons.facebook,
                                            //     href: facebook
                                            // },
                                        ].map(({icon, href}, key) => (
                                            <a href={href}
                                               className={style.socialLink}
                                               key={key}
                                               target="_blank"
                                               rel="nofollow noopener noreferrer"
                                            >
                                                {icon}
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}
