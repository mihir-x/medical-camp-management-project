import { Helmet } from "react-helmet-async";
import Container from "../../Components/Shared/Container/Container";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Button, Label, TextInput } from "flowbite-react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const ContactUs = () => {

    const axiosPublic = useAxiosPublic()

    const handleContactUs = async(e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const message = form.message.value
        const mailObject = {
            email, message
        }
        try {
            const res = await axiosPublic.post('/send-mail', mailObject)
            if (res.data.status === 200) {
                Swal.fire({
                    title: `Thank You. We will reach you shortly`,
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
        }
        catch (err) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.message
            })
        }

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
                            Contact us for further inquiry.
                        </p>
                    </div>
                    <div>
                        <form onSubmit={handleContactUs} className="flex flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Your Message" />
                                </div>
                                <TextInput id="message" name="message" type="text" placeholder="Your Message" required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email1" value="Your email" />
                                </div>
                                <TextInput id="email1" name="email" type="email" placeholder="Your Email" required />
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