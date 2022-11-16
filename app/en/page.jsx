'use client'
import Image from 'next/image'
import { HeaderEn, FooterEn } from "../components/Header"
import { Carousel } from '/app/components/Carousel'
import { ImgCarousel } from '../components/ImgCarousel'
import fieldImg from '/public/assets/home-img-3.jpg'
import wheatImg from '/public/assets/welcome-img-3.jpg'
import containersShip from '/public/assets/containers-on-ship.jpg'
import porkiesImg from '/public/assets/porkies.jpg'
import guyImg from '/public/assets/guy-in-a-field.jpg'

export default function English() {
    return(
        <>
            <HeaderEn />
            <main>
                <div id='about-us' className='section-container'>
                    <div id='about-text-content-top' className='section-content'>
                        <h2 id='about-title' className='section-title'>about us</h2>
                        <p className='section-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sapiente quos veritatis rerum ducimus temporibus dolor, ab, inventore atque quisquam neque nostrum beatae? Recusandae, aperiam.
                        </p>
                    </div>
                    <ImgCarousel container="Containers" grapes="Grapes" steel="Steel worker" computer="Office workers" />
                    <div id='about-text-content-btm' className='section-content'>
                        <p className='section-text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni cum possimus amet.
                        </p>
                    </div>
                </div>
                <div id='middle-img-container' className='img-container'>
                    <Image src={fieldImg} id='middle-img' alt='Field' fill />
                    <div id='middle-carousel'>
                        <div className='mid-carousel-img'>
                            <Image src={porkiesImg} alt='Some porks' fill />
                        </div>
                        <div className='mid-carousel-img'>
                            <Image src={guyImg} alt='Guy on a field' fill />
                        </div>
                        <div className='mid-carousel-img'>
                            <Image src={fieldImg} alt='Field' fill />
                        </div>
                    </div>
                </div>
                <div id='why-us' className='section-container'>
                    <div id='why-us-text-content-top' className='section-content'>
                        <h2 id='about-title' className='section-title'>¿why ecoal trading?</h2>
                        <ul className='section-list'>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, accusamus adipisci fugiat placeat vel reprehenderit.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, accusamus adipisci fugiat placeat vel reprehenderit.</li>
                        </ul>
                    </div>
                    <div id='list-img-container' className='img-container'>
                        <Image src={wheatImg} alt='Field' fill />
                    </div>
                    <div id='why-us-text-content-btm' className='section-content'>
                        <ul className='section-list'>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis voluptatem temporibus cupiditate.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis voluptatem temporibus cupiditate.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis voluptatem temporibus cupiditate.</li>
                        </ul>
                    </div>
                </div>
                <div id='bottom-img-container' className='img-container'>
                    <Image src={containersShip} alt='Containers on a ship' fill/>
                </div>
                <Carousel id="carousel" img1="Commodities" img2="Field" img3="Containers on a ship" img4="Field" />
            </main>
            <FooterEn />
        </>
    )
}