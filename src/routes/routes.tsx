import { createBrowserRouter } from "react-router-dom";
import AboutUs from "@/pages/AboutUs";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import App from "@/App";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Rooms from "@/pages/Rooms";
import BookRoom from "@/pages/BookRoom";
import MyBookings from "@/pages/MyBookings";
import Dashboard from "@/pages/Dashboard";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/aboutUs",
                element: <AboutUs />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: '/rooms',
                element: <Rooms />
            },
            {
                path: '/single-room',
                element: <BookRoom />
            },
            {
                path: '/myBookings',
                element: <MyBookings />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />
    },
]);