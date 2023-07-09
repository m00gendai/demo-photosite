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

  const title: string = " FOTOGRAF "
  return (
    <section className="page">
        <h1 className="pageTitle">
          {<>{title.repeat(25)} <span className="titleFocus">{title}</span> {title.repeat(25)}</>}
        </h1>
        <article>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "wrap",
            position: "relative"

          }}>
            <div className="imageContainer">
        <Image
          src={`https://zenphoto.mrweber.ch/${images[2].url_full}`}
          alt={images[2].title}
          fill={true}
          />
          </div>
          <div style={{
            whiteSpace: "pre-line",
            textTransform: "uppercase",
            width: "90%",
            position: "relative",
          }}>
            {`
            Als professioneller Fotograf in meinen 40ern namens Hanspeter Peterhans möchte ich Ihnen meine inspirierende Geschichte erzählen. Fotografie war nicht immer meine Berufung, doch die Liebe zur Kunst des Bildermachens hat mich auf eine außergewöhnliche Reise geführt.

            Ursprünglich führte ich eine Karriere in einem völlig anderen Bereich. Doch während meiner Reisen und Begegnungen mit verschiedenen Kulturen entdeckte ich meine Leidenschaft für die Fotografie. Die Art und Weise, wie Bilder Geschichten erzählen und Emotionen einfangen können, faszinierte mich zutiefst.
            
            Ich begann, meine fotografischen Fähigkeiten in meiner Freizeit zu entwickeln und experimentierte mit verschiedenen Techniken und Stilen. Die positiven Rückmeldungen von Freunden und Familie bestärkten mich darin, meiner Leidenschaft weiter nachzugehen.
            
            Schließlich entschied ich mich, mein eigenes kleines Fotostudio zu eröffnen. Es war ein mutiger Schritt, aber ich wollte meine künstlerische Vision mit anderen teilen und Menschen mit meinen Bildern Freude bereiten. In meinem Studio konnte ich meine Kreativität ausleben und meine Kunden dabei unterstützen, ihre einzigartigen Geschichten festzuhalten.
            
            Mit viel Engagement und harter Arbeit wuchs mein Fotostudio zu einem Ort, an dem Menschen ihre besonderen Momente, sei es Hochzeiten, Familienporträts oder berufliche Projekte, einfangen konnten. Ich pflege enge Beziehungen zu meinen Kunden und arbeite mit ihnen zusammen, um ihre Visionen in einzigartige Bilder zu verwandeln.
            
            Trotz meines späten Einstiegs in die Fotografie habe ich gelernt, dass Leidenschaft und Hingabe keine Altersgrenzen haben. Jeder Tag bietet neue Möglichkeiten, meine Fähigkeiten weiterzuentwickeln und meine künstlerische Stimme zu finden.
            
            Als Hanspeter Peterhans bin ich stolz darauf, Menschen mit meiner Kunst zu berühren und ihre Erinnerungen für die Ewigkeit festzuhalten. Mein kleines Fotostudio ist ein Ort der Kreativität und des Austauschs, an dem ich meine Leidenschaft leben und die Geschichten meiner Kunden zum Leben erwecken kann.
            `}
          </div>
          </div>
        </article>
    </section>
  )
}
