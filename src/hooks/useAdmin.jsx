import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth'
import useAxiosSecure from './useAxiosSecure';

function useAdmin() {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
  const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async() => {
        const res = await axiosSecure.get(`/users/checkRole/${user?.email}`);
        // console.log("🚀 ~ queryFn:async ~ res:", res.data)
        return res.data.admin
    }
  })
  return [isAdmin, isAdminLoading];
}

export default useAdmin
