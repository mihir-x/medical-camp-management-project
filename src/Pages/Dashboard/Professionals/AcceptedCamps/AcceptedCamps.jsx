import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import useAuth from "../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../../../API";
import Loader from "../../../../Components/Loader/Loader";

const AcceptedCamps = () => {

    const { user } = useAuth()

    const { data: camps, isLoading } = useQuery({
        queryKey: ['acceptedCamps', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/upcoming/professional/${user?.email}`)
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
            name: 'Acceptance Status',
            selector: row => row.status,
        },
        {
            name: 'View Camp',
            selector: row => row.view,
        },
    ]

    const tableData = camps?.map((camp) => ({
        title: camp.campName,
        venue: camp.campVenue,
        date: camp.campDate,
        time: camp.campTime,
        status: camp.approval,
        view: <Link to={`/upcoming-camp-details/${camp.campId}`}><Button outline gradientDuoTone="purpleToBlue">Camp Details</Button></Link>,
    }))

    return (
        <div className="mb-5 md:mb-8 lg:mb-16">
            <Helmet>
                <title>MediVoyage | Accepted Camps</title>
            </Helmet>
            <SectionTitle heading='Accepted Upcoming Camps'></SectionTitle>
            <DataTable columns={column} data={tableData} style={{ 'overflowX': 'auto' }}></DataTable>
        </div>
    );
};

export default AcceptedCamps;