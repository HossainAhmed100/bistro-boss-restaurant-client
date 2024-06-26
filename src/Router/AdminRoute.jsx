import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "@nextui-org/react";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading, isAdminLoading){
        return <div className="flex item-center justify-center w-full min-h-screen"><Spinner size="lg" /></div>;
    }
    if(user || isAdmin){
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace/>
}

export default AdminRoute
