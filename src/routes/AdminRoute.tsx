import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const role = useAppSelector((state) => state.auth.role);

    if (role === "admin") {
        return <>{children}</>;
    }

    return (
        <Navigate
            to="/unauthorized"
            state={{ from: location }}
            replace
        />
    );
};

export default AdminRoute;
