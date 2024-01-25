import s from "@/styles/Title.module.css"

interface Props{
    title: string
}

export default function Title({title}:Props){
    return(
        <h1 className={s.title}>
            {
                <>
                    {`${title}`.repeat(25)}<span className="titleFocus">{`${title}`}</span>{`${title}`.repeat(25)}
                </>
            }
        </h1>
    )
}