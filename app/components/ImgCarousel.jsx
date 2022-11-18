import Image from "next/image"
import containers from "/public/assets/container.jpg"
import steel from "/public/assets/steel.jpg"
import computers from "/public/assets/computers.jpg"
import grapes from "/public/assets/home-img-2.jpg"

export function ImgCarousel(props){
    return(
        <div id="about-img-container" className="img-container">
            <div className="carousel-img-container">
                <Image src={containers} alt={props.container} fill />
            </div>
            <div className="carousel-img-container">
                <Image src={grapes} alt={props.grapes} fill />
            </div>
            <div className="carousel-img-container">
                <Image src={steel} alt={props.steel} fill />
            </div>
            <div className="carousel-img-container">
                <Image src={computers} alt={props.computers} fill />
            </div>
            <div className="carousel-img-container">
                <Image src={containers} alt={props.container} fill />
            </div>
        </div>
    )
}