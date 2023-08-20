import React from 'react';

const PricingBox = () => {
    return (
        <div>


            <div class="max-w-md mx-auto py-8 space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                <div class="flex flex-col rounded-lg shadow-xl overflow-hidden">
                    <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                        <div>
                            <h3 id="tier-standard" class="inline-flex px-4 py-1  rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-green-200 text-green-600">Standard</h3>
                        </div>
                        <div class="mt-4 flex items-baseline text-5xl leading-none font-extrabold">$299
                        </div>
                        <p class="mt-5 text-lg leading-7 text-gray-500">Standard one-off job post.</p>
                    </div>
                    <div class="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-white border-t border-gray-200 space-y-6 sm:p-10 sm:pt-6">
                        <ul class="space-y-4">
                            <li class="flex items-start">
                                <div class="flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-green-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>

                                </div>
                                <p class="ml-3 text-base leading-6 text-gray-700">Reach thousands of Rust developers</p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-green-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <p class="ml-3 text-base leading-6 text-gray-700">Featured job post on the homepage for 30 days</p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-green-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <p class="ml-3 text-base leading-6 text-gray-700">Shared across our social media channels reaching thousands of followers</p>
                            </li>
                        </ul>
                        <div class="rounded-md shadow">
                            <a href="#" aria-describedby="tier-standard" class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">Get started now</a>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                        <div>
                            <h3 id="tier-standard" class="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-green-200 text-green-600">Featured Company</h3>
                        </div>
                        <div class="mt-4 flex items-baseline text-5xl leading-none font-extrabold">Custom pricing</div>
                        <p class="mt-5 text-lg leading-7 text-gray-500">Feature your company. Reach more Rust devs.</p>
                    </div>
                    <div class="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-white border-t border-gray-200  space-y-6 sm:p-10 sm:pt-6">
                        <ul class="space-y-4">
                            <li class="flex items-start"><div class="flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-green-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                                <p class="ml-3 text-base leading-6 text-gray-700">Reach tens of thousands of Rust developers</p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-green-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>

                                </div><p class="ml-3 text-base leading-6 text-gray-700">Permanently featured job posts on the homepage</p>
                            </li>
                            <li class="flex items-start">

                                <div class="flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-green-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <p class="ml-3 text-base leading-6 text-gray-700">Shared across our social media channels reaching thousands of followers</p>
                            </li>
                            <li class="flex items-start"><div class="flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-green-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            </div><p class="ml-3 text-base leading-6 text-gray-700">Featured company listing on the homepage to make your company stand out</p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-green-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <p class="ml-3 text-base leading-6 text-gray-700">Company page to describe your company in more detail</p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-green-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">

                                        </path>
                                    </svg>
                                </div><p class="ml-3 text-base leading-6 text-gray-700">Distinctive premium appearance to stand out from standard job posts</p>
                            </li>
                        </ul>
                        <div class="rounded-md shadow"><a target="_blank" rel="noopener noreferrer" href="https://forms.gle/hx74EmZZhdjf6noQ7" eventcategory="Featured Company" eventaction="Click" eventlabel="Contact Us" aria-describedby="tier-standard" class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">Contact us for more details</a>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default PricingBox;