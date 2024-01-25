import FrontGrid from "@/components/FrontGrid";
import Title from "@/components/Title";
import { Gallery } from "@/interfaces";
import { metaData } from "@/utils";

async function getGallery(){
  const getGallery: Response = await fetch("https://zenphoto.mrweber.ch/galerie/?json&pagination=off&depth=2", {
    next: {
      revalidate: 10
    }
  })
  return getGallery.json()
}

export async function generateMetadata(){
  const title: string = "Fotostudio Peterhans - Das Fotostudio im Anketal"
  const description: string = "Das Fotostudio im Anketal, spezialisiert auf Mensch und Portrait."
  const image: string = "/studio.png"
  const icon: string = ""

  return metaData(title, description, image, icon)
}

export default async function Home() {

  const gallery:Gallery = await getGallery()
  const title: string = " FOTO STUDIO PETERHANS "
  const address: string = " STURMGASS 42 "
  const place: string = " 0815 ANKE-BROTIKON "

  return (
    <section className="page">
        <FrontGrid gallery={gallery} mobile={false} />
        <Title title={" FOTO STUDIO PETERHANS "} />
        <FrontGrid gallery={gallery} mobile={true}/>
    </section>
  )
}
