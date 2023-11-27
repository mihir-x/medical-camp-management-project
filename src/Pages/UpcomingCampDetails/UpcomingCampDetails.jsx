import { Button, Card } from "flowbite-react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Container from "../../Components/Shared/Container/Container";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Components/Loader/Loader";
import { useParams } from "react-router-dom";


const UpcomingCampDetails = () => {

    const axiosPublic = useAxiosPublic()
    const { id } = useParams()

    const { data, isLoading } = useQuery({
        queryKey: ['upcomingDetails'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/upcoming-camp/${id}`)
            return res.data
        }
    })
    if (isLoading) return <Loader></Loader>

    return (
        <div>
            <Helmet>
                <title>MediVoyage | Upcoming Camp Details</title>
            </Helmet>
            <Container>
                <SectionTitle heading='Upcoming Camp Details'></SectionTitle>
                <Card
                    className=""
                    imgAlt=""
                    renderImage={() => <img className="w-full h-[20rem] overflow-clip object-cover rounded-t-lg" src={data?.photo} alt="image 1" />}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {data?.name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {data?.description}
                    </p>
                    <div className="md:flex justify-between">
                        <div >
                            <p className="font-bold text-gray-800">Specialized Services: <span className=" text-gray-600 font-normal">{data?.services}</span></p>
                            
                            <p className="font-bold text-gray-800">Target Audience: <span className=" text-gray-600 font-normal">{data?.audience}</span></p>

                        </div>
                        <div >
                            <p className="font-bold text-gray-800">Venue: <span className=" text-gray-600 font-normal">{data?.venue}</span></p>
                            <p className="font-bold text-gray-800">Date: <span className=" text-gray-600 font-normal">{data?.date}</span></p>
                            <p className="font-bold text-gray-800">Time: <span className=" text-gray-600 font-normal">{data?.time}</span></p>
                        <p className="font-bold text-gray-800">Fee: <span className=" text-gray-600 font-normal">${data?.fee}</span></p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-5">
                        <Button outline gradientDuoTone="purpleToBlue">
                            Join Upcoming Camp
                        </Button>
                        <Button outline gradientDuoTone="purpleToBlue">
                            Interested Upcoming
                        </Button>
                        {/* <Button onClick={() => setOpenModal(true)} disabled={role !== 'Participant'} outline gradientDuoTone="purpleToBlue">
                            Join Camp
                        </Button> */}
                    </div>
                    {/* <CampRegisterModal openModal={openModal} onCloseModal={onCloseModal} camp={data} userInfo={userAccount}></CampRegisterModal> */}
                </Card>
            </Container>
        </div>
    );
};

export default UpcomingCampDetails;