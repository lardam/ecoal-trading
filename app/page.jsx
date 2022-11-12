import Image from 'next/image'
import { Header, Footer } from '/app/components/Header'
import cowImg from '/public/assets/home-img-1.jpg'
import fieldImg from '/public/assets/home-img-3.jpg'
import wheatImg from '/public/assets/welcome-img-3.jpg'
import planeImg from '/public/assets/plane.jpeg'

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
                    <div id='about-img-container' className='img-container'>
                        <Image src={cowImg} alt='asd' fill priority/>
                    </div>
                    <div id='about-text-content-btm' className='section-content'>
                        <p className='section-text'>
                        Nuestra experiencia nos ha permitido trabajar con empresas 
                        de diferentes sectores  y en diferentes puntos del mundo. 
                        </p>
                    </div>
                </div>
                <div id='middle-img-container' className='img-container'>
                    <Image src={fieldImg} alt='asd' fill />
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
                        <Image src={wheatImg} alt='asd' fill />
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
                    <Image src={planeImg} alt='plane' fill/>
                </div>
            </main>
            <Footer />
        </>
    )
}