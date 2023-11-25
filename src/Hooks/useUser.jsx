import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getUser } from "../API/utils";


const useUser = () => {
    const {user, loading} = useAuth()

   const {data:userAccount, isLoading} = useQuery({
        enabled: !loading && !!user?.email,
        queryFn: async() => {
           const res = await getUser(user?.email)
           return res
        },
        queryKey: ['user']
    })
    console.log('user in useUser: ', userAccount)
    return [userAccount, isLoading]
};

export default useUser;