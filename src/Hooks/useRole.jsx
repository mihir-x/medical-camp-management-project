import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getUser } from "../API/utils";


const useRole = () => {
    const {user, loading} = useAuth()

    const {data:role, isLoading} = useQuery({
        enabled: !loading && !!user?.email,
        queryFn: async() => {
           const res = await getUser(user?.email)
           return res.role
        
        },
        queryKey: ['role']
    })
    return [role, isLoading]
};

export default useRole;