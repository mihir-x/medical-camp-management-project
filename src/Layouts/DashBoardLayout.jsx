
import { Helmet } from 'react-helmet-async';
import DashboardSidebar from '../Components/Dashboard/Sidebar/DashboardSidebar';
import { Outlet } from 'react-router-dom';

const DashBoardLayout = () => {
    return (
        <div className='md:flex my-5'>
            <Helmet>
                <title>MediVoyage | Dashboard</title>
            </Helmet>
            <DashboardSidebar></DashboardSidebar>
            <div className='flex-1 p-2'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoardLayout;