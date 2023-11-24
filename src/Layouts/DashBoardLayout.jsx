
import { Helmet } from 'react-helmet-async';
import DashboardSidebar from '../Components/Dashboard/Sidebar/DashboardSidebar';
import { Outlet } from 'react-router-dom';

const DashBoardLayout = () => {
    return (
        <div className='md:flex my-5 md:my-8 lg:my-16'>
            <Helmet>
                <title>MediVoyage | Dashboard</title>
            </Helmet>
            <DashboardSidebar></DashboardSidebar>
            <div className='flex-1 p-2 md:p-6 lg:p-10'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoardLayout;