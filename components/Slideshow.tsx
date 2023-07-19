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

interface Next{
  path: string;
  title: string;
  date: number;
  date_updated: number;
  image_size: number;
  thumb_size: number;
  url_thumb: string;
}

interface Albums{
  path: string;
  title: string;
  date: number;
  date_updated: number;
  image_size: number;
  thumb_size: number;
  url_thumb: string;
  images: Image[];
  next: Next;
}

interface Album{
  title: string;
  desc: string;
  path: string;
  image_size: number;
  thumb_size: number;
  albums: Albums[];
}

interface SliderProps{
    rtl: boolean;
    album:Albums[]
  }

export default function Slideshow({rtl, album}:SliderProps){
  const min:number = 0
  const max:number = Math.floor(album.length-1);
  function getRando(){
    const rando:number = Math.floor(Math.random() * (max - min + 1) + min);
    if(album[rando].title === "Galerie"){
      return getRando()
    } else {
      return rando
    }
  }

const images:Image[] = album[getRando()].images

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
                    height: "30vh",
                    overflow: "hidden",
                    objectFit: "contain",
                    backgroundImage: `url("https://zenphoto.mrweber.ch${image.url_thumb}")`,
                    backgroundSize: "512px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                }}>
                <Image
                    src={`https://zenphoto.mrweber.ch/${image.url_full}`}
                    alt={image.title}
                    width={image.width}
                    height={image.height}
                >
                </Image>
                </div>
            </SwiperSlide>
        })}
    </Swiper>
    )
}