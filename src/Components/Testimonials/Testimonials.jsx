import { Carousel, Rating } from "flowbite-react";
import Container from "../Shared/Container/Container";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../Loader/Loader";
import SectionTitle from "../SectionTitle/SectionTitle";


const Testimonials = () => {
    const axiosPublic = useAxiosPublic()
    const { data: testimonial, isLoading } = useQuery({
        queryKey: ['testimonials'],
        queryFn: async () => {
            const res = await axiosPublic.get('/testimonials')
            return res.data
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <Container>
            <SectionTitle heading='Testimonials'></SectionTitle>
            <div className="">
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel>
                        {
                            testimonial?.map(item => <div key={item?._id} className="flex h-full items-center justify-center bg-gray-700 dark:bg-gray-700 dark:text-white">
                                <div className="flex w-full md:w-[80%] items-center gap-5 md:gap-10">
                                    <img src={item?.photo} className="flex-1 h-full w-24 rounded-xl" alt="" />
                                    <div className="flex-1">
                                        <h1 className="text-md md:text-3xl font-bold text-white">{item?.campName}</h1>
                                        <div className="flex items-center gap-10 mt-4">
                                            <p className=" text-xs md:text-sm text-gray-400">{item.date}</p>
                                            <Rating>
                                                <Rating.Star />
                                                <p className="ml-2 text-sm font-bold text-gray-400 dark:text-white">{item?.rating}</p>
                                            </Rating>
                                        </div>
                                        <h1 className="text-base md:text-2xl font-bold text-gray-300 mt-5">{item?.name}</h1>
                                        <p className=" text-xs md:text-sm text-gray-400">{item?.feedback}</p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </Carousel>
                </div>
            </div>
        </Container>
    );
};

export default Testimonials;