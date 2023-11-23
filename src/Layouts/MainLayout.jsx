import { Outlet } from "react-router-dom";
import SiteFooter from "../Components/Footer/SiteFooter";
import SiteNavbar from "../Components/Navbar/SiteNavbar";


const MainLayout = () => {
    return (
        <div className=" min-h-screen flex flex-col justify-between">
            <SiteNavbar></SiteNavbar>
            <Outlet></Outlet>
            <SiteFooter></SiteFooter>
        </div>
    );
};

export default MainLayout;