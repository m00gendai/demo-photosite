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
      <div className={s.info}>
        <div className={s.infohalf}>
          <h2>Preise</h2>
          <ul>
            <li>Passfotos: CHF 20 pro 6 Stück</li>
            <li>Personenshooting im Studio: CHF 120 / Stunde </li>
            <li>Personenshooting an Location: CHF 180 / Stunde</li>
            <li>Haustiershooting im Studio: CHF 80 / Stunde</li>
            <li>Haustiershooting an Location: CHF 120 / Stunde</li>
            <li>Produktfotografie im Studio: CHF 150 / Stunde</li>
            <li>Produktfotografie an Location: CHF 180 / Stunde</li>
          </ul>
        </div>
        <div className={s.infohalf}>
          <h2>Equipment</h2>
          <ul>
            <li>Kodamatic 100</li>
            <li>Pentax K-1 Mark II</li>
            <li>Nikon F2</li>
            <li>Canon EOS-1D X Mark III</li>
            <li>Hasselblad 500EL</li>
            <li>Nokia 7650</li>
          </ul>
        </div>
        <div className={s.infofull}>
          <p>Anfahrt Region Anketal (Anke-Brotikon, Serwila, Tillsid, Lyona, Sebrinz und Dinkelsrieden) kostenlos, darüber hinaus CHF 5 / km</p>
          <p>Alles andere nach Absprache, auch Spezialwünsche.</p>
          <p>Bilddateien roh auf USB immer kostenlos, inklusive 5 bearbeitete Bilder nach Wunsch.</p>
        </div>
      </div>
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
              <p>
                {`FOTO STUDIO PETERHANS
                  STURMGASS 42
                  0815 ANKE-BROTIKON

                  001 079 42 69
                  INFO@FOTOSTUDIOPETERHANS.CH

                  TERMINE NACH VEREINBARUNG`}
              </p>
            </div>
          </div>
        </div>
    </section>
  )
}
