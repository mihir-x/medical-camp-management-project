import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import DataTable from "react-data-table-component";
import { Button } from "flowbite-react";
import useAuth from "../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../../../API";
import Loader from "../../../../Components/Loader/Loader";


const ParticipantRegisteredCamp = () => {

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
        payment: <Button disabled={camp?.payment === 'Paid'} outline gradientDuoTone="pinkToOrange">{camp?.payment === 'Unpaid' ? 'Pay': 'Paid'}</Button>,
        approval: camp?.approval,
        cancel: <Button  outline gradientDuoTone="pinkToOrange">Cancel</Button>,
    }))

    return (
        <div className="mb-5 md:mb-8 lg:mb-16">
            <Helmet>
                <title>MediVoyage | Registered Camps</title>
            </Helmet>
            <SectionTitle heading='Registered Camps'></SectionTitle>
            <DataTable columns={column} data={tableData} style={{ 'overflowX': 'auto' }}></DataTable>
        </div>
    );
};

export default ParticipantRegisteredCamp;