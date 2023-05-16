import { Children, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = () => {
    const {user, loading} = useContext(AuthContext);
    
    if (loading) {
        return <progress className="progress w-56"></progress>;
    }

    if (user?.email) {
        return Children;
    }

    return <Navigate to="/login" replace />;
};

export default PrivateRoute;