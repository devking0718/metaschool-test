import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from './header';
import { useMainContext } from "../../context/MainContext";

export const Layout = () => {
    return(
        <div className="Layout">
            <Header/>
            <Outlet/>
        </div>
    )
}

export const PrivateRoute = () => {
    const user = useMainContext();
    if (!user.token) return <Navigate to="/signin"/>
    return(
        <Outlet/>
    )
}

