import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import PropTypes from 'prop-types'
import Swal from "sweetalert2";
import axiosSecure from "../../../API";


const CampRegisterModal = ({ openModal, onCloseModal, camp, userInfo }) => {

    const handleCampRegister = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const phone = form.phone.value
        const address = form.address.value
        const age = form.age.value
        const gender = form.gender.value
        const fee = form.fee.value
        const requirements = form.requirements.value

        const registeredCamp = {
            name,
            phone,
            address,
            age,
            gender,
            fee: parseInt(fee),
            requirements,
            participant: userInfo?.email,
            campId: camp?._id,
            approval: 'Pending',
        }
        try {
            const res = await axiosSecure.post('/participation', registeredCamp)
            if (res?.data?.insertedId) {
                const coutRes = await axiosSecure.patch(`/camps/${camp?._id}`, { participant: 1 })
                if (coutRes?.data?.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `You have successfully registered for this medical camp`,
                        showConfirmButton: false,
                        timer: 1500
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

    return (
        <div>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <form onSubmit={handleCampRegister} className="flex max-w-md flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Your name" />
                            </div>
                            <TextInput id="name" name="name" type="text" defaultValue={userInfo?.name} placeholder="Your name" required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="address" value="Your address" />
                            </div>
                            <TextInput id="address" name="address" type="text" placeholder="Your address" required shadow />
                        </div>
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex-1">
                                <div className="mb-2 block">
                                    <Label htmlFor="age" value="Your age" />
                                </div>
                                <TextInput id="age" name="age" type="number" placeholder="Your age" required shadow />
                            </div>
                            <div className="flex-1">
                                <div className="mb-2 block">
                                    <Label htmlFor="gender" value="Gender" />
                                </div>
                                <Select name="gender" id="role" required>
                                    <option>Male</option>
                                    <option>Female</option>
                                </Select>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="phone" value="Phone Number" />
                                </div>
                                <TextInput id="phone" name="phone" type="number" defaultValue={userInfo?.phone} placeholder="Your Phone Number" required shadow />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="fee" value="Camp fee" />
                                </div>
                                <TextInput id="fee" disabled name="fee" type="number" defaultValue={camp?.fee} placeholder="Fee" shadow />
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="requirements" value="Requirements" />
                            </div>
                            <TextInput id="requirements" name="requirements" type="text" placeholder="Health related issue" required shadow />
                        </div>

                        <Button type="submit">Register</Button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default CampRegisterModal;

CampRegisterModal.propTypes = {
    openModal: PropTypes.func,
    onCloseModal: PropTypes.func,
    camp: PropTypes.object,
    userInfo: PropTypes.object,

}