import React from 'react';
import Banner from './HiringChild/Banner/Banner';
import Sponsors from './HiringChild/Sponsors/Sponsors';
import Pricing from './HiringChild/Pricing/Pricing';
import Platform from './HiringChild/Platform/Platform';


import Team from './HiringChild/Team/Team';
import Community from './Community/Community';
import TrustCompanies from './HiringChild/TrustCompanies/TrustCompanies';


const MainHiringSolution = () => {
    return (
        <div>
            <Banner />
            <Sponsors />
            <Pricing />
            <Platform />
            <TrustCompanies/>
            <Team />
            <Community />
        </div>
    );
};

export default MainHiringSolution;