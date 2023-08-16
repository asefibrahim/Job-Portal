import React from 'react';
import JobsSection from './homeChild/jobsSection/JobsSection';
import CompaniesSection from './homeChild/CompaniesSection/CompaniesSection';

const MainHome = () => {
    return (
        <div>
            <JobsSection />
            <CompaniesSection />
        </div>
    );
};

export default MainHome;