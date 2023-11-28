// import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import Container from "../Shared/Container/Container";
// import { Button } from "flowbite-react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import UpcomingCard from "./UpcomingCard";


const UpcomingSection = () => {

    const axiosPublic = useAxiosPublic()
    const { data: camps, isLoading } = useQuery({
        queryKey: ['upcoming'],
        queryFn: async () => {
            const res = await axiosPublic.get('/upcoming-camp')
            return res.data
        }
    })

    if(isLoading) return <Loader></Loader>

    return (
        <Container>
            <div>
                <SectionTitle heading='Upcoming Camps'></SectionTitle>
                {
                    camps?.length >0 ? <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                       camps?.map(camp => <UpcomingCard key={camp._id} camp={camp}></UpcomingCard>)
                    }
                </div>: <div className="flex justify-center items-center"><h1 className=" text-xs md:text-3xl font-bold text-gray-700">There is no upcoming camp available</h1></div>
                }
                {/* <div className="flex justify-center mt-5 md:mt-10">
                    <Link to='/available-camps'><Button>See All Upcoming Camp</Button></Link>
                </div> */}
            </div>
        </Container>
    );
};

export default UpcomingSection;