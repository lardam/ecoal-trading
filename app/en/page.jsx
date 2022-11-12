import Image from 'next/image'
import { HeaderEn, FooterEn } from "../components/Header"
import cowImg from '/public/assets/home-img-1.jpg'
import fieldImg from '/public/assets/home-img-3.jpg'
import wheatImg from '/public/assets/welcome-img-3.jpg'
import planeImg from '/public/assets/plane.jpeg'


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
                    <div id='about-img-container' className='img-container'>
                        <Image src={cowImg} alt='asd' fill priority/>
                    </div>
                    <div id='about-text-content-btm' className='section-content'>
                        <p className='section-text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni cum possimus amet.
                        </p>
                    </div>
                </div>
                <div id='middle-img-container' className='img-container'>
                    <Image src={fieldImg} alt='asd' fill />
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
                        <Image src={wheatImg} alt='asd' fill />
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
                    <Image src={planeImg} alt='plane' fill/>
                </div>
            </main>
            <FooterEn />
        </>
    )
}