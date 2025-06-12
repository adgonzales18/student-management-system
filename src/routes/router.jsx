import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import Signup from "../pages/Auth/Register/Signup"
import Signin from "../pages/Auth/Login/Signin"

export const router = createBrowserRouter([
    {path: "/", element: <Signin/>},
    {path: "/signup", element: <Signup/>},
    {path: "/dashboard", element: <App/> }
])