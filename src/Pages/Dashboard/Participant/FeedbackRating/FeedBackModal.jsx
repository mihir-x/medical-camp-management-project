import { Button, FileInput, Label, Modal, Select, Textarea } from "flowbite-react";
import PropTypes from 'prop-types'
import Swal from "sweetalert2";
import { uploadImage } from "../../../../API/utils";
import axiosSecure from "../../../../API";

const FeedBackModal = ({ openModal, onCloseModal, campData }) => {
    console.log(campData)

    const handleSubmitReview = async(e) =>{
        e.preventDefault()
        const form = e.target
        const feedback = form.feedback.value
        const rating = form.rating.value
        const image = form.image.files[0]
        try{
            const imageData = await uploadImage(image)
            const reviewInfo = {
                feedback,
                rating,
                photo: imageData?.data?.display_url,
                campName: campData?.campName,
                date: campData?.campDate,
                name: campData?.name,
                reviewDate: Date.now()
            }
            const reviewResult = await axiosSecure.post('/review', reviewInfo)
            if (reviewResult.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `You successfully posted a review`,
                    showConfirmButton: false,
                    timer: 1500
                });
                onCloseModal()
            }
        }
        catch(err){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.message
            })
        }
    }

    return (
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>

                <form onSubmit={handleSubmitReview} className="flex max-w-md flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="feedback" value="Your Feedback" />
                        </div>
                        <Textarea id="feedback" name="feedback" type="text" placeholder="Your name" required shadow />
                    </div>
                    <div className="flex gap-5">

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="file-upload" value="Upload Image" />
                            </div>
                            <FileInput id="file-upload" name="image" required/>
                        </div>
                        <div className="flex-1">
                            <div className="mb-2 block">
                                <Label htmlFor="rating" value="Rating" />
                            </div>
                            <Select name="rating" id="rating" required>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Select>
                        </div>
                    </div>
                    <Button type="submit">Submit Review</Button>
                </form>

            </Modal.Body>
        </Modal>
    );
};

export default FeedBackModal;

FeedBackModal.propTypes = {
    openModal: PropTypes.func,
    onCloseModal: PropTypes.func,
    campData: PropTypes.object,
}