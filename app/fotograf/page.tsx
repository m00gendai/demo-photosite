import Image from "next/image";
import s from "../../styles/fotograf.module.css"
import { Album, Gallery, Medium } from "@/interfaces";
import Title from "@/components/Title";
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
  const title: string = "Fotostudio Peterhans - Der Fotograf"
  const description: string = "Ein klein wenig über mich"
  const image: string = "/studio.png"
  const icon: string = ""

  return metaData(title, description, image, icon)
}

export default async function Home() {

  const gallery:Gallery = await getGallery()

  const albums:Album[] = gallery.album.albums.filter(album=>{
    return album.title === "Galerie"
  })
  const images:Medium[] = albums[0].images

  return (
    <section className="page">
        <Title title={" FOTOGRAF "} />
        <div className={s.container}>
            <div className={s.imageContainer}>
              <Image
                src={`https://zenphoto.mrweber.ch/${images[3].url_full}`}
                alt={images[2].title}
                fill={true}
                objectFit="cover"
                />
              </div>
              <div className={s.text}>
                {`Als professioneller Fotograf in meinen 40ern namens Hanspeter Peterhans möchte ich Ihnen meine inspirierende Geschichte erzählen. Fotografie war nicht immer meine Berufung, doch die Liebe zur Kunst des Bildermachens hat mich auf eine außergewöhnliche Reise geführt.

            Ursprünglich führte ich eine Karriere in einem völlig anderen Bereich. Doch während meiner Reisen und Begegnungen mit verschiedenen Kulturen entdeckte ich meine Leidenschaft für die Fotografie. Die Art und Weise, wie Bilder Geschichten erzählen und Emotionen einfangen können, faszinierte mich zutiefst.
            
            Ich begann, meine fotografischen Fähigkeiten in meiner Freizeit zu entwickeln und experimentierte mit verschiedenen Techniken und Stilen. Die positiven Rückmeldungen von Freunden und Familie bestärkten mich darin, meiner Leidenschaft weiter nachzugehen.
            
            Schließlich entschied ich mich, mein eigenes kleines Fotostudio zu eröffnen. Es war ein mutiger Schritt, aber ich wollte meine künstlerische Vision mit anderen teilen und Menschen mit meinen Bildern Freude bereiten. In meinem Studio konnte ich meine Kreativität ausleben und meine Kunden dabei unterstützen, ihre einzigartigen Geschichten festzuhalten.
            
            Mit viel Engagement und harter Arbeit wuchs mein Fotostudio zu einem Ort, an dem Menschen ihre besonderen Momente, sei es Hochzeiten, Familienporträts oder berufliche Projekte, einfangen konnten. Ich pflege enge Beziehungen zu meinen Kunden und arbeite mit ihnen zusammen, um ihre Visionen in einzigartige Bilder zu verwandeln.
            
            Trotz meines späten Einstiegs in die Fotografie habe ich gelernt, dass Leidenschaft und Hingabe keine Altersgrenzen haben. Jeder Tag bietet neue Möglichkeiten, meine Fähigkeiten weiterzuentwickeln und meine künstlerische Stimme zu finden.
            
            Als Hanspeter Peterhans bin ich stolz darauf, Menschen mit meiner Kunst zu berühren und ihre Erinnerungen für die Ewigkeit festzuhalten. Mein kleines Fotostudio ist ein Ort der Kreativität und des Austauschs, an dem ich meine Leidenschaft leben und die Geschichten meiner Kunden zum Leben erwecken kann.
            `}
          </div>
          </div>
    </section>
  )
}
