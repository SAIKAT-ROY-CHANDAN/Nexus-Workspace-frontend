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
import SlotBooking from "@/pages/SlotBooking";
import CreateRoom from "@/pages/CreateRoom";
import ViewRooms from "@/pages/ViewRooms";
import SlotManagement from "@/pages/SlotManagement";
import BookingManagement from "@/pages/BookingManagement";
import Checkout from "@/pages/Checkout";
import ErrorPage from "@/pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
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
                path: '/rooms/:id',
                element: <BookRoom />
            },
            {
                path: '/myBookings',
                element: <MyBookings />
            },
            {
                path: '/slotBooking/:id',
                element: <SlotBooking />
            },
            {
                path: '/checkout',
                element: <Checkout />
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
                children: [
                    {
                        path: "create-room",
                        element: <CreateRoom />
                    },
                    {
                        path: 'view-rooms',
                        element: <ViewRooms />
                    },
                    {
                        path: 'slot-management',
                        element: <SlotManagement />
                    },
                    {
                        path: 'booking-management',
                        element: <BookingManagement />
                    },
                ]
            },
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