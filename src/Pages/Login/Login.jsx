import { Button, Label, TextInput } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const Login = () => {

    const {logIn} = useAuth()
    const navigate = useNavigate()
    // const location = useLocation()
    // const from = location?.state?.from?.pathname || '/'

    const handleLogin = async(e) =>{
        e.preventDefault()
        const form = e.target 
        const email = form.email.value 
        const password = form.password.value 
        try{
            const result = await logIn(email, password)
            navigate('/dashboard') //from, {replace: true}
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Welcome back ${result.user.displayName}`,
                showConfirmButton: false,
                timer: 1500
              });
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
                <title>MediVoyage | Login</title>
            </Helmet>
            <div className="flex flex-col bg-gray-100 p-6 max-w-md">
                <div className="text-center mb-6">
                    <h1 className=" text-2xl md:text-4xl font-bold mb-3">Login</h1>
                    <p className=" text-sm md:text-base text-gray-500">Welcome to MediVoyage</p>
                </div>
                <form onSubmit={handleLogin} className="flex max-w-md flex-col gap-4">
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
                    <Button type="submit">Login</Button>
                </form>
                <div className=" cursor-pointer p-2 border-2 rounded-lg mt-5 text-center flex justify-center items-center gap-2">
                    <FcGoogle size={24}></FcGoogle>
                    <p>Continue With Google</p>
                </div>
                <p className=" text-center text-gray-400 mt-4">Don&apos;t have an account? <Link to='/register' className=" text-gray-600 hover:underline hover:text-red-500">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;