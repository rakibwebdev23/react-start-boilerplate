import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
// import ProtectedRoute from "../common/ProtectedRoute";
import AdminDashboardLayout from "../layout/AdminDashboardLayout";
import UserDashboardLayout from "../layout/UserDashboardLayout";
import AdminOverview from "../pages/adminDashboard/AdminOverview";
import UserOverview from "../pages/userDashboard/UserOverview";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
    {
        path: "/admin-dashboard",
        // element: <ProtectedRoute />,
        children: [
            {
                path: "",
                element: <AdminDashboardLayout />,
                children: [
                    {
                        index: true,
                        element: <AdminOverview />,
                    }
                ]
            }
        ]
    },
    {
        path: "/user-dashboard",
        // element: <ProtectedRoute />,
        children: [
            {
                path: "",
                element: <UserDashboardLayout />,
                children: [
                    {
                        index: true,
                        element: <UserOverview />,
                    }
                ]
            }
        ]
    }
]);

export default routes;