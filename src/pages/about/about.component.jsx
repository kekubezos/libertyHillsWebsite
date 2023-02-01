import React from "react";
import { ReactComponent as AboutLogo} from "../../assets/about-us.svg";
import { ReactComponent as CoreValues} from "../../assets/core-values.svg";
import teachingStaff from '../../assets/teachingStaff.jpg'
import nonTeachingStaff from '../../assets/nonTeachingStaff.jpg'
import administration from '../../assets/administration.jpg'
import director from '../../assets/director.jpg'
import { Link } from "react-router-dom";




const About =()=>{
    return(
        <div>
            <h1 className=" text-5xl text-center font-black mb-8">About <span className=" text-orange-500 font-black">Us</span></h1>
            <div className = 'py-2 mb-5'>
				<div className = 'container'>
					<div className = 'row align-items-center'>
						<div className = 'flex'>
							<div>
								<h5 className = 'text-4xl text-left font-black mt-24'>We are <span className=" text-orange-500">Liberty Hills International School.</span></h5>
                                <p className=" text-left text-xl font-sans mt-7 mr-12">Liberty Hills is beyond being just a school. It is an institution of change that runs a system of excellence and diligence. We are focused on the holistic development of your child. With the help of our professional and understanding teachers, we believe that your child is in the best of hands. To our teachers, teaching is not just an occupation but a ministry to God and man. Our facilities are well equipped and we trust that you would be given value for your money.
                                By the mid 1970s, the school was successful to the point that we expected to discover bigger premises. It was then that we moved down the slope to our present location at 41 Central Street.
                                We expect to guarantee that each understudy’s stay is both beneficial and agreeable and that every one of our understudies enhances their English language aptitudes
                                </p>       
							</div>
                            <div>
                                <AboutLogo/>
							</div>
						</div>

                        <div className="my-10">
                                <h1 className = 'text-5xl text-center font-black mt-24'>Meet <span className=" text-orange-500">The Staff.</span>
                                </h1>
                        </div> 

                        <div className="w-full flex my-8 space-x-16">
                                    <div className="w-1/3 ml-16 relative">
                                        <img className="h-80" src={administration} alt="preSchool"/>
                                        <h1><Link class="w-full px-4 absolute font-black text-5xl text-white hover:text-orange-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" to='/administration'>Administration</Link>
                                        </h1>
                                    </div>

                                    <div className="w-1/3 relative">
                                        <img className="h-80" src={teachingStaff} alt="primarySchool"/>
                                        <h1><Link class="absolute font-black text-5xl text-white cursor-pointer hover:text-orange-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" to='/teachingStaff'>Teaching Staff</Link></h1>
                                    </div>

                                    <div className="w-1/3 relative">
                                        <img className="h-80 w-96" src={nonTeachingStaff} alt="JHS"/>
                                        <h1><Link class="absolute font-black text-5xl text-white hover:text-orange-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" to='/nonTeachingStaff'>Non-Teaching Staff</Link></h1>
                                    </div>
                                </div>  

                        <div>
                            <h1 className=" text-center text-5xl font-black mt-24 mb-12">About <span className="text-orange-500">Liberty Hills</span></h1>
                            <div className="flex">
                                <div>
                                    <img className=" border rounded-lg h-full"  src={director} alt="" />
                                </div>
                                <div className=" bg-orange-500 rounded-lg">
                                    <p className  = 'text-lg font-sans w-full h-full text-center  p-8  mx-auto'><span className=" text-2xl font-black">
                                        Liberty-Hills International School</span> was founded by the Norgbey family in 2016 at Miotso, near Prampram in the Greater Accra Region. Founders, Conrad and Selina believe that quality education has the power to transform lives. The school's mission is to provide students with a quality, independent education that is focused on engaging and active learning, a commitment to the environment, and dedication to the school and local communities. Liberty-Hills opened its doors with ten students enrolled in kindergarten in September 2016. Since its opening, the school’s dynamic educational environment has continued to evolve.
                                            <br />

                                            Our Strategic Plan, 2021–2025 provides a roadmap to provide  education for a changing world, with commitment to providing courageous learning journeys that celebrate and nurture each child’s growth and learning. We are confident the aspirations held by our community are reflected in the plan and we are proud of our school’s dedicated efforts to seek continuous improvement. We look forward to moving forward together as we provide a balanced education where students achieve academic success and develop socially and emotionally with staff who foster equity and opportunities for creativity. Our commitment is to support Liberty-Hills as one school, focused on preparing children to thrive as global citizens in a rapidly changing world. It is our pleasure to join you in this journey while supporting our students. We welcome your positive involvement and support as we embark on this exciting phase of Liberty-Hills International School
                                        </p>
                                    </div>
                                </div>
                        </div>
                       
                       <div className='text-xl font-sans text-center mt-3 flex'>
                            <div className="mt-20">
                                <h1 className=" text-center text-3xl font-black text-orange-500">MISSION STATEMENT</h1>
                                <div className=" text-xl font-sans text-center mt-4 bg-orange-500 mr-8 p-8 border rounded-xl">
                                    <p><span className=" text-2xl font-black">Liberty-Hills International School</span> inspires courageous journeys of academic and personal exploration that enable our students to lead purposeful lives.Our mission guides every decision that is made at Liberty-Hills International School. Providing the best education and preparation for our students long after they leave our doors is always at the forefront of our thoughts and actions.
                                    </p>
                                </div>
                                
                            </div>

                            <div className="mt-20">
                                <h1 className=" text-center text-3xl font-black text-orange-500">VISION</h1>
                                <div className="text-xl font-sans text-center mt-4 bg-orange-500 ml-8 px-4 py-8 border rounded-xl">
                                    <p><span className=" text-2xl font-black">Liberty-Hills International School</span>To be a leader in international education. It is Liberty-Hills’ goal to be the school of choice for students and families who share the vision of a healthy, international, sustainable, and connected community.To nurture the heart and mind of every student— THE LIBERTY-HILLS EXPERIENCE...
                                    </p>
                                </div>
                                
                            </div>
                        </div>

                        <div>
                            <h1 className=" text-center text-3xl font-black text-orange-500 mt-12">
                                OUR CORE VALUES
                            </h1>
                        </div>
                        <div className="text-xl font-sans text-center mt-3 flex">
                            <div className="pt-8">
                                <CoreValues />
                            </div>
                                                    
                            <div className=" ml-6 my-4 bg-orange-500 text-left w-2/3 rounded-xl p-6">
                                <p className="mb-4 font-bold">
                                    We have a culture that is modern, relevant, and inspires students to have a brighter future. We are determined in our approach to learning, are creative in our thinking, and bold in our ambitions.
                                </p>
                                <ul class="list-disc text-left ml-7">
                                    <li>
                                    <span className="font-black">Student-Centered Decisions:</span> We are best when students are first. All decisions are centered on the needs of the child.
                                    </li>
                                    <li>
                                    <span className="font-black">Excellence:</span> We hold high expectations of our students and ourselves.
                                    </li>
                                    <li>
                                    <span className="font-black">Hardwork:</span> We are committed to producing the highest quality services for our students.
                                    </li>
                                    <li>
                                    <span className="font-black">Innovation:</span> We seek new and more effective approaches to education, exercising creativity to chart inventive paths forward into the future.
                                    </li>
                                    <li>
                                    <span className="font-black">Integrity:</span> We are open and honest, and we do what is right.
                                    </li>
                                    <li>
                                    <span className="font-black">Respect:</span>Everyone deserves a respectful, safe, and positive school environment.
                                    </li>
                                    <li>
                                    <span className="font-black">Togetherness:</span> Collaboration makes us better, individually, and collectively.
                                    </li>
                                </ul>
                            </div>        
                        </div>
					</div>
				</div>
			</div>
        </div>
    )
}

export default About