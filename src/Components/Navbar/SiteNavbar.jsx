import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";



const SiteNavbar = () => {

    const { user, logOut } = useAuth()

    const navLinks = <>
        <NavLink to='/' className={({ isActive }) => isActive ? ' font-bold underline text-green-500 ' : ''}>Home</NavLink>
        {
            user && <>
                <NavLink to='/available-camps' className={({ isActive }) => isActive ? ' font-bold underline text-green-500 ' : ''}>Available Camps</NavLink>
                <NavLink to='/dashboard' className={({ isActive }) => isActive ? ' font-bold underline text-green-500 ' : ''}>Dashboard</NavLink>
            </>
        }
        <NavLink to='/contact-us' className={({ isActive }) => isActive ? ' font-bold underline text-green-500 ' : ''}>Contact Us</NavLink>
    </>

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire("User logged out successfully!")
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!"
                })
            })
    }

    return (
        <div className=" shadow-2xl z-50">
            <Navbar fluid rounded>
                <Navbar.Brand href="">
                    <img src="https://i.ibb.co/Qj6RqFC/logo.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">MediVoyage</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {
                        user ? <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar alt="User settings" img={user?.photoURL} rounded />
                            }
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">{user?.displayName}</span>
                                <span className="block truncate text-sm font-medium">{user?.email}</span>
                            </Dropdown.Header>
                            <Dropdown.Divider />
                            <Dropdown.Item><Button onClick={handleLogout} color="failure">Logout</Button></Dropdown.Item>
                        </Dropdown>
                        : <div className=" md:flex gap-5">
                            <Link to='/login'><Button>Login</Button></Link>
                            <Link to='/register'><Button>Register</Button></Link>
                        </div>
                    }
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    {navLinks}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default SiteNavbar;