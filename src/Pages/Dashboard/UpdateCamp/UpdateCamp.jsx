import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import axiosSecure from "../../../API";
import { uploadImage } from "../../../API/utils";
import { useForm } from "react-hook-form";
import { Button } from "flowbite-react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader/Loader";


const UpdateCamp = () => {

    const { id } = useParams()

    const { register, handleSubmit, reset } = useForm()

    const { data: camp, isLoading } = useQuery({
        queryKey: ['updateCamp', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/camps/${id}`)
            return res.data
        }
    })
    if (isLoading) return <Loader></Loader>

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
                }
                const campRes = await axiosSecure.put(`/update-camp/${id}`, campData)
                if (campRes.data.modifiedCount>0) {
                    reset()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Camp Updated Successfully`,
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
                    MediVoyage | Update Camp
                </title>
            </Helmet>
            <SectionTitle heading='Update Camp'></SectionTitle>
            <div className="text-sm md:text-base p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" flex items-center gap-2 md:gap-5">
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text">Camp name</span>
                            </label>
                            <input {...register('name', { required: true })} defaultValue={camp?.name} type="text" placeholder="Camp Name" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text">Camp Fees</span>
                            </label>
                            <input {...register('fee', { required: true })} defaultValue={camp?.fee} type="number" placeholder="Camp Fee" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="flex items-center  gap-2 md:gap-5">
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input {...register('date', { required: true })} defaultValue={camp?.date} type="date" placeholder="" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text">Time</span>
                            </label>
                            <input {...register('time', { required: true })} defaultValue={camp?.time} type="time" placeholder="" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className=" flex items-center gap-2 md:gap-5">
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text">Venue Location</span>
                            </label>
                            <input {...register('venue', { required: true })} defaultValue={camp?.venue} type="text" placeholder="Venue Location" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text">Specialized Services</span>
                            </label>
                            <input {...register('services', { required: true })} defaultValue={camp?.services} type="text" placeholder="Specialized Services" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className=" flex items-center gap-2 md:gap-5">
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text">Professionals</span>
                            </label>
                            <input {...register('professionals', { required: true })} defaultValue={camp?.professionals} type="text" placeholder="Healthcare Professional" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text">Target Audience</span>
                            </label>
                            <input {...register('audience', { required: true })} defaultValue={camp?.audience} type="text" placeholder="Target Audience" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="form-control w-full my-2">
                        <label className="label">
                            <span className="label-text">Camp Description</span>
                        </label>
                        <input {...register('description', { required: true })} defaultValue={camp?.description} type="text" placeholder="Camp description" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full my-2">
                        <label className="label">
                            <span className="label-text">Upload Image</span>
                        </label>
                        <input {...register('image', { required: true })} type="file" placeholder="Image" className="input input-bordered w-full " />
                    </div>
                    <div className="flex justify-center items-center">
                        <Button type="submit">Update</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCamp;