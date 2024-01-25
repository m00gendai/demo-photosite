export async function metaData(title:string, description:string, image:string, icon:string){
    return {
        title: title,
        description: description,
        openGraph: {
            title: title,
            description: description,
            images: [
                {
                    url: image,
                }
            ],
            locale: 'de_CH',
            type: 'website',
        },
        icons: {
            icon: icon,
            shortcut: icon,
            apple: icon,
            other: {
                rel: 'apple-touch-icon-precomposed',
                url: icon,
            },
        },
    }
}