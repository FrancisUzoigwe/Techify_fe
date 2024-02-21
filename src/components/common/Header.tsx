import { useState } from "react"
import { LiaFreeCodeCamp } from "react-icons/lia"
import { CgMenuRight } from "react-icons/cg"
import { useDispatch } from "react-redux"
import { toggled } from "../../global/globalState"
import { Link } from "react-router-dom"
const Header = () => {

    // Header scrolling functionality starts here
    const [scroll, setScroll] = useState<boolean>(false)
    const onScroll = () => {
        setScroll(!scroll)
        if (window.scrollY > 10) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    window.addEventListener("scroll", onScroll)
    // Header scrolling functionality ends here


    const dispatch = useDispatch()

    return (
        <>
            {scroll ? (<header className="w-full h-[60px] transition-all duration-500  flex items-center justify-center z-[900] relative">
                <header className="w-full h-[60px] bg-white shadow-sm flex items-center justify-center fixed">
                    <header className="flex justify-between items-center w-[95%] h-full">
                        <div className="flex items-center">
                            <Link to="/">
                                <div className="flex items-center mr-2 font-[Buda] max-md:text-[15px] text-[20px]"><i className="mr-[6px]"><LiaFreeCodeCamp className="text-5xl max-md:text-4xl" /></i>Techify</div>
                            </Link>
                            <div className="flex items-center ml-14 max-lg:hidden" >
                                <div className=" mr-5 hover:cursor-pointer text-[15px] ">Our Mission</div>
                                <div className="hover:cursor-pointer text-[15px]">Support</div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button className=" px-7 py-2 max-md:px-5 rounded-md bg-[orange] hover:bg-blue-400 text-white transition duration-500 max-md:text-[13px]">Login</button>
                            <button className="ml-5 px-7 py-2 max-md:px-5 rounded-md bg-blue-400 text-white max-md:text-[13px]">Get Started</button>
                            <div className="text-black hidden max-lg:block ml-2">
                                <CgMenuRight className="text-3xl hover:cursor-pointer hover:scale-[1.2] transition-all duration-300" onClick={() => {
                                    dispatch(toggled())
                                }} />
                            </div>
                        </div>

                    </header>
                </header>
            </header>) : (<header className="w-full h-[60px] transition-all duration-100  bg-black flex items-center justify-center z-[900] relative">
                <header className="w-full h-[60px] bg-[#F5F2EB] shadow-sm  flex items-center justify-center fixed">
                    <header className="flex justify-between items-center w-[95%] h-full">
                        <div className="flex items-center">
                            <Link to="/">
                                <div className="flex items-center mr-2 font-[Buda] max-md:text-[15px] text-[20px]"><i className="mr-[6px]"><LiaFreeCodeCamp className="text-5xl max-md:text-4xl" /></i>Techify</div>
                            </Link>
                            <div className="flex items-center ml-14 max-lg:hidden">
                                <div className="mr-5 hover:cursor-pointer text-[15px] ">Our Mission</div>
                                <div className="  hover:cursor-pointer text-[15px]">Support</div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button className=" px-7 py-2 max-md:px-5 rounded-md bg-[orange] hover:bg-blue-400 text-white transition-all duration-500 max-md:text-[13px]">Login</button>
                            <button className="ml-5 px-7 py-2  max-md:px-5 rounded-md bg-blue-400 text-white max-md:text-[13px]">Get Started</button>
                            <div className="text-black hidden max-lg:block ml-2">
                                <CgMenuRight className="text-3xl hover:cursor-pointer hover:scale-[1.2] transition-all duration-300" onClick={() => {
                                    dispatch(toggled())
                                }} />
                            </div>
                        </div>

                    </header>
                </header>
            </header>)}
        </>
    )
}

export default Header
