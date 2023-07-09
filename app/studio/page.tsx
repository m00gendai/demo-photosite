import AlbumContainer from "@/components/AlbumContainer";
import Image from "next/image";

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

interface Data{
  album: Album;
}

async function getAlbums(){
  const getAlbums: Response = await fetch("https://zenphoto.mrweber.ch/galerie/?json&pagination=off&depth=2", {
    next: {
      revalidate: 10
    }
  })
  return getAlbums.json()
}

export default async function Home() {

  const data:Data = await getAlbums()

  const albums:Albums[] = data.album.albums.filter(album=>{
    return album.title === "Galerie"
  })
  const images:Image[] = albums[0].images

  const title: string = " STUDIO "
  return (
    <section className="page">
        <h1 className="pageTitle">
          {<>{title.repeat(25)} <span className="titleFocus">{title}</span> {title.repeat(25)}</>}
        </h1>
        <article>
          <div className="studioGrid">
        <Image
          src={`https://zenphoto.mrweber.ch/${images[0].url_full}`}
          alt={images[0].title}
          width={images[0].width}
          height={images[0].height}
          />
          <div style={{
            border: "1px solid black"
          }}>
            {`DSLR CAMERA`}
          </div>
          </div>
        </article>
    </section>
  )
}
