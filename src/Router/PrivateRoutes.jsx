import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "@nextui-org/react";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="flex item-center justify-center w-full min-h-screen"><Spinner size="lg" /></div>;
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace/>
}

export default PrivateRoutes
