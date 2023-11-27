import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../SectionTitle/SectionTitle";
import Container from "../Shared/Container/Container";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import CampCard from "../Shared/CampCard/CampCard";
import useRole from "../../Hooks/useRole";
import useUser from "../../Hooks/useUser";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";


const PopularCamps = () => {
    const [sorted, setSorted] = useState([])
    const axiosPublic = useAxiosPublic()
    const [userAccount] = useUser()
    const [role] = useRole()
    const { data: camps } = useQuery({
        queryKey: ['popular'],
        queryFn: async () => {
            const res = await axiosPublic.get('/camps/popular')
            return res.data
        }
    })
    // if(isLoading) return <Loader></Loader>
    const handleAsc = () => {
        const asc = camps.slice().sort((a, b) => a.participant - b.participant)
        setSorted(asc)
    }
    const handleDec = () => {
        const dec = camps.slice().sort((a, b) => b.participant - a.participant)
        setSorted(dec)
    }
    useEffect(() => {
        setSorted(camps)
    }, [camps])
    return (
        <Container>
            <div>
                <SectionTitle heading='Popular Camps'></SectionTitle>
                <div className="outline-2 flex flex-col md:flex-row gap-5 justify-end p-4">
                    <Button pill onClick={handleAsc}>Sort By Ascending Order</Button>
                    <Button pill onClick={handleDec}>Sort By Descending Order</Button>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                        sorted?.map(camp => <CampCard key={camp._id} camp={camp} role={role} userAccount={userAccount}></CampCard>)
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
