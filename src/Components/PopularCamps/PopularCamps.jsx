import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../SectionTitle/SectionTitle";
import Container from "../Shared/Container/Container";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../Loader/Loader";
import CampCard from "../Shared/CampCard/CampCard";
import useRole from "../../Hooks/useRole";
import useUser from "../../Hooks/useUser";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";


const PopularCamps = () => {
    const axiosPublic = useAxiosPublic()
    const [userAccount] = useUser()
    const [role] = useRole()
    const {data:camps, isLoading} = useQuery({
        queryKey: ['popular'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/camps/popular')
            return res.data
        }
    })
    if(isLoading) return <Loader></Loader>
    return (
        <Container>
            <div>
                <SectionTitle heading='Popular Camps'></SectionTitle>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                        camps?.map(camp => <CampCard key={camp._id} camp={camp} role={role} userAccount={userAccount}></CampCard>)
                    }
                </div>
                <div className="flex justify-center mt-5 md:mt-10">
                    <Link to='/available-camps'><Button>See all Camp</Button></Link>
                </div>
            </div>
        </Container>
    );
};

export default PopularCamps;