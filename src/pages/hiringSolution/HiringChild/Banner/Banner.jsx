import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='max-w-7xl bg-gray-200'>
                <div className='py-12'>
                    <h1 className='text-3xl text-center font-extrabold sm:text-6xl text-gray-800'>Hire
                        <span className=' bg-gradient-to-r from-orange-400 to-red-700 text-transparent bg-clip-text '> Rust Engineers  </span>
                        Effortlessly</h1>
                    <p className='text-center text-gray-800 text-sm sm:text-xl  mt-8'>The most effective platform to hire the right Rust Engineering talent</p>


                    <div className='text-center mt-8 '>

                        <button

                            class="inline-flex md:w-40 sm:w-full items-center justify-center h-12 px-6  font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-500

hover:bg-red-700
 focus:shadow-outline focus:outline-none"


                        >
                            Start Hiring
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;