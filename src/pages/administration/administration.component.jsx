import React from "react";
import image from '../../assets/IMG_6391.jpg'
import director from "../../assets/director.jpg"
import principal from "../../assets/principal.jpg"
import headteacher from "../../assets/headteacher.jpg"


const Administration = () => {
    return(
        <div>
            <h1 className=" text-7xl text-center font-black">Our <span className=" text-orange-500 font-black"> Administration</span>
            </h1>

            <div className="flex mx-12 space-x-14 my-12">
                <div className="max-w-sm h-2/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    
                    <img className="rounded-t-lg" src={director} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Mr. Conrad Norgbey
                        </h5>
                        
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Director
                        </p>
                    </div>
                </div>

                <div className="max-w-sm h-2/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    
                    <img className="rounded-t-lg" src={principal} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Mrs. Selina Norgbey
                        </h5>
                        
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Principal</p>
                    </div>
                </div>

                <div className="max-w-sm h-2/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    
                    <img className="rounded-t-lg" src={headteacher} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Mr. Emmanuel Walker
                        </h5>
                        
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Headmaster</p>
                    </div>
                </div>
            </div>

            <div className="flex mx-12 space-x-14 mt-8">
                <div className="max-w-sm h-2/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    
                    <img className="rounded-t-lg" src={image} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Mrs. Francisca Alime
                        </h5>
                        
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Accountant</p>
                    </div>
                </div>

                <div className="max-w-sm h-2/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    
                    <img className="rounded-t-lg" src={image} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Joanna Merkel
                        </h5>
                        
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Director.</p>
                    </div>
                </div>

                <div className="max-w-sm h-2/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    
                    <img className="rounded-t-lg" src={image} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Joanna Merkel
                        </h5>
                        
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Director.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Administration