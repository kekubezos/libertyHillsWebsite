import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as AcademicsLogo } from "../../assets/academics-final.svg";
import preSchool from '../../assets/pre-school.jpg'
import primarySchool from '../../assets/primary-school.jpg'
import JHS from '../../assets/JHS.jpg'


const Academics = () =>{
    return(
        <div>
            <h1 className=" text-6xl text-center font-black">Academics<span className="ml-2 text-orange-500 font-black">In Liberty Hills.</span></h1>
            <div className="flex">
                <div>
                    <AcademicsLogo/>
                </div>

                <div className="my-16">
                    <h1 className="font-black text-center text-5xl my-6">
                        Commitment <span className=" text-orange-500"> to Excellence.</span>
                    </h1>
                    <div className="text-xl font-sans text-center mt-4 bg-orange-500 ml-8 py-5 border rounded-xl">
                        <p className=" w-5/6 mx-auto font-semibold text-lg">
                        By integrating the strengths of the Montessori and Early Years curriculum in our early years' classes, we have created a rich set of coursework that nurtures our students' innate curiosity, develops independence, and enables them to explore their potential while learning at their own pace. 

                        The daily schedule is enriched through the inclusion of language studies, drama, art, ballet, and music (piano and violin lessons). 

                        We currently have programs for toddlers, preschoolers, kindergarten students, primary school students, and junior high students. Admissions are on a rolling basis, provided there are slots available.
                        <br /><br />
                        <span className="mx-8 font-black text-2xl block">Afterschool <span className=" text-orange-500">Activities.</span></span>
                        The school day concludes at 3:30 p.m., but the learning does not! We have several enrichment programs designed to meet your child’s interests and talents.
                        After-school programs are available to children aged 3 and up and run from 4 to 5 p.m. Monday through Friday.
                        Ballet, coding, art club, drum club, piano, and folklore club are currently available. Look out for more, as we hope to offer new and exciting programs with time! 
                        </p>
                    </div>
                    
                </div>
            </div>   

            <div>
                <h1 className=" text-center font-black text-6xl">Departments In <span className=" text-orange-500">Liberty Hills.</span>
                </h1>
                <div className="w-full flex my-8 space-x-16">
                    <div className="w-1/3 ml-16 relative">
                        <img className="h-80" src={preSchool} alt="preSchool"/>
                        <h1><Link class="w-2/3 absolute font-black text-5xl text-white hover:text-orange-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" to='/preSchool'>Pre-School</Link>
                        </h1>
                    </div>

                    <div className="w-1/3 relative">
                        <img className="h-80" src={primarySchool} alt="primarySchool"/>
                        <h1><Link class="absolute font-black text-5xl text-white cursor-pointer hover:text-orange-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" to='/primarySchool'>Primary School</Link></h1>
                    </div>

                    <div className="w-1/3 relative">
                        <img className="h-80" src={JHS} alt="JHS"/>
                        <h1><Link class="absolute font-black text-5xl text-white hover:text-orange-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" to='/JHS'>Junior High School</Link></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Academics