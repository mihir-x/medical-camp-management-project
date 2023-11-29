// import { Sidebar } from 'flowbite-react';
// import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import useRole from '../../../Hooks/useRole';
import { NavLink } from 'react-router-dom';

const DashboardSidebar = () => {

    const [role, isLoading] = useRole()
    if (isLoading) return <p>loading</p>
    console.log(role)

    return (
        <div >
            {/* <Sidebar aria-label="Default sidebar example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        {
                            role && role === 'Organizer' ? <>
                                <Link to='/dashboard/organizer-profile'>
                                    <Sidebar.Item icon={HiUser}>
                                        Profile
                                    </Sidebar.Item>
                                </Link>
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
                                <Link to='/dashboard/participant-profile'>
                                    <Sidebar.Item icon={HiUser}>
                                        Profile
                                    </Sidebar.Item>
                                </Link>
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
                                <Link to='/dashboard/professional-profile'>
                                    <Sidebar.Item icon={HiUser}>
                                        Profile
                                    </Sidebar.Item>
                                </Link>
                                <Link to='/dashboard/accepted-camps'>
                                    <Sidebar.Item icon={HiTable}>
                                        Accepted Camps
                                    </Sidebar.Item>
                                </Link>
                            </> : ''
                        }
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar> */}
            <div className='bg-gray-200 h-full shadow-2xl w-60 rounded-lg flex flex-col justify-start p-4 md:p-4'>
                {
                    role && role === 'Organizer' ? <>
                        <NavLink to='/dashboard/organizer-profile'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-gray-500 text-white font-bold mb-2 p-2 rounded-md shadow-md border" : "mb-2 border p-2 rounded-md border-black"
                            }
                        >
                            Profile
                        </NavLink>
                        <NavLink to='/dashboard/add-a-camp'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-gray-500 text-white font-bold mb-2 p-2 rounded-md shadow-md border" : "mb-2 border p-2 rounded-md border-black"
                            }
                        >
                            Add A Camp
                        </NavLink>
                        <NavLink to='/dashboard/manage-camps'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-gray-500 text-white font-bold mb-2 p-2 rounded-md shadow-md border" : "mb-2 border p-2 rounded-md border-black"
                            }
                        >
                        
                            Manage Camps
                        </NavLink>
                        <NavLink to='/dashboard/manage-registered-camps'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-gray-500 text-white font-bold mb-2 p-2 rounded-md shadow-md border" : "mb-2 border p-2 rounded-md border-black"
                            }
                        >
                        
                            Manage Registered Camps
                        </NavLink>
                        <NavLink to='/dashboard/add-upcoming-camp'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-gray-500 text-white font-bold mb-2 p-2 rounded-md shadow-md border" : "mb-2 border p-2 rounded-md border-black"
                            }
                        >
                            Add Upcoming Camp
                        </NavLink>
                        <NavLink to='/dashboard/manage-upcoming-camp'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-gray-500 text-white font-bold mb-2 p-2 rounded-md shadow-md border" : "mb-2 border p-2 rounded-md border-black"
                            }
                        >
                            Manage Upcoming Camps
                        </NavLink>
                    </> : ''
                }
                {
                    role && role === 'Participant' ? <>
                        <NavLink to='/dashboard/participant-profile'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-gray-500 text-white font-bold mb-2 p-2 rounded-md shadow-md border" : "mb-2 border p-2 rounded-md border-black"
                            }
                        >
                            Profile
                        </NavLink>
                        <NavLink to='/dashboard/registered-camps'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-gray-500 text-white font-bold mb-2 p-2 rounded-md shadow-md border" : "mb-2 border p-2 rounded-md border-black"
                            }
                        >
                            Registered Camps
                        </NavLink>
                        <NavLink to='/dashboard/payment-history'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-gray-500 text-white font-bold mb-2 p-2 rounded-md shadow-md border" : "mb-2 border p-2 rounded-md border-black"
                            }
                        >
                            Payment History
                        </NavLink>
                        <NavLink to='/dashboard/feedback-and-ratings'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-gray-500 text-white font-bold mb-2 p-2 rounded-md shadow-md border" : "mb-2 border p-2 rounded-md border-black"
                            }
                        >
                            Feedback and Ratings
                        </NavLink>
                    </> : ''
                }
                {
                    role && role === 'HealthcareProfessional' ? <>
                        <NavLink to='/dashboard/professional-profile'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-gray-500 text-white font-bold mb-2 p-2 rounded-md shadow-md border" : "mb-2 border p-2 rounded-md border-black"
                            }
                        >
                            Profile
                        </NavLink>
                        <NavLink to='/dashboard/accepted-camps'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-gray-500 text-white font-bold mb-2 p-2 rounded-md shadow-md border" : "mb-2 border p-2 rounded-md border-black"
                            }
                        >
                            Accepted Camps
                        </NavLink>
                    </> : ''
                }
            </div>
        </div>
    );
};

export default DashboardSidebar;