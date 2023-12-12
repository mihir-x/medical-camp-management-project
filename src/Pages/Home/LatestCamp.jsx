import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Components/Loader/Loader";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";


const LatestCamp = () => {
    const axiosPublic = useAxiosPublic()
    const { data: camp, isLoading } = useQuery({
        queryKey: ['allCamps'],
        queryFn: async () => {
            const res = await axiosPublic.get('/camps/latest')
            return res.data
        }
    })
    if (isLoading) return <Loader></Loader>
    console.log(camp)
    return (
        <div className=" flex p-5 md:p-10 relative">
            <Link to={`/camp-details/${camp?._id}`}><Button>Checkout Our Latest Camp</Button></Link>
            <Marquee pauseOnHover={true} speed={80}>
                <Link to={`/camp-details/${camp?._id}`} className="mr-20"><p className=" text-lg md:text-xl font-bold text-white"><span className=" mr-5"><span className=" text-red-400">Camp name:</span> {camp?.name}</span> <span className=" mr-5"><span className=" text-red-400">Services:</span> {camp?.services}</span> <span className=" mr-5"><span className=" text-red-400">Venue:</span> {camp?.venue}</span></p></Link>
                <div className="ml-32"></div>
            </Marquee>
            <div className="absolute -z-50 inset-0 bg-gradient-to-t from-transparent via-gray-600 to-transparent"></div>
            <div className="absolute -z-50 inset-0 bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
        </div>
    );
};

export default LatestCamp;