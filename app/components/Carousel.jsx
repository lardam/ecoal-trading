import Image from 'next/image'
import CarouselImg1 from '/public/assets/commod-1.jpg'
import CarouselImg2 from '/public/assets/home-img-2.jpg'
import CarouselImg3 from '/public/assets/containers-on-ship.jpg'
import CarouselImg4 from '/public/assets/welcome-img-2.jpg'
import logo from '/public/assets/logo_1.png'

export function Carousel(props){
    return(
        <>
        <div id="carousel">
            <div className="carousel-img"><Image src={CarouselImg1} alt={props.img1} fill /></div>
            <div className="carousel-img"><Image src={CarouselImg2} alt={props.img2} fill /></div>
            <div className="carousel-img"><Image src={CarouselImg3} alt={props.img3} fill /></div>
            <div className="carousel-img"><Image src={CarouselImg4} alt={props.img4} fill /></div>
            <div className="carousel-img"><Image src={CarouselImg1} alt={props.img1} fill /></div>
            <div className="carousel-img"><Image src={CarouselImg2} alt={props.img2} fill /></div>
            <div className="carousel-img"><Image src={CarouselImg3} alt={props.img3} fill /></div>
            <div className="carousel-img"><Image src={CarouselImg4} alt={props.img4} fill /></div>
        </div>
        <div id='logo-carousel'>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
            <div className='logo-carousel-img'><Image src={logo} alt='logo' fill/></div>
        </div>
        </>
    )
}