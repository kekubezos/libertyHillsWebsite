import React from "react";
import {ReactComponent as GalleryLogo } from '../../assets/gallery.svg'


const Gallery = () => {
    return(
        <div>
            <h1 className=" text-5xl text-center font-black">Our <span className=" text-orange-500 font-black">Gallery</span>
            </h1>

            <div>
                <GalleryLogo/>
            </div>
        </div>
    )
}

export default Gallery