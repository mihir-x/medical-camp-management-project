import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import axiosSecure from "../../../../API";
import Loader from "../../../../Components/Loader/Loader";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import DataTable from "react-data-table-component";


const FeedbackRating = () => {
    const { user } = useAuth()

    const { data: camps, isLoading } = useQuery({
        queryKey: ['paidCamp', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/paid-camp/${user?.email}`)
            return res.data
        }
    })
    if (isLoading) return <Loader></Loader>
    console.log(camps)

    const column = [
        {
            name: 'Camp Name',
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
            name: 'TransactionID',
            selector: row => row.transactionId,
        },
        {
            name: 'Payment Status',
            selector: row => row.payment,
        },
        {
            name: 'Confirmation',
            selector: row => row.approval,
        },
    ]

    const tableData = camps?.map((camp) => ({
        title: camp?.campName,
        venue: camp?.campVenue,
        date: camp?.campDate,
        time: camp?.campTime,
        fee: camp?.fee,
        transactionId: camp?.transactionId,
        payment: camp?.payment,
        approval: camp?.approval,
    }))

    return (
        <div className="mb-5 md:mb-8 lg:mb-16">
            <Helmet>
                <title>MediVoyage | Feedback</title>
            </Helmet>
            <SectionTitle heading='Feedback and Rating'></SectionTitle>
            <DataTable columns={column} data={tableData} style={{ 'overflowX': 'auto' }}></DataTable>

        </div>
    );
};

export default FeedbackRating;