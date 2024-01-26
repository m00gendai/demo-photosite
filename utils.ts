export function metaData(title:string, description:string, image:string){
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
            icon: "/logo.png",
            shortcut: "/logo.png",
            apple: "/logo.png",
            other: {
                rel: 'apple-touch-icon-precomposed',
                url: "/logo.png",
            },
        },
    }
}