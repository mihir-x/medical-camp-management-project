import { Button, Label, Modal, TextInput } from "flowbite-react";
import PropTypes from 'prop-types'
import axiosSecure from "../../API";
import Swal from "sweetalert2";

const InterestedModal = ({ openModal, onCloseModal, camp, userInfo }) => {

    const handleInterested = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const phone = form.phone.value
        const specialty = form.specialty.value

        const registeredCamp = {
            name,
            phone,
            specialty,
            participant: userInfo?.email,
            campId: camp?._id,
            campName: camp?.name,
            campDate: camp?.date,
            campTime: camp?.time,
            campVenue: camp?.venue,
            organizer: camp?.organizer,
            approval: 'Pending',
        }
        try {
            const res = await axiosSecure.put('/upcoming/interested', registeredCamp)
            if (res?.data?.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Your interest in this upcoming camp is recorded`,
                    showConfirmButton: false,
                    timer: 1500
                });
                onCloseModal()
            }
        }
        catch (err) {
            Swal.fire({
                icon: "error",
                title: "Already Registered",
                text: err.message
            })
            onCloseModal()
        }
    }

    return (
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
                <form onSubmit={handleInterested} className="flex max-w-md flex-col gap-4">

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Your name" />
                        </div>
                        <TextInput id="name" name="name" type="text" defaultValue={userInfo?.name} placeholder="Your name" required shadow />
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="phone" value="Phone Number" />
                            </div>
                            <TextInput id="phone" name="phone" type="number" defaultValue={userInfo?.phone} placeholder="Your Phone Number" required shadow />
                        </div>

                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="specialization" value="Specialty" />
                        </div>
                        <TextInput id="specialty" name="specialty" type="text" placeholder="Your area of Specialty" required shadow />
                    </div>

                    <Button type="submit">Register</Button>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default InterestedModal;

InterestedModal.propTypes = {
    openModal: PropTypes.func,
    onCloseModal: PropTypes.func,
    camp: PropTypes.object,
    userInfo: PropTypes.object,

}