import s from "@/styles/ImageContainer.module.css"
import Image from "next/image"

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

  interface Props{
    album: Albums;
  }
  
  export default function AlbumContainer({album}:Props){
    return(
        <details>
            <summary>
                {album.title}
            </summary>
            <div className={s.container}>
            {album.images.map(image=>{
                return (
                    <div 
                        className={s.thumb}
                        style={{
                            backgroundImage: `url("https://zenphoto.mrweber.ch/${image.url_thumb}")`
                        }}
                    >
                        <Image
                            src={`https://zenphoto.mrweber.ch/${image.url_full}`}
                            alt={image.title}
                            width={image.width}
                            height={image.height}
                            loading="lazy"
                            objectFit="cover"
                            ></Image>
                    </div>
                )
            })}
            </div>
        </details>
    )
}