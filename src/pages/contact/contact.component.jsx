import React from "react";
import { ReactComponent as ContactLogo } from "../../assets/contact-us.svg";

const Contact=()=>{
    return(
        <div>
            <h1 className=" text-5xl text-center font-black">Contact <span className=" text-orange-500 font-black">Us</span></h1>
            <div className="flex space-x-24 my-8 mx-auto">
            <div>
                <ContactLogo />
            </div>

            <section class="px-6">
                <div class="py-16 px-4">
                    <form action="#" class="space-y-8">
                        <div className=" flex space-x-16">
                            <div>
                                <label for="firstName" class="block mb-2 text-xl font-extrabold  text-orange-500">
                                    First Name
                                </label>
                                <input type="text" id="firstName" class=" text-gray-900 text-sm rounded-lg block w-64 p-2.5 bg-slate-100 border-gray-100 placeholder-gray-400" placeholder="John" required>
                                </input>
                            </div>

                            <div>
                                <label for="lastName" class="block mb-2 text-xl font-extrabold text-orange-500">
                                    Last Name
                                </label>
                                <input type="lastName" id="lastName" class="shadow-sm border text-gray-900 text-sm rounded-lg block w-64 p-2.5 bg-slate-100 border-gray-100 placeholder-gray-400" placeholder="Carter" required>   
                                </input>
                            </div>
                        </div>

                        <div>
                            <label for="email" class="block mb-2 text-xl font-extrabold text-orange-500">
                                Your email
                            </label>
                            <input type="email" id="email" class="border text-sm rounded-lg block w-full p-2.5 bg-slate-100 border-gray-100 placeholder-gray-400 text-white" placeholder="name@lhis.com" required>   
                            </input>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="message" class="block mb-2 text-xl font-extrabold text-orange-500">
                                Your message
                            </label>
                            <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-orange-500 rounded-lg border-solid border-gray-300 bg-slate-100 placeholder-gray-400" placeholder="Leave a comment...">
                            </textarea>
                        </div>
                        <button type="submit" class="py-3 px-5 text-xl font-black text-center text-white rounded-lg bg-orange-500 hover:bg-orange-700">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </section>
        </div>
        <h1 className=" text-5xl text-center font-black">Our <span className=" text-orange-500 font-black">Location</span>
        </h1>
        <div className="mt-8 max-w-full overflow-hidden text-red-500 w-[1200px] h-[500px] mx-auto">
            <div id="display-google-map" className="h-full w-full max-w-full"><iframe className="h-full w-full" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Liberty-Hills+International+School,+Prampram,+Ghana&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
            </div><a class="embedded-map-code" rel="nofollow" id="authorize-maps-data"></a>
        </div>
    </div>
    )
}

export default Contact