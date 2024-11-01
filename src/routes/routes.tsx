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
import Unauthorized from "@/pages/Unauthorized";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import PrivateRoute from "./PrivateRoute";
import { SidebarProvider } from "@/components/ui/sidebar";
import { UserDashboard } from "@/pages/UserDashboard";


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
                path: '/checkout',
                element: <PrivateRoute>
                    <UserRoute>
                        <Checkout />
                    </UserRoute>
                </PrivateRoute>
            },
            {
                path: '/rooms/:id',
                element: (<PrivateRoute>
                    <UserRoute>
                        <BookRoom />
                    </UserRoute>
                </PrivateRoute>)
            },
            // {
            //     path: '/myBookings',
            //     element: <UserRoute>
            //         <MyBookings />
            //     </UserRoute>
            // },
            {
                path: '/slotBooking/:id',
                element: <PrivateRoute>
                    <UserRoute>
                        <SlotBooking />
                    </UserRoute>
                </PrivateRoute>
            },
            {
                path: '/checkout',
                element: <Checkout />
            },
            {
                path: '/dashboard',
                element: <AdminRoute>
                    <Dashboard />
                </AdminRoute>,
                children: [
                    {
                        path: "create-room",
                        element: <AdminRoute>
                            <CreateRoom />
                        </AdminRoute>
                    },
                    {
                        path: 'view-rooms',
                        element: <AdminRoute>
                            <ViewRooms />
                        </AdminRoute>
                    },
                    {
                        path: 'slot-management',
                        element: <AdminRoute>
                            <SlotManagement />
                        </AdminRoute>
                    },
                    {
                        path: 'booking-management',
                        element: <AdminRoute>
                            <BookingManagement />
                        </AdminRoute>
                    },
                ]
            },
            {
                path: '/userDashboard',
                element: <UserRoute>
                    <SidebarProvider>
                        <UserDashboard />
                    </SidebarProvider>
                </UserRoute>,
                children: [
                    {
                        path: "my-bookings",
                        element: <UserRoute>
                            <MyBookings />
                        </UserRoute>
                    },
                    {
                        path: 'checkout',
                        element: <Checkout />
                    },
                ]
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
    {
        path: '/unauthorized',
        element: <Unauthorized />
    },
]);