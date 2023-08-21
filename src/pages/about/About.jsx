import React from "react";

const About = () => {
  return (
    <div>
      <div class="bg-white">
        <div class="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
          <div class="space-y-5 sm:space-y-4">
            <h1 class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl text-center">
              About us
            </h1>
            <p class="text-xl leading-5 text-center text-gray-500">
              RustJobs.dev is the go-to hiring platform for Rust Engineering
              Talent.
              <br />
              <br />
              We reach tens of thousands of Rust Engineers through our website,
              social media channels and recruitment network every month.
              <br />
              <br />
              We provide Recruitment, Team Extension and Job Board services in
              the Rust Engineering space.
              <br />
              <br />
              Reach out at{" "}
              <a
                href="mailto:hello@RustJobs.dev"
                class="font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
              >
                hello@RustJobs.dev
              </a>{" "}
              to find out how we can help you with your Rust hiring needs!
            </p>
          </div>
          {/* <div class="lg:col-span-2">
                            <ul class="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
                                <li class="sm:py-8">
                                    <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                                        <div class="relative pb-2/3 sm:pt-2/3">
                                            <img src="https://rustjobs.dev/static/alex-55f1b5ec7723a5298e9178ca0cf73ad6.webp" alt="Alex Garella" className=" inset-0 object-cover lg:h-96 w-full shadow-lg rounded-lg" /></div>
                                        <div class="sm:col-span-2">
                                            <div class="space-y-4">
                                                <div class="text-lg leading-6 font-medium space-y-1"><h4>Alex Garella</h4>
                                                    <p class="text-gray-600">Founder</p>
                                                </div>
                                                <div class="text-lg leading-7"><p class="text-gray-500">I'm a Software Engineer with multiple years of experience at various startups. When looking for Rust jobs, I realized there wasn't a single great place to find them, so I decided to build one myself!</p>
                                                </div>
                                                <ul class="flex space-x-5"><li><a href="#" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150">
                                                    <span class="sr-only">Twitter</span>
                                                    <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84">

                                                        </path>
                                                    </svg>
                                                </a>
                                                </li>
                                                    <li>
                                                        <a href="#" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150">
                                                            <span class="sr-only">LinkedIn</span><svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5"><path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="sm:py-8">
                                    <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                                        <div class="relative pb-2/3 sm:pt-2/3">
                                            <img src="https://rustjobs.dev/static/julien-5cc17a019c4feb0da0f65dfba61d27af.jpg
            
            
            
            " alt="Julien Truffaut" class=" inset-0 object-cover lg:h-96 w-full shadow-lg rounded-lg" />
                                        </div>
                                        <div class="sm:col-span-2">
                                            <div class="space-y-4">
                                                <div class="text-lg leading-6 font-medium space-y-1">
                                                    <h4>Julien Truffaut</h4>
                                                    <p class="text-gray-600">Co-founder</p>
                                                </div>
                                                <div class="text-lg leading-7"><p class="text-gray-500">I am a backend engineer with more than 10 years of experience from start-ups to tech giants like Amazon.<br /><br />I love teaching the practical side of functional programming in Scala. I created my own online course at FP-Tower which is used by many companies to train junior and mid-level Scala developers.<br /><br />I am also the author of the popular open-source library Monocle, an optics library that helps functional Scala developers easily traverse, transform, and access deeply nested data structures.</p> </div>
                                                <ul class="flex space-x-5">
                                                    <li><a href="#" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"><span class="sr-only">Twitter</span><svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5"><path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path></svg></a></li>
                                                    <li>
                                                        <a href="#" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"><span class="sr-only">LinkedIn</span><svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5"><path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd">
                                                        </path>
                                                        </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="sm:py-8">
                                    <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0"
                                    >
                                        <div class=" pb-2/3 sm:pt-2/3">
                                            <img src="
            
            https://rustjobs.dev/static/archie-98fb50b29fd49b1d21cdfbe45081a47c.jpg
            
            " class=" inset-0 object-cover lg:h-96 w-full shadow-lg rounded-lg" /></div>
                                        <div class="sm:col-span-2">
                                            <div class="space-y-4">
                                                <div class="text-lg leading-6 font-medium space-y-1">
                                                    <h4>Archie Amari</h4><p class="text-gray-600">Head of Talent</p>
                                                </div>
                                                <div class="text-lg leading-7">
                                                    <p class="text-gray-500">I’m a passionate talent hunter with experience in global end to end recruitment specifically in Scala &amp; Rust helping engineers &amp; companies know their market inside out to maximise potential 🚀<br /><br />I fell in love with Scala &amp; Rust even though I can’t write code 😊<br /><br />Advocate for community growth, tech events &amp; open source. Let’s increase opportunities for junior developers and more sponsored relocation options for Asia &amp; Africa 🌍</p></div>
                                                <ul class="flex space-x-5"><li><a href="#" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150">
                                                    <span class="sr-only">Twitter</span><svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path></svg></a></li>
                                                    <li>
                                                        <a href="#" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"><span class="sr-only">LinkedIn</span><svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5"><path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
                                                        </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="sm:py-8">
                                    <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                                        <div class="relative pb-2/3 sm:pt-2/3">
                                            <img src="
            
            https://rustjobs.dev/static/ollie-2bbd73d84bf1ef8e24c39d6116cbbed7.jpg
            
            " alt="Ollie Morado" class=" inset-0 object-cover lg:h-96 w-full shadow-lg rounded-lg" />
                                        </div>
                                        <div class="sm:col-span-2">
                                            <div class="space-y-4">
                                                <div class="text-lg leading-6 font-medium space-y-1"><h4>Ollie Morado</h4>
                                                    <p class="text-gray-600">Talent Manager</p>
                                                </div>
                                                <div class="text-lg leading-7"><p class="text-gray-500">Interested in all things Scala &amp; Rust and have dedicated time to research different areas of the tech ecosystems.<br /><br />Assisting companies within the Scala &amp; Rust space build technology-driven teams to face a variety of challenges - a majority of these companies are active community leaders, from open-source contributions to hosting tech meetups.<br /><br />Believer in taking time to establish a firm understanding of internal roadmaps and the technical anticipations for the teams I personally collaborate with - ensuring I'm connecting exceptional talent to the right mission.</p>
                                                </div>
                                                <ul class="flex space-x-5">
                                                    <li><a href="https://twitter.com/olliemorado" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"><span class="sr-only">Twitter</span><svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5"><path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84">
                                                    </path>
                                                    </svg>
                                                    </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.linkedin.com/in/ojmorado/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"><span class="sr-only">LinkedIn</span><svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5"><path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd">
                                                        </path>
                                                        </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
