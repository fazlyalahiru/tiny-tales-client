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

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
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
                element: <AddToy></AddToy>
            },
            {
                path: '/all-toys',
                element: <AllToys></AllToys>
            },
            {
                path: '/toy/:id',
                element: <ToyDetails></ToyDetails>, 
                loader: ({params})=>fetch(`http://localhost:5000/toy/${params.id}`)
            }
        ]
    },
]);

export default router;