import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import DataTable from "react-data-table-component";
import { Button } from "flowbite-react";
import useAuth from "../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../../../API";
import Loader from "../../../../Components/Loader/Loader";
import Swal from "sweetalert2";
import { useState } from "react";
import PaymentModal from "../PaymentModal/PaymentModal";


const ParticipantRegisteredCamp = () => {
    const [openModal, setOpenModal] = useState(false);
    const [campData, setCampData] = useState({})

    const { user } = useAuth()

    const { data: camps, isLoading, refetch } = useQuery({
        queryKey: ['participantCamps', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/participation/participant/${user?.email}`)
            return res.data
        }
    })
    if (isLoading) return <Loader></Loader>
    console.log(camps)

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
                        Swal.fire({
                            title: "Canceled!",
                            text: "Registration has been canceled",
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
        payment: <Button onClick={() => handleOpenModal(camp)} disabled={camp?.payment === 'Paid'} outline gradientDuoTone="pinkToOrange">{camp?.payment === 'Unpaid' ? 'Pay' : 'Paid'}</Button>,
        approval: camp?.approval,
        cancel: <Button onClick={() => handleCancle(camp?._id)} disabled={camp?.payment === 'Paid'} outline gradientDuoTone="pinkToOrange">Cancel</Button>,
    }))

    const handleOpenModal = (item) =>{
        setCampData(item)
        setOpenModal(true)
    }
    
    function onCloseModal() {
        setOpenModal(false);
    }

    return (
        <div className="mb-5 md:mb-8 lg:mb-16">
            <Helmet>
                <title>MediVoyage | Registered Camps</title>
            </Helmet>
            <SectionTitle heading='Registered Camps'></SectionTitle>
            <DataTable columns={column} data={tableData} style={{ 'overflowX': 'auto' }}></DataTable>
            <PaymentModal openModal={openModal} onCloseModal={onCloseModal} campData={campData} refetch={refetch}></PaymentModal>
        </div>
    );
};

export default ParticipantRegisteredCamp;