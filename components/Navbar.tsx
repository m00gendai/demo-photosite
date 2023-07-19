import Link from "next/link";
import React from "react";
import s from "@/styles/Navbar.module.css"

export default function Navbar(){
    return(
        <nav className={s.nav}>
          <div className={s.inner}>
            <Link className={s.link} href="/">HOME</Link>
            <Link className={s.link} href="/fotos">FOTOS</Link>
            <Link className={s.link} href="/studio">STUDIO</Link>
            <Link className={s.link} href="/fotograf">FOTOGRAF</Link>
          </div>
        </nav>
    )
}