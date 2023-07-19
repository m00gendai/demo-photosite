"use client"

import Link from "next/link"
import s from "@/styles/Navbar_Mobile.module.css"
import {GiHamburger, GiKnifeFork} from "react-icons/gi"
import {useState} from "react"

export default function Navbar_Mobile(){

    const [open, setOpen] = useState<boolean>(false)

    function handleClick(){
        setOpen(!open)
    }

    function handleLink(){
            setOpen(!open)

    }

    return (
        <nav className={s.nav}>
            {open ? <GiKnifeFork
                style={{margin: "0 1rem 0 0", fontSize: "2rem", color: "grey"}}
                onClick={()=>handleClick()}
                className={s.icon}/>
            :
            <GiHamburger 
                style={{margin: "0 1rem 0 0", fontSize: "2rem", color: "black"}}
                onClick={()=>handleClick()}
                className={s.icon}/>
            }
            {open ? <div className={s.inner}>
                <Link className={s.link} onClick={()=>handleLink()} href= "/">HOME</Link>
                <Link className={s.link} onClick={()=>handleLink()} href= "/fotos">FOTOS</Link>
                <Link className={s.link} onClick={()=>handleLink()} href= "/studio">STUDIO</Link>
                <Link className={s.link} onClick={()=>handleLink()} href= "/fotograf">FOTOGRAF</Link>
            </div>
            :
            null}
        </nav>
    )
}