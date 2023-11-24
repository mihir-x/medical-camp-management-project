import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getRole } from "../API/utils";


const useRole = () => {
    const {user, loading} = useAuth()

    const {data:role, isLoading} = useQuery({
        enabled: !loading && !!user?.email,
        queryFn: async() => await getRole(user?.email),
        queryKey: ['role']
    })
    console.log('role in useRole: ', role)
    return [role, isLoading]
};

export default useRole;