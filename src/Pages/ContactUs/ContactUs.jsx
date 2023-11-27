import { Helmet } from "react-helmet-async";
import Container from "../../Components/Shared/Container/Container";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import {  Button, Label, TextInput } from "flowbite-react";
import Swal from "sweetalert2";


const ContactUs = () => {

    const handleContactUs = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        Swal.fire({
            title: `Welcome ${name}. We will reach you shortly`,
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          form.reset()
    }

    return (
        <div>
            <Helmet>
                <title>MediVoyage | Contact Us</title>
            </Helmet>
            <SectionTitle heading='Contact Us'></SectionTitle>
            <Container>
               
                <div className="md:flex  justify-around items-center">
                    <div>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Welcome to Medical Camp Management
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Contact us and be part of an amazing journey. 
                        </p>
                    </div>
                    <div>
                        <form onSubmit={handleContactUs} className="flex flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Your Name" />
                                </div>
                                <TextInput id="name" name="name" type="text" required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email1" value="Your email" />
                                </div>
                                <TextInput id="email1" name="email" type="email" placeholder="name@flowbite.com" required />
                            </div>
                            
                            <Button type="submit">Submit</Button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactUs;