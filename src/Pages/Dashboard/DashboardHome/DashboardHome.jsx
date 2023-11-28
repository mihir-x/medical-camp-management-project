import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import Loader from "../../../Components/Loader/Loader";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Button, TextInput } from "flowbite-react";


const DashboardHome = () => {

    const { user, loading } = useAuth()
    if (loading) <Loader></Loader>
    console.log(user)

    return (
        <div className="h-screen">
            <Helmet><title>MediVoyge | Dashboard</title></Helmet>
            <SectionTitle heading={`Welcome - ${user.displayName}`}></SectionTitle>
            <div className="mt-5 md:mt-10 lg:mt-24">
                <h1 className="text-center font-semibold text-xl md:text-3xl mb-5">Search Website</h1>
                <form action="">
                    <div className="flex flex-col justify-center max-w-lg mx-auto">
                        <div>
                            <TextInput id="large" type="text" sizing="lg" placeholder="Sorry! Not Yet Functional" />
                        </div>
                        <div className="mt-5">
                            <Button className="mx-auto">Search</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DashboardHome;