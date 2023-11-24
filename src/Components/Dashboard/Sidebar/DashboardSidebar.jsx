import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import useRole from '../../../Hooks/useRole';
import { Link } from 'react-router-dom';

const DashboardSidebar = () => {

    const [role, isLoading] = useRole()
    if (isLoading) return <p>loading</p>
    console.log(role)

    return (
        <div>
            <Sidebar aria-label="Default sidebar example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Link to='/dashboard'>
                            <Sidebar.Item icon={HiUser}>
                                Profile
                            </Sidebar.Item>
                        </Link>
                        {
                            role && role === 'Organizer' ? <>
                                <Link to='/dashboard/add-a-camp'>
                                    <Sidebar.Item icon={HiChartPie}>
                                        Add A Camp
                                    </Sidebar.Item>
                                </Link>
                                <Link to='/dashboard/manage-camps'>
                                    <Sidebar.Item icon={HiViewBoards}>
                                        Manage Camps
                                    </Sidebar.Item>
                                </Link>
                                <Link to='/dashboard/manage-registered-camps'>
                                    <Sidebar.Item icon={HiInbox}>
                                        Manage Registered Camps
                                    </Sidebar.Item>
                                </Link>
                                <Link to='/dashboard/add-upcoming-camp'>
                                    <Sidebar.Item icon={HiShoppingBag}>
                                        Add Upcoming Camp
                                    </Sidebar.Item>
                                </Link>
                                <Link to='/dashboard/manage-upcoming-camp'>
                                    <Sidebar.Item icon={HiArrowSmRight}>
                                        Manage Upcoming Camps
                                    </Sidebar.Item>
                                </Link>
                            </> : ''
                        }
                        {
                            role && role === 'Participant' ? <>
                                <Link to='/dashboard/registered-camps'>
                                    <Sidebar.Item icon={HiTable}>
                                        Registered Camps
                                    </Sidebar.Item>
                                </Link>
                                <Link to='/dashboard/payment-history'>
                                    <Sidebar.Item icon={HiTable}>
                                        Payment History
                                    </Sidebar.Item>
                                </Link>
                                <Link to='/dashboard/feedback-and-ratings'>
                                    <Sidebar.Item icon={HiTable}>
                                        Feedback and Ratings
                                    </Sidebar.Item>
                                </Link>
                            </> : ''
                        }
                        {
                            role && role === 'HealthcareProfessional' ? <>
                                <Link to='/dashboard/accepted-camps'>
                                    <Sidebar.Item icon={HiTable}>
                                        Accepted Camps
                                    </Sidebar.Item>
                                </Link>
                            </> : ''
                        }
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
};

export default DashboardSidebar;