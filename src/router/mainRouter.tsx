import { createBrowserRouter } from "react-router-dom"
import AuthLayout from "../components/layout/AuthLayout"
import LandingScreen from "../pages/auth/LandingScreen"
import RegisterScreen from "../pages/auth/RegisterScreen"
import SigninScreen from "../pages/auth/SigninScreen"
import SupportScreen from "../pages/auth/SupportScreen"
import Mission from "../pages/auth/Mission"
import MainLayout from "../components/layout/MainLayout"
import HomeScreen from "../pages/home/HomeScreen"
import BlogScreen from "../pages/home/BlogScreen"
import DetailScreen from "../pages/home/DetailScreen"

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
                path: "/support",
                element: <SupportScreen />
            },
            {
                path: "/mission",
                element: <Mission />
            },
        ]

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
        path: "/auth",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomeScreen />,
            },
            {
                path: "/auth/blogs",
                element: <BlogScreen />
            },
            {
                path: "/auth/blogs/:blogID",
                element: <DetailScreen />
            },
        ]
    }
])