import axios from "axios"
import axiosSecure from "."

//upload image to imgbb
export const uploadImage = async(image) =>{
    const formData = new FormData()
    formData.append('image', image)
    const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData)
    return data
}

//clear cookie
export const clearCookie = async() =>{
    const {data} = await axiosSecure.post('/jwt/logout')
    return data
}

//get user role
export const getRole = async (email) =>{
    const {data} = await axiosSecure.get(`/user/${email}`)
    console.log('role in get role: ', data.role)
    return data.role
}
