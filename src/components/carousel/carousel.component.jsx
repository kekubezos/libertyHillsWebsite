import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image12 from '../../assets/IMG_6432.jpg'
import image11 from '../../assets/IMG_6427.jpg'
import image10 from '../../assets/IMG_6408.jpg'
import image9 from '../../assets/IMG_6404.jpg'
import image8 from '../../assets/IMG_6348.jpg'
import image7 from '../../assets/IMG_6325.jpg'
import image6 from '../../assets/IMG_6324.jpg'
import image5 from '../../assets/IMG_6314.jpg'
import image4 from '../../assets/IMG_6391.jpg'
import image3 from '../../assets/IMG_6299.jpg'
import image2 from '../../assets/IMG_6293.jpg'
import image1 from '../../assets/IMG_6280.jpg'



const CarouselComponent = () => {
    return(
        <div>
            <Carousel className="" infiniteLoop useKeyboardArrows autoPlay>
                <div className="h-[550px] mx-auto">
                    <img src={image1} alt=""/>
                </div>
                <div className="h-[550px] mx-auto">
                    <img src={image2} alt=""/>
                </div>
                <div className="h-[550px] mx-auto">
                    <img src={image3} alt="" />
                </div>
                <div className="h-[550px] mx-auto">
                    <img src={image4} alt="" />
                </div>
                <div className="h-[550px] mx-auto">
                    <img src={image5} alt="" />
                </div>
                <div className="h-[550px] mx-auto">
                    <img src={image6} alt="" />
                </div>
                <div className="h-[550px] mx-auto">
                    <img src={image7} alt=""/>
                </div>
                <div className="h-[550px] mx-auto">
                    <img src={image8} alt=""/>
                </div>
                <div className="h-[550px] mx-auto">
                    <img src={image9} alt="" />
                </div>
                <div className="h-[550px] mx-auto">
                    <img src={image10} alt="" />
                </div>
                <div className="h-[550px] mx-auto">
                    <img src={image11} alt="" />
                </div>
                <div className="h-[550px] mx-auto">
                    <img src={image12} alt="" />
                </div>

            </Carousel>
        </div>
    )
}

export default CarouselComponent


