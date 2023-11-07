import * as React from "react";
import style from "./OurPartners.module.scss";
import src1 from "../../assets/png/B3_OurPartners/1.png";
import src2 from "../../assets/png/B3_OurPartners/2.png";
import src3 from "../../assets/png/B3_OurPartners/3.png";
import src4 from "../../assets/png/B3_OurPartners/4.png";
import src5 from "../../assets/png/B3_OurPartners/5.png";
import src6 from "../../assets/png/B3_OurPartners/6.png";
import src7 from "../../assets/png/B3_OurPartners/7.png";
import src8 from "../../assets/png/B3_OurPartners/8.png";
import src9 from "../../assets/png/B3_OurPartners/9.png";
import src10 from "../../assets/png/B3_OurPartners/10.png";
import src11 from "../../assets/png/B3_OurPartners/11.png";
import src12 from "../../assets/png/B3_OurPartners/12.png";

import backMobile from "../../assets/png/B3_OurPartners/card_mobile.png";
import backDesktop from "../../assets/png/B3_OurPartners/card_desktop.png";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay} from "swiper";


const cards = [src1, src2, src3, src4, src5, src6, src7, src8, src9, src10, src11, src12];

export const OurPartners = () => {
    return (
        <div className={style.ourPartners} id="Partners">
            <h2 className={style.title}>LIVE ON</h2>

            <Swiper className={style.swiper}
                    slidesPerView="auto"
                    spaceBetween={10}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{delay: 1500}}
                    modules={[Autoplay]}
                    breakpoints={{
                        320: {
                            centeredSlides: true
                        },
                        1440: {
                            centeredSlides: false
                        }
                    }}
            >

                {
                    cards.map((src, key) => (
                        <SwiperSlide className={style.card} key={key}>
                            <img src={backMobile} alt="" className={style.backMobile}/>
                            <img src={backDesktop} alt="" className={style.backDesktop}/>
                            <img src={src} alt="" className={style.logo}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
