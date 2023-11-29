import DataTable from "react-data-table-component";
import useAuth from "../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../../../API";
import Loader from "../../../../Components/Loader/Loader";
import { Button } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ManageCamps = () => {
    const { user } = useAuth()

    const { data: camps, isLoading, refetch } = useQuery({
        queryKey: ['myCamps', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/camps/myCamps/${user?.email}`)
            return res.data
        }
    })
    if (isLoading) return <Loader></Loader>
    
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
                    const res = await axiosSecure.delete(`/delete-camp/${id}`)
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
        // {
        //     name: 'Venue',
        //     selector: row => row.venue,
        // },
        {
            name: 'Services',
            selector: row => row.services,
        },
        {
            name: 'Professionals',
            selector: row => row.professionals,
        },
        // {
        //     name: 'Date',
        //     selector: row => row.date,
        // },
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
        // venue: camp.venue,
        services: camp.services,
        professionals: camp.professionals,
        // date: camp.date,
        update: <Link to={`/dashboard/update-camp/${camp._id}`}><Button outline gradientDuoTone="purpleToBlue">Update</Button></Link> ,
        delete: <Button onClick={() => handleCampDelete(camp._id)} outline gradientDuoTone="pinkToOrange">Delete</Button>,
    }))

    return (
        <div className="mb-5 md:mb-8 lg:mb-16 overflow-x-auto">
            <Helmet>
                <title>MediVoyage | Manage Camps</title>
            </Helmet>
            <SectionTitle heading='Manage Camps'></SectionTitle>
            <DataTable columns={column} data={tableData} style={{ 'overflowX': 'auto' }}></DataTable>
        </div>
    );
};

export default ManageCamps;