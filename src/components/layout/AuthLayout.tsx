import Footer from "../common/Footer"
import Header from "../common/Header"
import { Outlet } from "react-router-dom"
import SiderScreen from "../common/SiderScreen"
const AuthLayout = () => {
    return (
        <div>
            <Header />
            <div className="flex ">
                <SiderScreen />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default AuthLayout