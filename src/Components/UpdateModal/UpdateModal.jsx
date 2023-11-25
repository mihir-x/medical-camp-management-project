import { Button, FileInput, Label, Modal, TextInput } from "flowbite-react";
import PropTypes from 'prop-types'
import Swal from "sweetalert2";
import { uploadImage } from "../../API/utils";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const UpdateModal = ({ openModal, onCloseModal, userInfo }) => {
    const {user,updateUserProfile} = useAuth()
    const axiosPublic = useAxiosPublic()

    const handleUpdate = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const phone = form.phone.value
        const image = form.image.files[0]

        try {
            const imageData = await uploadImage(image)
            await updateUserProfile(name, imageData?.data?.display_url)
            //save user info to database
            const userInfo = {
                name: name,
                phone: phone,
                photo: imageData?.data?.display_url,
            }
            axiosPublic.patch(`/users/${user?.email}`, userInfo)
                .then(res => {
                    console.log(res.data)
                    if (res.data.matchedCount>0) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `Profile Updated Successfully`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        catch (err) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.message
            })
        }
    }

    return (
        <div>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    {/* <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput
                                id="email"
                                defaultValue={userInfo?.email}
                                // value={email}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Your password" />
                            </div>
                            <TextInput id="password" type="password" required />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember">Remember me</Label>
                            </div>
                            <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                                Lost Password?
                            </a>
                        </div>
                        <div className="w-full">
                            <button>Log in to your account</button>
                        </div>
                        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered?&nbsp;
                            <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                                Create account
                            </a>
                        </div>
                    </div> */}
                    <form onSubmit={handleUpdate} className="flex max-w-md flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Your name" />
                            </div>
                            <TextInput id="name" name="name" type="text" defaultValue={userInfo?.name} placeholder="Your name" required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="file-upload" value="Upload Image" />
                            </div>
                            <FileInput id="file-upload" name="image" />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="phone" value="Your Phone Number" />
                            </div>
                            <TextInput id="phone" name="phone" type="number" defaultValue={userInfo?.phone} placeholder="Your Phone Number" required shadow />
                        </div>
                        <Button type="submit">Update</Button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default UpdateModal;

UpdateModal.propTypes = {
    openModal: PropTypes.func,
    onCloseModal: PropTypes.func,
    userInfo: PropTypes.object,

}