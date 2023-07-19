import Slideshow from "@/components/Slideshow"

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

  const min:number = 0
  const max:number = Math.floor(data.album.albums.length-1);
  function getRando(){
    const rando:number = Math.floor(Math.random() * (max - min + 1) + min);
    if(data.album.albums[rando].title === "Galerie"){
      return getRando()
    } else {
      return rando
    }
  }


  const images1:Image[] = data.album.albums[getRando()].images
  const images2:Image[] = data.album.albums[getRando()].images

  const title: string = " FOTO STUDIO PETERHANS "

  return (
    <section className="page">
        <h1 className="pageTitle">
          {<>{title.repeat(25)} <span className="titleFocus">{title}</span> {title.repeat(25)}</>}
        </h1>
        <Slideshow rtl={true} images={images1}/>
        <Slideshow rtl={false} images={images2}/>
    </section>
  )
}
