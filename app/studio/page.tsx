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
            <div className="imageContainer">
        <Image
          src={`https://zenphoto.mrweber.ch/${images[0].url_full}`}
          alt={images[0].title}
          fill={true}
          />
          </div>
          <div style={{
            whiteSpace: "pre"
          }}>
            {`
            FOTO STUDIO PETERHANS
            NEUE LINDENSTRASSENWEGGASSE 42
            0815 ANKE-BROTIKON

            001 079 42 69
            INFO@FOTOSTUDIOPETERHANS.CH

            TERMINE NACH VEREINBARUNG
            `}
          </div>
          <div style={{
            whiteSpace: "pre"
          }}>
            {`
            KODAMATIC 100
            PENTAX K-1 MARK II
            NIKON F2
            CANON EOS-1D X MARK III
            HASSELBLAD 500EL
            NOKIA 7650
            `}
          </div>
          <div className="imageContainer">
          <Image
          src={`https://zenphoto.mrweber.ch/${images[1].url_full}`}
          alt={images[1].title}
          fill={true}
          /></div>
          
          </div>
        </article>
    </section>
  )
}
