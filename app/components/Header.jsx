import Link from "next/link"
import Image from "next/image"
import logo from "/public/assets/logo.png"
import eng from "/public/assets/eng.png"
import esp from "/public/assets/esp.png"

export function Header(){
    return(
        <header>
            <Link id="home-anchor" href="/"><Image src={logo} alt='Logo' width={125} height={96} priority/></Link>
            <Link id="lang-anchor" title="English site" href="/en" onClick={() => document.documentElement.lang = 'en'}><Image src={eng} alt='English site' width={60} height={30} /></Link>
        </header>
    )
}

export function HeaderEn(){
    return(
        <header>
            <Link id="home-anchor" href="/en"><Image src={logo} alt='Logo' width={125} height={96} priority/></Link>
            <Link id="lang-anchor" title="Sitio en español" href="/" onClick={() => document.documentElement.lang = 'es'}><Image src={esp} alt='Sitio en español' width={53} height={35} /></Link>
        </header>
    )
}

export function Footer(){
    return(
        <footer>
            <div id='footer-contact-container'>
                <h3 id='contact-title'>contacto</h3>
                <ul id='contact-list'>
                    <li><a href='mailto:gerencia@ecoaltrading.es'>gerencia@ecoaltrading.es</a></li>
                    <li><a href="mailto:ventas@ecoaltrading.es">ventas@ecoaltrading.es</a></li>
                    <li><a href="tel:34658202579">+(34) 658 202 579</a></li>
                </ul>
            </div>
            <div id='footer-copyright'>
                <p>Copyright © 2022 - Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export function FooterEn(){
    return(
        <footer>
            <div id='footer-contact-container'>
                <h5 id='contact-title'>contact</h5>
                <ul id='contact-list'>
                    <li><a href='mailto:gerencia@ecoaltrading.es'>gerencia@ecoaltrading.es</a></li>
                    <li><a href="mailto:ventas@ecoaltrading.es">ventas@ecoaltrading.es</a></li>
                    <li><a href="tel:34658202579">+(34) 658 202 579</a></li>
                </ul>
            </div>
            <div id='footer-copyright'>
                <p>Copyright © 2022 - All Rights Reserved</p>
            </div>
        </footer>
    )
}