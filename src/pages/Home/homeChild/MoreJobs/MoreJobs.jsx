import React, { useEffect, useState } from 'react';
import Details from './Details';

const MoreJobs = () => {
    const [data, setData] = useState([])
    const [show, setShow] = useState(false)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    console.log(data);
    const handleLoadMore = () => {
        setShow(true)
    }


    return (
        <>

            <h2 className="my-5 text-center sm:py-2 text-3xl tracking-tight leading-10 font-extrabold text-gray-700">
                More  Jobs
            </h2>

            <div className=" max-w-7xl  px-4">
                <div className="bg-white p-6 space-y-3 rounded-lg shadow overflow-hidden">
                    {show ?
                        data.map(details => <Details details={details} />) : data.slice(0, 8).map(details => <Details details={details} />)
                    }

                </div>


            </div>








            {!show && <div className="mt-5 flex justify-center">
                <div
                    onClick={handleLoadMore}
                    className="cursor-pointer sm:w-auto w-full flex items-center justify-center mb-12 px-4 py-2 text-base leading-6 font-semibold rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-red-700 transition ease-in-out duration-150"
                >
                    <span>Load more</span>
                </div>
            </div>

            }

        </>
    );
};

export default MoreJobs;