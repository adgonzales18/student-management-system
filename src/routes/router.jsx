import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import Signup from "../pages/Auth/Register/Signup"
import Signin from "../pages/Auth/Login/Signin"
import Dashboard from "../pages/Homepage/Dashboard";

export const router = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/signup", element: <Signup/>},
    {path: "/signin", element: <Signin/>},
    {path: "/dashboard", element: <Dashboard/> }
])