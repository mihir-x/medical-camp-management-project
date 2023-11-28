import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import Swal from "sweetalert2";
import axiosSecure from "../../../../API";
import Loader from "../../../../Components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";


const ManageUpcoming = () => {

    const { user } = useAuth()

    const { data: camps, isLoading, refetch } = useQuery({
        queryKey: ['myUpcomingCamps', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/upcoming-camps/myCamps/${user?.email}`)
            return res.data
        }
    })
    if (isLoading) return <Loader></Loader>
    console.log(camps)

    const handleCampDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosSecure.delete(`/${id}`)
                    if (res.data.deletedCount > 0) {
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Medical camp has been deleted.",
                            icon: "success"
                        });
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
        });
    }

    const column = [
        {
            name: 'Name',
            selector: row => row.title,
        },
        {
            name: 'Date',
            selector: row => row.date,
        },
        {
            name: 'Professionals Count',
            selector: row => row.professionals,
        },
        {
            name: 'Participants Count',
            selector: row => row.participants,
        },
        {
            name: 'Publish',
            selector: row => row.publish,
        },
        {
            name: 'Update',
            selector: row => row.update,
        },
        {
            name: 'Delete',
            selector: row => row.delete,
        },
    ]

    const tableData = camps?.map((camp) => ({
        title: camp.name,
        venue: camp.venue,
        date: camp.date,
        professionals: camp.interestedProfessional,
        participants: camp.interestedParticipant,
        publish: <Button disabled={camp?.interestedParticipant<2 || camp?.interestedProfessional<1} outline gradientDuoTone="pinkToOrange">Publish</Button>,
        update: <Link to={`/dashboard/update-camp/${camp._id}`}><Button outline gradientDuoTone="purpleToBlue">Update</Button></Link>,
        delete: <Button onClick={() => handleCampDelete(camp._id)} outline gradientDuoTone="pinkToOrange">Delete</Button>,
    }))

    return (
        <div className="mb-5 md:mb-8 lg:mb-16">
            <Helmet>
                <title>MediVoyage | Manage Upcoming Camps</title>
            </Helmet>
            <SectionTitle heading='Manage Upcoming Camps'></SectionTitle>
            <DataTable columns={column} data={tableData} style={{ 'overflowX': 'auto' }}></DataTable>
        </div>
    );
};

export default ManageUpcoming;