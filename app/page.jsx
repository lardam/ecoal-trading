'use client'
import Image from 'next/image'
import { Header, Footer } from '/app/components/Header'
import { Carousel } from '/app/components/Carousel'
import { ImgCarousel } from './components/ImgCarousel'
import wheatImg from '/public/assets/welcome-img-3.jpg'
import containersShip from '/public/assets/containers-on-ship.jpg'
import darkPortImg from '/public/assets/port-1.jpg'
import portImg from '/public/assets/port-2.jpg'
import esPortImg from '/public/assets/port-3.jpg'

export default function Home() {
    return(
        <>
            <Header />
            <main>
                <div id='about-us' className='section-container'>
                    <div id='about-text-content-top' className='section-content'>
                        <h2 id='about-title' className='section-title'>sobre nosotros</h2>
                        <p className='section-text'>
                        Ecoal Trading somos una empresa española que promueve 
                        y facilita el intercambio y la distribución de bienes 
                        y servicios entre diferentes empresas a nivel global. 
                        </p>
                    </div>
                    <ImgCarousel container="Contenedores" grapes="Uvas" steel="Trabajador metalúrgico" computers="Trabajadores en oficinas" />
                    <div id='about-text-content-btm' className='section-content'>
                        <p className='section-text'>
                        Nuestra experiencia nos ha permitido trabajar con empresas 
                        de distintos sectores  y en diferentes puntos del mundo. 
                        </p>
                    </div>
                </div>
                <div id='middle-img-container' className='img-container'>
                    <Image src={portImg} id='middle-img' alt='Puerto' fill />
                    <div id='middle-carousel'>
                        <div className='mid-carousel-img'>
                            <Image src={portImg} alt='Puerto' fill />
                        </div>
                        <div className='mid-carousel-img'>
                            <Image src={esPortImg} alt='Puerto en Barcelona' fill />
                        </div>
                        <div className='mid-carousel-img'>
                            <Image src={darkPortImg} alt='Puerto' fill />
                        </div>
                    </div>
                </div>
                <div id='why-us' className='section-container'>
                    <div id='why-us-text-content-top' className='section-content'>
                        <h2 id='about-title' className='section-title'>¿por qué ecoal trading?</h2>
                        <ul className='section-list'>
                            <li>Nuestra forma de trabajar se  basa en la honestidad, la transparencia y la profesionalidad.</li>
                            <li>Contamos con una amplia red de contactos en diferentes sectores económicos.</li>
                        </ul>
                    </div>
                    <div id='list-img-container' className='img-container'>
                        <Image src={wheatImg} alt='Campo' fill />
                    </div>
                    <div id='why-us-text-content-btm' className='section-content'>
                        <ul className='section-list'>
                            <li>Trabajamos directamente con compañías que son fabricantes de los mejores productos y al mejor precio.</li>
                            <li>Obtenemos las mejores condiciones para satisfacer las necesidades de nuestros clientes.</li>
                            <li>Hacemos un seguimiento constante del proceso de intercambio comercial : con la máxima atención, con agilidad y aportando soluciones.</li>
                        </ul>
                    </div>
                </div>
                <div id='bottom-img-container' className='img-container'>
                    <Image src={containersShip} alt='Contenedores en barco' fill/>
                </div>
                <Carousel id="carousel" img1="Cosecha" img2="Campo" img3="Contenedores en barco" img4="Campo" />
            </main>
            <Footer />
        </>
    )
}