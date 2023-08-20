import React, { useEffect, useState } from 'react';
import CompaniesSection from '../../Home/homeChild/CompaniesSection/CompaniesSection';
import SingleJob from '../../Home/homeChild/jobsSection/SingleJob';
import Loading from '../../../components/Loading';

const MainCOmpanies = () => {


    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setData(data.slice(3, 6));
                setLoading(false); // Set loading state to false after data is fetched
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false); // Also set loading state to false in case of an error
            });
    }, []);



    return (
        <div>
            <CompaniesSection/>


<div className='text-center font-extrabold text-4xl my-12 text-red-500'>
    Jobs 
</div>


            <div>
                {loading?<Loading size={3}/>:
                    data.map(singleJob => <SingleJob key={singleJob.id}  singleJob={singleJob} />)
                }





            </div>

<div>



</div>

        </div>
    );
};

export default MainCOmpanies;