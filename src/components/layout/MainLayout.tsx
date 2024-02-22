import { Outlet } from "react-router-dom"
import MainHeader from "../common/MainHeader"
import Footer from "../common/Footer"
import MainSideScreen from "../common/MainSideScreen"

const MainLayout = () => {
    return (
        <div>
            <MainHeader />
            <div className="flex">
                <MainSideScreen />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout