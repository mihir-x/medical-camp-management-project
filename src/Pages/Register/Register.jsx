import { Button, FileInput, Label, Select, TextInput } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc'
import { uploadImage } from "../../API/utils";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";


const Register = () => {

    const {createUser, updateUserProfile} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleRegistration = async(e) =>{
        e.preventDefault()
        const form = e.target 
        const name = form.name.value 
        const role = form.role.value 
        const email = form.email.value 
        const password = form.password.value 
        const image = form.image.files[0]

        console.log(name, role, email, password, image)
        try{
            const imageData = await uploadImage(image)
            const result = await createUser(email, password)
            await updateUserProfile(name, imageData?.data?.display_url)
            //save user info to database
            const userInfo = {
                name: name,
                email: email, 
                role: role,
                photo: imageData?.data?.display_url,
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Welcome ${result.user.displayName}`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/')
                }
            })
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
        <div className=" flex justify-center items-center my-5 md:my-10 lg:my-16">
            <Helmet>
                <title>MediVoyage | Register</title>
            </Helmet>
            <div className="flex flex-col bg-gray-100 p-6 max-w-md">
                <div className="text-center mb-6">
                    <h1 className=" text-2xl md:text-4xl font-bold mb-3">Register</h1>
                    <p className=" text-sm md:text-base text-gray-500">Welcome to MediVoyage</p>
                </div>
                <form onSubmit={handleRegistration} className="flex max-w-md flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Your name" />
                        </div>
                        <TextInput id="name" name="name" type="text" placeholder="Your name" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="file-upload" value="Upload file" />
                        </div>
                        <FileInput id="file-upload" name="image" />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="role" value="Select your role" />
                        </div>
                        <Select name="role" id="role" required>
                            <option>Organizer</option>
                            <option>HealthcareProfessional</option>
                            <option>Participant</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email2" value="Your email" />
                        </div>
                        <TextInput id="email2" name="email" type="email" placeholder="Your email" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password2" value="Your password" />
                        </div>
                        <TextInput id="password2" name="password" type="password" placeholder="Your password" required shadow />
                    </div>

                    <Button type="submit">Register new account</Button>
                </form>
                <div className=" cursor-pointer p-2 border-2 rounded-lg mt-5 text-center flex justify-center items-center gap-2">
                    <FcGoogle size={24}></FcGoogle>
                    <p>Continue With Google</p>
                </div>
                <p className=" text-center text-gray-400 mt-4">Already have an account? <Link to='/login' className=" text-gray-600 hover:underline hover:text-red-500">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;