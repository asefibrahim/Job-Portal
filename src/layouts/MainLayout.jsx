

import { Outlet } from 'react-router-dom';

import Nav from '../shared/Nav';
import Footer from '../shared/Footer';

const MainLayout = () => {

    return (
        <div className='blogs'>
            <Nav ></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;