"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/autoplay"

interface Image{
    path: string;
    title: string;
    date: number;
    url_full: string;
    url_sized: string;
    url_thumb: string;
    width: number;
    height: number;
    index: Number;
  }

interface SliderProps{
    rtl: boolean;
    images:Image[]
  }

export default function Slideshow({rtl, images}:SliderProps){

    return(
    <Swiper
    freeMode={{enabled: true}}
      spaceBetween={0}
      slidesPerView={4}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: rtl,
      }}
      speed={5000}
      loop={true}
      modules={[Autoplay]}
    >
        {images.map(image=>{
            return <SwiperSlide key={`swiperItem_${image.path}`}>
                <div style={{
                    position: "relative",
                    width: "25vw",
                    aspectRatio: "1/1",
                    overflow: "hidden",
                    objectFit: "contain",
                    backgroundImage: `url("https://zenphoto.mrweber.ch${image.url_thumb}")`,
                    backgroundSize: "512px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",

                }}>
                <Image
                    src={`https://zenphoto.mrweber.ch/${image.url_full}`}
                    alt={image.title}
                    fill={true}
                >
                </Image>
                </div>
            </SwiperSlide>
        })}
    </Swiper>
    )
}