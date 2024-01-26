import AlbumContainer from "@/components/AlbumContainer";
import Title from "@/components/Title";
import { metaData } from "@/utils";

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

export async function generateMetadata(){
  const title: string = "Fotostudio Peterhans - Mein Portfolio"
  const description: string = "Eine Auswahl an Fotos"
  const image: string = "/studio.png"

  return metaData(title, description, image)
}

export default async function Home() {

  const data:Data = await getAlbums()

  return (
    <section className="page">
        <Title title={" FOTOS "} />
        {data.album.albums.map(album=>{
          if(album.title !== "Galerie"){
            return <AlbumContainer key={album.title} album={album} />
          }
          })}
    </section>
  )
}
