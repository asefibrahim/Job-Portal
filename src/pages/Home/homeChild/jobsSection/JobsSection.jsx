import React, { useEffect, useState } from 'react';
import SingleJob from './SingleJob';

const JobsSection = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data.slice(0, 8)))
    }, [])

    console.log(data);

    return (
        <div>
            <div className='text-center mt-8 mb-5'>
                <span class="ml-2 text-4xl  font-extrabold tracking-wide bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text ">
                    Featured Rust Jobs
                </span>
            </div>


            <div>
                {
                    data.map(singleJob => <SingleJob key={singleJob.id} singleJob={singleJob} />)
                }





            </div>









        </div>
    );
};

export default JobsSection;