import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

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
            }
        ]
    },
]);

export default router;