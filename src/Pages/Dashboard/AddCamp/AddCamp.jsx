import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { uploadImage } from "../../../API/utils";
import axiosSecure from "../../../API";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";


const AddCamp = () => {
    const {user} = useAuth()
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {
        const imageFile = data.image[0]
        try {
            const imageData = await uploadImage(imageFile)

            if (imageData?.success) {
                const campData = {
                    name: data.name,
                    fee: parseInt(data.fee),
                    date: data.date,
                    time: data.time,
                    venue: data.venue,
                    services: data.services,
                    professionals: data.professionals,
                    audience: data.audience,
                    description: data.description,
                    photo: imageData.data.display_url,
                    createdAt: Date.now(),
                    organizer: user?.email,
                    participant: 0
                }
                const campRes = await axiosSecure.post('/camps', campData)
                if (campRes.data.insertedId) {
                    reset()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `A New Camp Added Successfully`,
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
            <Helmet>
                <title>
                    MediVoyage | Add Item
                </title>
            </Helmet>
            <SectionTitle heading='Add A Camp'></SectionTitle>
            <div className="text-sm md:text-base p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" flex items-center gap-2 md:gap-5">
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text">Camp name</span>
                            </label>
                            <input {...register('name', { required: true })} type="text" placeholder="Camp Name" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text">Camp Fees</span>
                            </label>
                            <input {...register('fee', { required: true })} type="number" placeholder="Camp Fee" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="flex items-center  gap-2 md:gap-5">
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input {...register('date', { required: true })} type="date" placeholder="" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text">Time</span>
                            </label>
                            <input {...register('time', { required: true })} type="time" placeholder="" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className=" flex items-center gap-2 md:gap-5">
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text">Venue Location</span>
                            </label>
                            <input {...register('venue', { required: true })} type="text" placeholder="Venue Location" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text">Specialized Services</span>
                            </label>
                            <input {...register('services', { required: true })} type="text" placeholder="Specialized Services" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className=" flex items-center gap-2 md:gap-5">
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text">Professionals</span>
                            </label>
                            <input {...register('professionals', { required: true })} type="text" placeholder="Healthcare Professional" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text">Target Audience</span>
                            </label>
                            <input {...register('audience', { required: true })} type="text" placeholder="Target Audience" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="form-control w-full my-2">
                        <label className="label">
                            <span className="label-text">Camp Description</span>
                        </label>
                        <input {...register('description', { required: true })} type="text" placeholder="Camp description" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full my-2">
                        <label className="label">
                            <span className="label-text">Upload Image</span>
                        </label>
                        <input {...register('image', { required: true })} type="file" placeholder="Image" className="input input-bordered w-full " />
                    </div>
                    <div className="flex justify-center items-center">
                        <input type="submit" className=" p-2 bg-slate-800 text-white font-bold rounded-lg" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCamp;