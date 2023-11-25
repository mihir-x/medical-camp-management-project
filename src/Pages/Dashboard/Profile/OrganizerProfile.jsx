import { Card, Dropdown } from "flowbite-react";
import useAuth from "../../../Hooks/useAuth";
import Loader from "../../../Components/Loader/Loader";
import useUser from "../../../Hooks/useUser";

const OrganizerProfile = () => {

    const { user, loading } = useAuth()
    const [userAccount, isLoading] = useUser()
    if (loading) return <Loader></Loader>
    console.log(userAccount)

    return (
        <div className="">
            <Card className="max-w-2xl mx-auto">
                {/* <div className="flex justify-end px-4 pt-4">
                    <Dropdown inline label="">
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Edit
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Export Data
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Delete
                            </a>
                        </Dropdown.Item>
                    </Dropdown>
                </div> */}
                <div className="flex flex-col items-center pb-10">
                    <img
                        alt="Bonnie image"
                        height="96"
                        src={userAccount?.photo}
                        width="96"
                        className="mb-3 rounded-full shadow-lg object-cover"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{userAccount?.name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400"><span className="text-gray-800 font-bold">Email:</span> {userAccount?.email}</span>
                    <div className=" space-x-5">
                        <span className="text-sm text-gray-500 dark:text-gray-400"><span className="text-gray-800 font-bold">Role:</span> {userAccount?.role}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400"><span className="text-gray-800 font-bold">Phone Number:</span> {userAccount?.number ? userAccount?.number : 'n/a'}</span>
                    </div>
                    <div className="mt-4 flex space-x-3 lg:mt-6">
                        <button
                            
                            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                        >
                            Update Profile
                        </button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default OrganizerProfile;