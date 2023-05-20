import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AddToy from "../pages/AddToy";
import AllToys from "../pages/AllToys";
import ToyDetails from "../components/ToyDetails";
import MyToys from "../pages/MyToys";
import EditToy from "../pages/EditToy";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }, {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/add-toy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: '/all-toys',
                element: <AllToys></AllToys>
            },
            {
                path: '/toy/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://tiny-tales-server.vercel.app/toy/${params.id}`)
            },
            {
                path: '/my-toys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: '/edit-toy/:id',
                element: <EditToy></EditToy>,
                loader: ({ params }) => fetch(`https://tiny-tales-server.vercel.app/toy/${params.id}`)
            }
        ]
    },
]);

export default router;