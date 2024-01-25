import Image from "next/image"
import s from "../styles/FrontGrid.module.css"
import { Album, Gallery } from "@/interfaces"

interface Props{
    gallery: Gallery
    mobile: boolean
}

export default function FrontGrid({gallery, mobile}:Props){

    function generateIndex(length:number){
        return Math.floor(Math.random() * length);
    }

    return(
    <div className={`${s.grid} ${mobile ? "" : s.desktop}`}>
    {gallery.album.albums.map((type, iter)=>{
        const index:number = generateIndex(type.images.length)
        return(
            <div 
                className={s.container}
                style={{
                    backgroundImage: `url("https://zenphoto.mrweber.ch${type.images[index].url_thumb}")`
                }}
                key={`frontgrid_${iter}`}
            >
                <Image 
                    src={`https://zenphoto.mrweber.ch${type.images[index].url_full}`}
                    alt={type.images[0].title}
                    fill={true}
                    style={{objectFit: "cover"}}
                />
            </div>
        )
      })}
      </div>
    )
}