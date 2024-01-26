import Title from "@/components/Title";
import { Album, Gallery, Medium } from "@/interfaces";
import s from "@/styles/studio.module.css"
import { metaData } from "@/utils";
import Image from "next/image";

async function getGallery(){
  const getGallery: Response = await fetch("https://zenphoto.mrweber.ch/galerie/?json&pagination=off&depth=2", {
    next: {
      revalidate: 10
    }
  })
  return getGallery.json()
}

export async function generateMetadata(){
  const title: string = "Fotostudio Peterhans - Informationen"
  const description: string = "Adresse, Kontaktmöglichkeiten, Öffnungszeiten, Kostenübersicht sowie Equipment des Fotostudio Peterhans in Anke-Brotikon."
  const image: string = "/studio.png"

  return metaData(title, description, image)
}

export default async function Home() {

  const gallery:Gallery = await getGallery()

  const albums:Album[] = gallery.album.albums.filter(album=>{
    return album.title === "Galerie"
  })
  const images:Medium[] = albums[0].images

  return (
    <section className="page">
      <Title title={" STUDIO "} />
        <div className={s.grid}>
          <div 
            className={s.imageContainer} 
            style={{
              backgroundImage: `url("https://zenphoto.mrweber.ch/${images[0].url_thumb}")`,
            }}
          >
              <Image
                src={`https://zenphoto.mrweber.ch/${images[0].url_full}`}
                alt={images[0].title}
                fill={true}
                style={{objectFit:"cover"}}
              />
          </div>
          <div className={s.textfield} style={{backgroundImage: `url("https://zenphoto.mrweber.ch/${images[0].url_thumb}")`}}>
            <div className={s.text}>
              {`
                FOTO STUDIO PETERHANS
                STURMGASS 42
                0815 ANKE-BROTIKON

                001 079 42 69
                INFO@FOTOSTUDIOPETERHANS.CH

                TERMINE NACH VEREINBARUNG
              `}
            </div>
          </div>
          <div className={s.textfield} style={{backgroundImage: `url("https://zenphoto.mrweber.ch/${images[1].url_full}")`}}>
            <div className={s.text}>
              {`
                PASSFOTOS --- CHF 20 PRO 6 STÜCK
                PERSONENSHOOTING STUDIO --- CHF 120 / STUNDE 
                PERSONENSHOOTING LOCATION --- CHF 180 / STUNDE
                HAUSTIERSHOOTING STUDIO --- CHF 80 / STUNDE
                HAUSTIERSHOOTING LOCATION --- CHF 120 / STUNDE

                ANDERES NACH ABSPACHE

                BILDDATEIEN AUF USB --- KOSTENLOS
                BILDDRUCK NACH ABSPRACHE
              `}
            </div>
          </div>
          <div className={s.imageContainer}>
           <Image
              src={`https://zenphoto.mrweber.ch/${images[1].url_full}`}
              alt={images[1].title}
              fill={true}
              style={{objectFit:"cover"}}
            />
          </div>
          <div className={s.imageContainer}>
           <Image
              src={`https://zenphoto.mrweber.ch/${images[2].url_full}`}
              alt={images[1].title}
              fill={true}
              style={{objectFit:"cover"}}
            />
          </div>
          <div className={s.textfield} style={{backgroundImage: `url("https://zenphoto.mrweber.ch/${images[2].url_full}")`}}>
            <div className={s.text}>
              {`
                KODAMATIC 100
                PENTAX K-1 MARK II
                NIKON F2
                CANON EOS-1D X MARK III
                HASSELBLAD 500EL
                NOKIA 7650
              `}
            </div>
          </div>
        </div>
    </section>
  )
}
