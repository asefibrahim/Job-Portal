import React, { useEffect, useState } from 'react';
import SingleJob from './SingleJob';
import Loading from '../../../../components/Loading';

const JobsSection = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setData(data.slice(0, 8));
                setLoading(false); // Set loading state to false after data is fetched
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false); // Also set loading state to false in case of an error
            });
    }, []);

    
  

    return (
        <div>



            <div className='text-center pt-8 mb-5'>
                <span class="ml-2 text-4xl  font-extrabold tracking-wide bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text ">
                    Featured Rust Jobs
                </span>
            </div>


            <div>
                {loading?<Loading size={8}/>:
                    data.map(singleJob => <SingleJob key={singleJob.id}  singleJob={singleJob} />)
                }





            </div>









        </div>



    );
};

export default JobsSection;