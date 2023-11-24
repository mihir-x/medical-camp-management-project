import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";



const SiteNavbar = () => {

    const {user, logOut} = useAuth()

    const navLinks = <>
        <NavLink to='/' className={({isActive}) => isActive? ' font-bold underline text-green-500 ': ''}>Home</NavLink>
        <NavLink to='/available-camps' className={({isActive}) => isActive? ' font-bold underline text-green-500 ': ''}>Available Camps</NavLink>
        <NavLink to='/dashboard' className={({isActive}) => isActive? ' font-bold underline text-green-500 ': ''}>Dashboard</NavLink>
        <NavLink to='/contact-us' className={({isActive}) => isActive? ' font-bold underline text-green-500 ': ''}>Contact Us</NavLink>
    </>

    const handleLogout = () =>{
        logOut()
        .then(() =>{
            Swal.fire("User logged out successfully!")
        })
        .catch(err =>{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!"
              })
        })
    }

    return (
        <div className=" shadow-2xl">
            <Navbar fluid rounded>
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src="https://i.ibb.co/Qj6RqFC/logo.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">MediVoyage</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item><Button onClick={handleLogout} color="failure">Logout</Button></Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    {/* <Navbar.Link href="#" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#">Available Camps</Navbar.Link>
                    <Navbar.Link href="#">Dashboard</Navbar.Link>
                    <Navbar.Link href="#">Contact Us</Navbar.Link> */}
                    {navLinks}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default SiteNavbar;