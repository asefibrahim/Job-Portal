import React from 'react';
import JobsSection from './homeChild/jobsSection/JobsSection';
import CompaniesSection from './homeChild/CompaniesSection/CompaniesSection';

import MoreJobs from './homeChild/MoreJobs/MoreJobs';

const MainHome = () => {
    return (
        <div className='bg-gray-100'>
            <JobsSection />
            <CompaniesSection />
            <MoreJobs />

        </div>
    );
};

export default MainHome;