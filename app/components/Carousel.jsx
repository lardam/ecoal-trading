import Image from 'next/image'
import CarouselImg1 from '/public/assets/commod-1.jpg'
import CarouselImg2 from '/public/assets/home-img-2.jpg'
import CarouselImg3 from '/public/assets/plane.jpeg'
import CarouselImg4 from '/public/assets/welcome-img-2.jpg'
import logo from '/public/assets/logo_1.png'

export function Carousel(){
    return(
        <>
        <div id="carousel">
            <div className="carousel-img"><Image src={CarouselImg1} alt='' fill /></div>
            <div className="carousel-img"><Image src={CarouselImg2} alt='' fill /></div>
            <div className="carousel-img"><Image src={CarouselImg3} alt='' fill /></div>
            <div className="carousel-img"><Image src={CarouselImg4} alt='' fill /></div>
            <div className="carousel-img"><Image src={CarouselImg1} alt='' fill /></div>
            <div className="carousel-img"><Image src={CarouselImg2} alt='' fill /></div>
            <div className="carousel-img"><Image src={CarouselImg3} alt='' fill /></div>
            <div className="carousel-img"><Image src={CarouselImg4} alt='' fill /></div>
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