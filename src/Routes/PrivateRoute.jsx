import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return '';
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to='/sign-in' state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;