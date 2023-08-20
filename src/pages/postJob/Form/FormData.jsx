import React from 'react';

const FormData = () => {
    return (
        <div>
            <form id='form' class="max-w-7xl mx-auto my-10 px-4 sm:px-6">
                <div class="bg-white shadow-lg overflow-hidden sm:rounded-md px-4 pb-4 sm:px-6">
                    <div class="mt-5">
                        <div>
                            <div>
                                <h1 class="text-xl leading-6 font-medium text-gray-900">Create a standard job post</h1>
                                <p class="mt-1 leading-5 text-gray-900">Reach thousands of Rust Developers with a one-off job post for $299. Your job post will be featured on the homepage for 30 days.</p>
                            </div>
                            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                <div class="sm:col-span-4">
                                    <label for="title" class="block font-medium leading-5 text-gray-700">Job Title</label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <input required="" placeholder="Rust Developer" class="flex-1 block  w-full border  border-gray-200 p-3 text-sm min-w-0 rounded-md transition duration-150 ease-in-out sm: sm:leading-5" /></div>
                                </div>
                                <div class="sm:col-span-6"><label for="description" class="block font-medium leading-5 text-gray-700">Job Description</label>
                                    <div class="mt-1 rounded-lg shadow-sm"><textarea required="" rows="12" placeholder="Rust developer wanted" class="ps-3 pt-3 border  border-gray-200 rounded-md block w-full transition duration-150 ease-in-out sm: sm:leading-5">
                                    </textarea>
                                    </div>
                                    <p class="mt-2 text-gray-500">Write a few sentences about the job. Markdown is supported.</p>
                                </div>
                                <div class="sm:col-span-4 space-y-3">
                                    <label for="link" class="block font-medium leading-5 text-gray-700">Job Application Link</label>
                                    <p class="leading-5 text-gray-500">Enter a valid URL or mailto address i.e. mailto:you@example.com</p><div class="mt-1 flex rounded-md shadow-sm">
                                        <input id="link" required="" placeholder="https://example.com/job or mailto:you@example.com" class="flex-1 form-input block border  border-gray-200 p-3 min-w-0 rounded-md transition duration-150 ease-in-out sm: sm:leading-5" />
                                    </div>
                                </div>

                                <div class="sm:col-span-4">
                                    <div>
                                        <label for="salary_from" class="block font-medium leading-5 text-gray-700">Salary Range</label>
                                        <div class="mt-2 flex justify-between items-center">
                                            <label for="salary_from" class="block font-medium leading-5 text-gray-700">From</label>
                                            <span id="salary_from_optional" class="leading-5 text-gray-500">Optional</span></div><div class="mt-1 relative rounded-md shadow-sm">
                                            <div class="absolute inset-y-0 left-0 flex items-center">
                                                <select aria-label="salary_from" class="form-select h-full py-0 pl-3 pr-8 border-transparent bg-transparent text-lg text-gray-500"><option selected="" value="$">$</option><option value="£">£</option><option value="€">€</option></select></div>

                                            <input id="salary_from" placeholder="100 000" class=" block w-full pl-16 border  border-gray-200 p-3 rounded-lg" /></div></div><div><div class="mt-2 flex justify-between items-center"><label for="salary_to" class="block font-medium leading-5 text-gray-700">To</label><span id="salary_to_optional" class="leading-5 text-gray-500">Optional</span></div><div class="mt-1 relative rounded-md shadow-sm"><div class="absolute inset-y-0 left-0 flex items-center"><select aria-label="salary_to" class="form-select h-full py-0 pl-3 pr-8 border-transparent bg-transparent text-lg text-gray-500"><option selected="" value="$">$</option><option value="£">£</option><option value="€">€</option></select></div><input id="salary_to" placeholder="150 000" class="form-input block w-full pl-16 border  border-gray-200 p-3 rounded-lg" /></div></div></div><div class="sm:col-span-4"><label for="company" class="block font-medium leading-5 text-gray-700">Company Name</label><div class="mt-1 flex rounded-md shadow-sm">

                                                <input id="company" required="" placeholder="Acme Inc." class="flex-1 form-input block border  border-gray-200 p-3 w-full min-w-0 rounded-md transition duration-150 ease-in-out sm:leading-5" /></div></div><div class="sm:col-span-4" /><label for="location" class="block font-medium leading-5 text-gray-700">Location</label><div class="mt-1 flex rounded-md shadow-sm"><input id="location" required="" placeholder="City - State" class="flex-1 border  border-gray-200 p-3  form-input block w-full min-w-0 rounded-md transition duration-150 ease-in-out sm:leading-5" /></div></div><div class="sm:col-span-4"><label for="country" class="block font-medium leading-5 text-gray-700">Country</label><div class="mt-1 flex rounded-md shadow-sm"><select required="" class="form-select block border  rounded-lg p-3 w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5" name="rcrs-country" value="">
                                                    <option value="">Select Country</option><option value="US">United States</option><option value="GB">United Kingdom</option><option value="CA">Canada</option><option value="DE">Germany</option><option value="NL">Netherlands</option><option value="FR">France</option></select></div></div><fieldset class="sm:col-span-6"><legend class="text-base font-medium text-gray-900">Remote</legend><p class="leading-5 text-gray-500">Is your job remote friendly?</p><div class="mt-4"><div class="flex items-center"><input id="remote" value="remote" name="remote" type="radio" class="form-radio h-4 w-4 text-red-600 transition duration-150 ease-in-out" /><label for="remote" class="ml-3"><span class="block  leading-5 font-medium text-gray-700">Remote</span></label></div><div class="mt-4 flex items-center"><input id="partially_remote" value="partially_remote" name="partially_remote" type="radio" class="form-radio h-4 w-4 text-red-600 transition duration-150 ease-in-out" /><label for="partially_remote" class="ml-3"><span class="block  leading-5 font-medium text-gray-700">Partially Remote</span></label></div><div class="mt-4 flex items-center"><input checked="" id="on_site" name="on_site" value="on_site" type="radio" class="form-radio h-4 w-4 text-red-600 transition duration-150 ease-in-out" /><label for="on_site" class="ml-3"><span class="block  leading-5 font-medium text-gray-700">On Site</span></label></div></div></fieldset><div class="sm:col-span-4"><label for="email" class="block font-medium mt-2 leading-5 text-gray-700">Email address</label><div class="mt-2 flex rounded-md shadow-sm"><input id="email" required="" type="email" placeholder="you@example.com" class="flex-1 border  border-gray-200 p-3 block w-full min-w-0 rounded-md transition duration-150 ease-in-out sm: sm:leading-5" /></div></div><div class="sm:col-span-4"><div class="flex justify-between"><label for="photo" class="block leading-5 font-medium text-gray-700">Company logo</label><span id="photo" class="leading-5 text-gray-500">Optional</span></div><div class="mt-2 sm:flex sm:items-center"><span class="h-10 w-10 overflow-hidden bg-gray-100"></span><span class="w-full sm:ml-5 mt-2 sm:mt-0 block shadow-sm py-2 px-3 border border-gray-300 rounded-md leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"><input type="file" id="file-selector" accept=".jpg, .jpeg, .png" /></span></div><p class="mt-2 text-gray-500">Upload your company logo. Use a square image with a transparent background. Maximum size is 1 MB.</p></div></div></div><div class="sm:flex sm:justify-end mt-4 border-t border-gray-200 pt-5"><div class="w-full sm:w-auto inline-flex rounded-md shadow-sm"><button type="submit" class="w-full inline-flex justify-center py-2 px-4 border border-transparent  leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-indigo active:bg-red-700 transition duration-150 ease-in-out"><span>Submit - $299</span></button></div></div></div>

            </form>

        </div>



    );
};

export default FormData;