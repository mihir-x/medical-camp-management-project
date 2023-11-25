import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Components/Loader/Loader";
import Container from "../../Components/Shared/Container/Container";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import CampCard from "../../Components/Shared/CampCard/CampCard";
import useRole from "../../Hooks/useRole";


const AvailableCamps = () => {
    const axiosPublic = useAxiosPublic()
    const [role] = useRole()
    const { data: camps, isLoading } = useQuery({
        queryKey: ['allCamps'],
        queryFn: async () => {
            const res = await axiosPublic.get('/camps')
            return res.data
        }
    })
    if (isLoading) return <Loader></Loader>
    console.log(camps)

    return (
        <div>
            <Helmet>
                <title>MediVoyage | Available Camps</title>
            </Helmet>
            <Container>
                <div>
                    <SectionTitle heading='Available Camps'></SectionTitle>
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
                        {
                            camps?.map(camp => <CampCard key={camp._id} camp={camp} role={role}></CampCard>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AvailableCamps;