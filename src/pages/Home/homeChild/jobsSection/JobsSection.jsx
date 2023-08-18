import React, { useEffect, useState } from 'react';
import SingleJob from './SingleJob';
import Loading from '../../../../components/Loading';

const JobsSection = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data.slice(0, 8)))
        setLoading(false)
    }, [])

    console.log(data);
    if (loading) {
        return <Loading size={8} />
    }

    return (
        <div>
            <div className='text-center pt-8 mb-5'>
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