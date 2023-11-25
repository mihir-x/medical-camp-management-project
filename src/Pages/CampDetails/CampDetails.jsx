import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Components/Loader/Loader";
import { Button, Card } from "flowbite-react";
import Container from "../../Components/Shared/Container/Container";
import useRole from "../../Hooks/useRole";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import CampRegisterModal from "../../Components/Shared/CampRegisterModal/CampRegisterModal";
import useUser from "../../Hooks/useUser";


const CampDetails = () => {
    const [openModal, setOpenModal] = useState(false);
    const [userAccount] = useUser()
    const axiosPublic = useAxiosPublic()
    const [role] = useRole()
    const { id } = useParams()
    const { data, isLoading } = useQuery({
        queryKey: ['campDetails'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/camps/${id}`)
            return res.data
        }
    })
    if (isLoading) return <Loader></Loader>
    
    function onCloseModal() {
        setOpenModal(false);
    }

    return (
        <div>
            <Helmet>
                <title>MediVoyage | Camp Details</title>
            </Helmet>
            <Container>
                <SectionTitle heading='Camp Details'></SectionTitle>
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
                            <p className="font-bold text-gray-800">Healthcare Professionals: <span className=" text-gray-600 font-normal">{data?.professionals}</span></p>
                            <p className="font-bold text-gray-800">Target Audience: <span className=" text-gray-600 font-normal">{data?.audience}</span></p>

                        </div>
                        <div >
                            <p className="font-bold text-gray-800">Venue: <span className=" text-gray-600 font-normal">{data?.venue}</span></p>
                            <p className="font-bold text-gray-800">Date: <span className=" text-gray-600 font-normal">{data?.date}</span></p>
                            <p className="font-bold text-gray-800">Time: <span className=" text-gray-600 font-normal">{data?.time}</span></p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Button onClick={() => setOpenModal(true)} disabled={role !== 'Participant'} outline gradientDuoTone="purpleToBlue">
                            Join Camp
                        </Button>
                    </div>
                    <CampRegisterModal openModal={openModal} onCloseModal={onCloseModal} userInfo={userAccount}></CampRegisterModal>
                </Card>
            </Container>
        </div>
    );
};

export default CampDetails;