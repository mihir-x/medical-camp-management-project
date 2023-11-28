import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import Loader from "../../../Components/Loader/Loader";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Button, TextInput } from "flowbite-react";
import axiosSecure from '../../../API/index'
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const DashboardHome = () => {
    const navigate = useNavigate()
    const { user, loading } = useAuth()
    if (loading) <Loader></Loader>

    const handleSerch = async (e) => {
        e.preventDefault()
        const searchText = e.target.search.value
        try {
            const result = await axiosSecure.get(`/camps/searched/${searchText}`)
            // setSearchedCamp(result.data)
            // console.log(result.data)
            if(result.data){
                navigate(`/camp-details/${result.data._id}`)
            }
            else{
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `Sorry No Camp found`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        catch (err) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${err.message}`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    // useEffect(() =>{
    //     setSearchedCamp({})
    // },[])

    return (
        <div className="min-h-screen">
            <Helmet><title>MediVoyge | Dashboard</title></Helmet>
            <SectionTitle heading={`Welcome - ${user.displayName}`}></SectionTitle>
            <div className="mt-5 md:mt-10 lg:mt-24">
                <h1 className="text-center font-semibold text-xl md:text-3xl mb-5">Search By Camp Name</h1>
                <form onSubmit={handleSerch}>
                    <div className="flex flex-col justify-center max-w-lg mx-auto">
                        <div>
                            <TextInput id="large" name="search" type="text" sizing="lg" placeholder="Enter the camp title" />
                        </div>
                        <div className="mt-5">
                            <Button type="submit" className="mx-auto">Search</Button>
                        </div>
                    </div>
                </form>
                {/* <div>
                    {
                        searchedCamp && <div className="flex flex-col items-center justify-center mt-5">
                            <h1 className="text-lg md:text-3xl font-semibold">You Have Searched For</h1>
                            <Card
                                className="max-w-sm"
                                imgAlt="Meaningful alt text for an image that is not purely decorative"
                                imgSrc={searchedCamp.photo}
                            >
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {searchedCamp.name}
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    {searchedCamp.description}
                                </p>
                            </Card>
                        </div>
                    }
                </div> */}
            </div>
        </div>
    );
};

export default DashboardHome;