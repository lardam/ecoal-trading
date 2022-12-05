'use client'
import Image from 'next/image'
import { HeaderEn, FooterEn } from "../components/Header"
import { Carousel } from '/app/components/Carousel'
import { ImgCarousel } from '../components/ImgCarousel'
import wheatImg from '/public/assets/welcome-img-3.jpg'
import containersShip from '/public/assets/containers-on-ship.jpg'
import darkPortImg from '/public/assets/port-1.jpg'
import portImg from '/public/assets/port-2.jpg'
import esPortImg from '/public/assets/port-3.jpg'

export default function English() {
    return(
        <>
            <HeaderEn />
            <main>
                <div id='about-us' className='section-container'>
                    <div id='about-text-content-top' className='section-content'>
                        <h2 id='about-title' className='section-title'>about us</h2>
                        <p className='section-text'>
                        Ecoal Trading is a spanish company that  facilitates the trading and distribution of goods and services between different companies.                        </p>
                    </div>
                    <ImgCarousel container="Containers" grapes="Grapes" steel="Steel worker" computer="Office workers" />
                    <div id='about-text-content-btm' className='section-content'>
                        <p className='section-text'>
                        Our experience is extensive. We have worked with companies from various sectors and in different parts of the world.                        </p>
                    </div>
                </div>
                <div id='middle-img-container' className='img-container'>
                    <Image src={portImg} id='middle-img' alt='Port' fill />
                    <div id='middle-carousel'>
                        <div className='mid-carousel-img'>
                            <Image src={portImg} alt='Port' fill />
                        </div>
                        <div className='mid-carousel-img'>
                            <Image src={esPortImg} alt='Port in Barcelona' fill />
                        </div>
                        <div className='mid-carousel-img'>
                            <Image src={darkPortImg} alt='Port' fill />
                        </div>
                    </div>
                </div>
                <div id='why-us' className='section-container'>
                    <div id='why-us-text-content-top' className='section-content'>
                        <h2 id='about-title' className='section-title'>why ecoal trading?</h2>
                        <ul className='section-list'>
                            <li>A way of working based on honesty, transparency and professionalism.</li>
                            <li>A wide network of contacts in different sectors of the economy.</li>
                        </ul>
                    </div>
                    <div id='list-img-container' className='img-container'>
                        <Image src={wheatImg} alt='Field' fill />
                    </div>
                    <div id='why-us-text-content-btm' className='section-content'>
                        <ul className='section-list'>
                            <li>We work directly with companies that are manufacturers of the best products and at the best price.</li>
                            <li>Getting the best conditions to meet the needs of our clients.</li>
                            <li>Control and monitoring of the total sales process with attention, agility and proposing solutions.</li>
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