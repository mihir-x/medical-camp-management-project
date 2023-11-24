import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import useRole from '../../../Hooks/useRole';

const DashboardSidebar = () => {

    const [role, isLoading] = useRole()
    if(isLoading) return <p>loading</p>
    console.log(role)

    return (
        <div>
            <Sidebar aria-label="Default sidebar example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="" icon={HiChartPie}>
                            Dashboard
                        </Sidebar.Item>
                        <Sidebar.Item href="" icon={HiViewBoards} label="Pro" labelColor="dark">
                            Kanban
                        </Sidebar.Item>
                        <Sidebar.Item href="" icon={HiInbox} label="3">
                            Inbox
                        </Sidebar.Item>
                        <Sidebar.Item href="" icon={HiUser}>
                            Users
                        </Sidebar.Item>
                        <Sidebar.Item href="" icon={HiShoppingBag}>
                            Products
                        </Sidebar.Item>
                        <Sidebar.Item href="" icon={HiArrowSmRight}>
                            Sign In
                        </Sidebar.Item>
                        <Sidebar.Item href="" icon={HiTable}>
                            Sign Up
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
};

export default DashboardSidebar;