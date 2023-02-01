import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SVGlogo } from "../../assets/educator.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'

import CarouselComponent from "../../components/carousel/carousel.component";


const Homepage =()=>{
    return(
        <div>
			<div className="mb-12">
				<h3 className = 'text-center text-6xl font-black'>Welcome To <span className="text-orange-500 font-black text-6xl">LIBERTY HILLS!</span>
				</h3>
			</div>
			
			<div className="mt-18">
				<CarouselComponent />
			</div>
			
			<div className = 'flex my-48'>
				<div>
					<div className = 'text-lg text-center'>
                        <div className=" m-6">
                            <div>
                                <h3 className = 'text-left text-4xl '>Welcome To <span className="text-orange-500 font-black text-5xl">LIBERTY HILLS!</span> </h3>
								<p className = ' text-left text-2xl font-bold mt-4 mb-5 text-orange-500 '>Where your future begins...</p>
                            </div>
							<p className = 'text-left text-xl font-sans w-2/3'>
                                We at Liberty-Hills believe that quality education has the power to transform lives. The school's mission is to provide students with a quality, independent education that focuses on engaging and active learning, a commitment to the environment, and dedication to the school and local communities.
							</p>
                        </div>
								
						<div className = 'space-x-6 flex ml-10'>
							<Link className = 'bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-lg font-black' to = '/about'>Read More<FontAwesomeIcon icon={faChevronCircleRight} className="ml-2"/>
							</Link>
                
							<Link className = 'bg-white text-orange-500 hover:bg-orange-700 hover:text-white border-solid border-2 border-orange-500 py-2 px-3 rounded-lg font-black' to = '/contact'>Get in Touch<FontAwesomeIcon icon={faEnvelope} className=" ml-2"/>
							</Link>   
						</div>
					</div>
				</div>
						
				<div>
                    <SVGlogo  className="flex px-5"/>
				</div>
			</div>
		</div>
    )
}

export default Homepage