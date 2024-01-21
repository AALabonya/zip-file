import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../../components/Loader";

// eslint-disable-next-line react/prop-types
const AdminRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);


    if (isLoading) {
        return <Loader />
    }

    if (!isLoading && !user) {
        return <Navigate to={'/login'} />
    }

    return children
};

export default AdminRoute;