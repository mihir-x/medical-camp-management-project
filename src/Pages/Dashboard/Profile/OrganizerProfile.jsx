import { Card } from "flowbite-react";
// import useAuth from "../../../Hooks/useAuth";
import Loader from "../../../Components/Loader/Loader";
import useUser from "../../../Hooks/useUser";
import { useState } from "react";
import UpdateModal from "../../../Components/UpdateModal/UpdateModal";

const OrganizerProfile = () => {
    const [openModal, setOpenModal] = useState(false);
    const [userAccount, isLoading] = useUser()



    if (isLoading) return <Loader></Loader>
    console.log(userAccount)

    function onCloseModal() {
        setOpenModal(false);
    }

    return (
        <div className="">
            <Card className="max-w-2xl mx-auto">
                
                <div className="flex flex-col items-center pb-10">
                    <img
                        alt="Bonnie image"
                        src={userAccount?.photo}
                        className="mb-3 h-36 w-36 rounded-full shadow-lg object-cover"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{userAccount?.name}</h5>
                    <span className="text-sm md:text-base text-gray-500 dark:text-gray-400"><span className="text-gray-800 font-bold">Email:</span> {userAccount?.email}</span>
                    <div className=" flex flex-col md:flex-row gap-5">
                        <span className="text-sm md:text-base text-gray-500 dark:text-gray-400"><span className="text-gray-800 font-bold">Role:</span> {userAccount?.role}</span>
                        <span className="text-sm md:text-base text-gray-500 dark:text-gray-400"><span className="text-gray-800 font-bold">Phone Number:</span> {userAccount?.phone ? userAccount?.phone : 'n/a'}</span>
                    </div>
                    <div className="mt-4 flex space-x-3 lg:mt-6">
                        <button
                            onClick={() => setOpenModal(true)}
                            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                        >
                            Update Profile
                        </button>
                    </div>
                </div>
                <UpdateModal openModal={openModal} onCloseModal={onCloseModal} userInfo={userAccount}></UpdateModal>
            </Card>
        </div>
    );
};

export default OrganizerProfile;