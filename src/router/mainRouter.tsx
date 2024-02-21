


import { createBrowserRouter } from "react-router-dom"
import AuthLayout from "../components/layout/AuthLayout"
import LandingScreen from "../pages/auth/LandingScreen"
import RegisterScreen from "../pages/auth/RegisterScreen"
import SigninScreen from "../pages/auth/SigninScreen"
import SupportScreen from "../pages/auth/SupportScreen"
import Mission from "../pages/auth/Mission"

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <LandingScreen />
            },
            {
                path: "/register",
                element: <RegisterScreen />
            },
            {
                path: "/signin",
                element: <SigninScreen />
            },
            {
                path: "/support",
                element: <SupportScreen />
            },
            {
                path: "/mission",
                element: <Mission />
            },
        ]

    }
])