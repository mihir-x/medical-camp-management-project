import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import DataTable from "react-data-table-component";
import useAuth from "../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../../../API";
import Loader from "../../../../Components/Loader/Loader";
import { Button } from "flowbite-react";
import Swal from "sweetalert2";

const ManageRegisteredCamps = () => {

    const { user } = useAuth()

    const { data: camps, isLoading, refetch } = useQuery({
        queryKey: ['registeredCamps', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/participation/${user?.email}`)
            return res.data
        }
    })
    if (isLoading) return <Loader></Loader>
    console.log(camps)

    const handleConfirm = async(id) =>{
        try{
            const res = await axiosSecure.patch(`/participation/confirm/${id}`,{approval: 'Confirmed'})
            console.log(res.data)
            refetch()
            if(res.data.registerApproval.modifiedCount>0){
                Swal.fire({
                    title: "Confirmed!",
                    text: "Registration has been confirmed",
                    icon: "success"
                });
            }
        }
        catch(err){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.message
            })
        }
    }

    const handleCancle = async (id, campId) => {
        console.log(campId)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosSecure.delete(`/participation/delete/${id}`)
                    if (res.data.deletedCount > 0) {
                        refetch()
                        const decrementRes = await axiosSecure.patch(`/camps/decrement/${campId}`, { participant: 1 })
                        if (decrementRes?.data?.modifiedCount > 0) {
                            
                            Swal.fire({
                                title: "Canceled!",
                                text: "Registration has been canceled",
                                icon: "success"
                            });
                        }

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
            name: 'Venue',
            selector: row => row.venue,
        },
        {
            name: 'Date',
            selector: row => row.date,
        },
        {
            name: 'Time',
            selector: row => row.time,
        },
        {
            name: 'Fee',
            selector: row => row.fee,
        },
        {
            name: 'Payment Status',
            selector: row => row.payment,
        },
        {
            name: 'Confirmation',
            selector: row => row.approval,
        },
        {
            name: 'Action',
            selector: row => row.cancel,
        },
    ]

    const tableData = camps?.map((camp) => ({
        title: camp?.campName,
        venue: camp?.campVenue,
        date: camp?.campDate,
        time: camp?.campTime,
        fee: camp?.fee,
        payment: camp?.payment,
        approval: <Button onClick={() => handleConfirm(camp?._id)} disabled={camp.payment ==='Unpaid' || camp.approval === 'Confirmed'} outline gradientDuoTone="pinkToOrange">{camp?.approval}</Button>,
        cancel: <Button onClick={() => handleCancle(camp?._id, camp?.campId)} disabled={camp.payment ==='Unpaid'} outline gradientDuoTone="pinkToOrange">Cancel</Button>,
    }))

    return (
        <div className="mb-5 md:mb-8 lg:mb-16">
            <Helmet>
                <title>MediVoyage | Manage Registered Camps</title>
            </Helmet>
            <SectionTitle heading='Manage Registered Camps'></SectionTitle>
            <DataTable columns={column} data={tableData} style={{ 'overflowX': 'auto' }}></DataTable>
        </div>
    );
};

export default ManageRegisteredCamps;