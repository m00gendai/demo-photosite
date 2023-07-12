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
        <details className={s.album}>
            <summary 
                className={s.summary}
                style={{
                    backgroundImage: `url("https://zenphoto.mrweber.ch${album.images[0].url_thumb}")`
                }}
            >
                <div style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backdropFilter: "blur(5px)",
                    backgroundImage: `url("https://zenphoto.mrweber.ch${album.images[0].url_full}")`,
                }}>
                    {album.title}
                </div>
            </summary>
            <div className={s.container}>
            {album.images.map(image=>{
                return (<div
                        className={s.thumb}
                        style={{
                            backgroundImage: `url("https://zenphoto.mrweber.ch${image.url_thumb}")`
                        }}
                        key={image.url_full}
                    ><div style={{backdropFilter: "blur(5px)"}}>
                        <Image
                            src={`https://zenphoto.mrweber.ch/${image.url_full}`}
                            alt={image.title}
                            width={image.width}
                            height={image.height}
                            loading="lazy"
                            ></Image></div>
                    </div>
                )
            })}
            </div>
        </details>
    )
}