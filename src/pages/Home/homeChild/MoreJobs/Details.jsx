import React from 'react';
import { FaCalendarWeek } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Details = ({ details }) => {


    const { id, jobType, title, salary, city, country, daysPosted, company, companyImageUrl } = details
    console.log(details);

    return (
        <div className='space-y-3 pt-3'>
            <span className="bg-green-100  px-2 py-1 rounded-full"> {jobType}</span>
            <h1 className="text-xl font-medium text-gray-700 mt-4">

                {title}
            </h1>
            <div>

                <div className="md:flex items-center justify-between">

                    <div class="text-gray-700 mt-2 md:flex items-center">

                        <img src={companyImageUrl} alt="Company Logo" class="w-6 h-6 mr-2" />
                        <p className=' lg:border-r-2 pr-3'>
                            {company}
                        </p>
                        <p className='ml-3 pr-3 lg:border-r-2'>
                            {salary}
                        </p>
                        <div className='ml-3 mr-3  flex items-center gap-2'>
                            <FaLocationDot />
                            <span>{city}</span>
                            <span>{country}</span>
                        </div>



                    </div>


                    <div>

                        <p class="mt-2 flex items-center justify-start gap-2">


                            <FaCalendarWeek /> <span> {daysPosted} days ago</span></p>
                    </div>



                </div>


            </div>

            <hr className="mt-8" />
        </div>
    );
};

export default Details;