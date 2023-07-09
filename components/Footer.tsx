import React from "react";
import Link from "next/link"

export default function Footer(){
    return(
        <footer>
            Alle Bilder enstammen <Link href="https://beta.dreamstudio.ai/" target="_blank">DreamStudio (Stable Diffusion SDXL Beta)</Link> Alle Texte entstammen <Link href="https://chat.openai.com/" target="_blank">ChatGPT-3</Link> mit Ausnahme von Adresse und Kontaktdaten. Diese sind aber ebenfalls fiktiv. Die Webseite ist ein Demo-Projekt von <Link href="https://mrweber.ch" target="_blank">mrweber.ch</Link>
        </footer>
    )
}