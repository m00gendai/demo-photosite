import AlbumContainer from "@/components/AlbumContainer";

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
  const getAlbums: Response = await fetch("https://zenphoto.mrweber.ch/?json&pagination=off&depth=2")
  return getAlbums.json()
}


export default async function Home() {

  const data:Data = await getAlbums()

  return (
    <section>
        <h1>FOTOS</h1>
        <article>
        {data.album.albums.map(album=>{
            return <AlbumContainer album={album} />
          })}
        </article>
    </section>
  )
}
