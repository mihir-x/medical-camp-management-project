import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../Loader/Loader";
import SectionTitle from "../SectionTitle/SectionTitle";
import Container from "../Shared/Container/Container";
import { Card } from "flowbite-react";


const TopOrganizer = () => {
    const axiosPublic = useAxiosPublic()

    const { data: organizer, isLoading } = useQuery({
        queryKey: ['allOrganizers'],
        queryFn: async () => {
            const res = await axiosPublic.get('/all-organizers')
            return res.data
        }
    })

    if (isLoading) return <Loader></Loader>
    console.log(organizer)

    return (
        <Container>
            <div>
                <SectionTitle heading='Our Organizers'></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        organizer && organizer.map(item => <Card key={item._id} className="max-w-sm">
                        
                        <div className="flex flex-col items-center pb-10">
                          <img
                            alt="Bonnie image"
                            src={item?.photo}
                            className="mb-3 h-32 w-32 rounded-full shadow-lg object-cover"
                          />
                          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item?.name}</h5>
                          
                        </div>
                      </Card>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default TopOrganizer;