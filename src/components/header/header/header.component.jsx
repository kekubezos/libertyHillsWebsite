import React from "react";
import {Link} from "react-router-dom";
import schoolLogo from '../../../assets/school-logo.png'

const Header=()=>{
    return(
        <div className='h-20 w-full flex justify-between mb-6'>
            <img  className='w-34 h-24' src={schoolLogo} alt="image"/>

            <div className='w-6/12 h-full flex items-center justify-end font-black'>
                <Link className='py-2 px-4 text-orange-500 text-lg' to='/'>HOME</Link>
                <Link className='py-2 px-4 text-orange-500 text-lg' to='/about'>ABOUT</Link>
                <Link className='py-2 px-4 text-orange-500 text-lg' to='/academics'>ACADEMICS</Link>
                {/* <Link className='py-2 px-4 text-orange-500 text-lg' to='/gallery'>GALLERY</Link> */}
                <Link className='py-2 px-4 text-orange-500 text-lg' to='/contact'>CONTACT</Link>
                
            </div>
        </div>
    )
}

export default Header