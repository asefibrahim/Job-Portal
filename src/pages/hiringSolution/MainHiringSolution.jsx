import React from 'react';
import Banner from './HiringChild/Banner/Banner';
import Sponsors from './HiringChild/Sponsors/Sponsors';
import Pricing from './HiringChild/Pricing/Pricing';
import Platform from './HiringChild/Platform/Platform';

import Trusted from './HiringChild/TrustCompanies/trust';
import Team from './HiringChild/Team/Team';
import Community from './Community/Community';

const MainHiringSolution = () => {
    return (
        <div>
            <Banner />
            <Sponsors />
            <Pricing />
            <Platform />
            <Trusted />
            <Team />
            <Community />
        </div>
    );
};

export default MainHiringSolution;