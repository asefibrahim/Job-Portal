import React from 'react';
import { FaRegHeart, FaRegStar } from 'react-icons/fa';

const CompaniesSection = () => {
    return (
        <div className='max-w-7xl px-4'>
            <div className='text-center mt-8 mb-5'>
                <span class="ml-2 text-4xl  font-extrabold tracking-wide bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text ">
                    Companies
                </span>
            </div>

            <div className=''>
                <div className='bg-gradient-to-r from-sky-950 to-cyan-900  p-6 rounded-lg shadow-md md:flex  justify-between items-center mb-4'>
                    <div className='space-y-3 text-white'>
                        <div className='flex items-center gap-3  '>


                            <span class="text-gray-800 font-semibold bg-yellow-500 px-3 py-1 rounded-full ">
                                <span className='flex items-center gap-2'>
                                    <FaRegStar /> <span>Featured Company</span>
                                </span>
                            </span>
                            <span class="text-gray-800 font-semibold bg-red-500 px-3 py-1 rounded-full ">
                                <span className='flex items-center gap-2'>
                                    <FaRegHeart /> <span>Featured Company</span>
                                </span>
                            </span>


                        </div>

                        <div class="text-gray-300 mt-2 md:flex items-center">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABwElEQVRYw+2WPUtjURCGn0kifrCYW6idjWAhLIu7ha4WtmKlrdorK+gakbXYP2Enhq0s/AE226wgCGqlRFBLJSHq+hGzerOJ+bhjE4PoTXITJTb3LecMM8+cM2fOEWPMVF5qExiKr35I4ECLO7kJYJkKpao3Ht5ZLoAL4AK8O4AvP3Seax/IVRDnvEiccrrzdX3KLtgs3NY3iMfb968HaCg1zIAT4DewXgWA+hqbWLNZ2AGdB1kB2ksE2AMmZ796I0CmqiMQkRYbuz/fH41AU5E5HgK+i8hhzZtQVY+AKRHZXZ/2a00BVPUYmLVybL82ecUAqpwBM4j+2QgY+lbX0JHS9xANi3kT85yrJVrTQZROQ+REiF1Jp1oSBP1ijJlSE4BsBk7DQjwmgAB8Bn6B9r4FREmAbBZOI8L1ZSF5XtINBEEHjNE7eW0PhG3sf1NJMhdnEr26eJ68AOFH9ScQB0LVAsj4ivnRxp44ONJoOEKrZUm5Rr1FSQD1DvIl80XXPV4sWdrKbNk4hoDAt/66lJMqjFFzBPhRxi0FzAGDwHDhMRLoszt+wOt8H2nDPs5T/QeagY4nvu633AVwAVwAHgDHSZMtya7rSAAAAABJRU5ErkJggg==" alt="Company Logo" class="w-10 h-10 mr-2" />
                            <p className='  pr-3 text-3xl font-bold text-red-400'>  Keyrock    </p>


                        </div>
                        <p class="mt-2 flex items-center justify-start gap-2">

                            Hiring In : <span>United Kingdom
                                🇬🇧</span>
                        </p>
                        <p class="mt-2 flex items-center justify-start gap-2">

                            Company size : <span> 10+ Developers</span>
                        </p>
                    </div>

                </div>
            </div>
            <div className=''>
                <div className='bg-gradient-to-r from-sky-950 to-cyan-900  p-6 rounded-lg shadow-md md:flex  justify-between items-center mb-4'>
                    <div className='space-y-3 text-white'>
                        <div className='flex items-center gap-3  '>


                            <span class="text-gray-800 font-semibold bg-yellow-500 px-3 py-1 rounded-full ">
                                <span className='flex items-center gap-2'>
                                    <FaRegStar /> <span>Featured Company</span>
                                </span>
                            </span>
                            <span class="text-gray-800 font-semibold bg-red-500 px-3 py-1 rounded-full ">
                                <span className='flex items-center gap-2'>
                                    <FaRegHeart /> <span>Featured Company</span>
                                </span>
                            </span>


                        </div>

                        <div class="text-gray-300 mt-2 md:flex items-center">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABwElEQVRYw+2WPUtjURCGn0kifrCYW6idjWAhLIu7ha4WtmKlrdorK+gakbXYP2Enhq0s/AE226wgCGqlRFBLJSHq+hGzerOJ+bhjE4PoTXITJTb3LecMM8+cM2fOEWPMVF5qExiKr35I4ECLO7kJYJkKpao3Ht5ZLoAL4AK8O4AvP3Seax/IVRDnvEiccrrzdX3KLtgs3NY3iMfb968HaCg1zIAT4DewXgWA+hqbWLNZ2AGdB1kB2ksE2AMmZ796I0CmqiMQkRYbuz/fH41AU5E5HgK+i8hhzZtQVY+AKRHZXZ/2a00BVPUYmLVybL82ecUAqpwBM4j+2QgY+lbX0JHS9xANi3kT85yrJVrTQZROQ+REiF1Jp1oSBP1ijJlSE4BsBk7DQjwmgAB8Bn6B9r4FREmAbBZOI8L1ZSF5XtINBEEHjNE7eW0PhG3sf1NJMhdnEr26eJ68AOFH9ScQB0LVAsj4ivnRxp44ONJoOEKrZUm5Rr1FSQD1DvIl80XXPV4sWdrKbNk4hoDAt/66lJMqjFFzBPhRxi0FzAGDwHDhMRLoszt+wOt8H2nDPs5T/QeagY4nvu633AVwAVwAHgDHSZMtya7rSAAAAABJRU5ErkJggg==" alt="Company Logo" class="w-10 h-10 mr-2" />
                            <p className='  pr-3 text-3xl font-bold'> Bloop   </p>


                        </div>
                        <p class="mt-2 flex items-center justify-start gap-2">

                            Hiring in:
                            <span>Europe
                                🇪🇺</span>
                        </p>
                        <p class="mt-2 flex items-center justify-start gap-2">

                            Company size : <span> 5+ Developers</span>
                        </p>
                    </div>

                </div>
            </div>



            <div className=''>
                <div className="bg-gradient-to-r h-56 from-sky-950 to-cyan-900    p-6 rounded shadow-md md:flex  justify-between items-center mb-4">



                    <div>
                        <h1 className='text-red-400 text-4xl font-extrabold mb-2'>Is your company hiring Rust Engineers?</h1>
                        <p className='text-gray-50'>Promote your company to thousands of Rust developers who are actively looking for jobs.</p>
                    </div>
                    <div>
                        <button class="bg-red-500 text-white text-xs sm:text-sm px-4 py-2 rounded hover:bg-red-600 w-full font-semibold">Start Hiring</button>


                    </div>
                </div>
            </div>





        </div>
    );
};

export default CompaniesSection;