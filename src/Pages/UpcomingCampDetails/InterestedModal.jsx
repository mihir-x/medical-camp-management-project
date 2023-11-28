import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import PropTypes from 'prop-types'

const InterestedModal = ({openModal, onCloseModal, camp, userInfo}) => {
    return (
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
                <form  className="flex max-w-md flex-col gap-4">
                    Interested Modal
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
    );
};

export default InterestedModal;

InterestedModal.propTypes = {
    openModal: PropTypes.func,
    onCloseModal: PropTypes.func,
    camp: PropTypes.object,
    userInfo: PropTypes.object,

}