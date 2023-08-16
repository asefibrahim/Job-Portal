import React from 'react';
import { FaCalendarWeek, FaGrinHearts, FaHeart, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const SingleJob = ({ singleJob }) => {
    const { id, jobType, title, salary, city, country, daysPosted, company, companyImageUrl } = singleJob

    return (
        <div class=" px-4 mt-1 ">
            <div class="max-w-7xl mx-auto ">

                <div class="flex flex-col ">

                    <div className={`${singleJob?.status ? 'bg-gradient-to-r from-sky-950 to-cyan-900  border-4 border-red-500' : 'bg-gray-900'}  p-6 rounded shadow-md md:flex  justify-between items-center mb-4`}>
                        <div className='space-y-3 text-white'>
                            <div className='flex items-center gap-3 overflow-x-scroll md:overflow-x-auto '>
                                <span class="text-gray-800 font-semibold bg-cyan-500 px-3 py-1 rounded-full ">
                                    <span className=''>
                                        {jobType}
                                    </span>
                                </span>

                                {singleJob?.status && <span class="text-gray-800 font-semibold bg-yellow-500 px-3 py-1 rounded-full ">
                                    <span className='flex items-center gap-2'>
                                        <FaRegStar /> <span>Featured Company</span>
                                    </span>
                                </span>}
                                {singleJob?.status && (<span class="text-gray-800 font-semibold bg-red-500 px-3 py-1 rounded-full ">
                                    <span className='flex items-center gap-2'>
                                        <FaRegHeart /> <span>Featured Company</span>
                                    </span>
                                </span>)}


                            </div>
                            <h2 class="text-2xl text-red-400 font-bold mt-2">{title}</h2>
                            <div class="text-gray-300 mt-2 md:flex items-center">
                                <img src={companyImageUrl} alt="Company Logo" class="w-6 h-6 mr-2" />
                                <p className=' lg:border-r-2 pr-3'>  {company}     </p>
                                <p className='ml-3 pr-3 lg:border-r-2'> {salary}</p>
                                <div className='ml-3 mr-3  flex items-center gap-2'>
                                    <FaLocationDot />
                                    <span>{city}</span>
                                    <span>{country}</span>

                                </div>

                            </div>
                            <p class="mt-2 flex items-center justify-start gap-2">


                                <FaCalendarWeek /> <span>{daysPosted}  days ago</span></p>
                        </div>
                        <div>
                            <button class="bg-red-500 text-white text-xs sm:text-sm px-4 py-2 rounded hover:bg-red-600 w-full font-semibold">Apply Now</button>


                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default SingleJob;