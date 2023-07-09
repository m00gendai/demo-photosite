import Link from "next/link";
import React from "react";

export default function Navbar(){
    return(
        <nav>
          <Link href="/">HOME</Link>
          <Link href="/fotos">FOTOS</Link>
          <Link href="/studio">STUDIO</Link>
        </nav>
    )
}