import React from 'react';
import { FaCalendarWeek, FaGrinHearts, FaHeart, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Loading from '../../../../components/Loading';
const SingleJob = ({ singleJob, loading }) => {
    const { id, jobType, title, salary, city, country, daysPosted, company, companyImageUrl } = singleJob

    if (loading) {
        return <Loading size={8} />
    }


    return (
        <div class=" px-4 mt-1 ">
            <div class="max-w-7xl mx-auto ">

                <div class="flex flex-col ">

                    <div className={`${singleJob?.status ? 'bg-gradient-to-r from-sky-950 to-cyan-900  border-4 border-red-500' : 'bg-gray-900'}  p-6 rounded shadow-md md:flex  justify-between items-center mb-4`}>




                        <div className='space-y-3 text-white'>



                            <div class="flex-shrink-0 flex -ml-2 py-4 overflow-x-auto">
                                <span class="px-2 py-1 flex-shrink-0 leading-5 font-semibold rounded-full bg-teal-300 text-teal-900">{jobType}</span>
                                {singleJob.status && <a class="inline-flex gap-1 items-center flex-shrink-0 leading-5 px-2 py-1 font-semibold rounded-full bg-yellow-300 hover:bg-yellow-200 text-yellow-900 ml-2">
                                    <FaRegStar />

                                    <span>Featured Company</span>
                                </a>}
                                {singleJob.status && <a class="inline-flex items-center  flex-shrink-0 gap-1 leading-5 px-2 py-1 font-semibold rounded-full bg-red-500 hover:bg-red-400 text-red-900 ml-2">
                                    <FaRegHeart />
                                    <span>Community Sponsor</span>
                                </a>}</div>




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