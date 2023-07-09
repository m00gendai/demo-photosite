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
  const getAlbums: Response = await fetch("https://zenphoto.mrweber.ch/?json&pagination=off&depth=3")
  return getAlbums.json()
}


export default async function Home() {

  const data:Data = await getAlbums()
  const title: string = " FOTOS "
  return (
    <section className="page">
        <h1 className="pageTitle">
          {<>{title.repeat(25)} <span className="titleFocus">{title}</span> {title.repeat(25)}</>}
        </h1>
        <article>
        {data.album.albums.map(album=>{
            return <AlbumContainer key={album.title} album={album} />
          })}
        </article>
    </section>
  )
}
