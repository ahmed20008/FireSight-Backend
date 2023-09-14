import React from 'react';
import { lazy } from 'react';

const Welcome = lazy(() => import("../pages/Welcome"));
const Error404 = lazy(() => import("../pages/Error404"));
const Login = lazy(() => import("../modules/auth/Login"));
const Register = lazy(() => import("../modules/auth/Register"));
const Dashboard = lazy(() => import("../modules/Dashboard/Dashboard"));



export const routes = [
    {
        path: "/",
        element: <Welcome />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/*",
        element: <Error404 />,
    },
];