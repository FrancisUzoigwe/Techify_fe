import { useState } from "react"
import { LiaFreeCodeCamp } from "react-icons/lia"
import { CgMenuRight } from "react-icons/cg"
import { useDispatch } from "react-redux"
import { toggled } from "../../global/globalState"
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
            {scroll ? (<header className="w-full h-[80px] transition-all duration-500  flex items-center justify-center ">
                <header className="w-full h-[80px] bg-[black] text-white flex items-center justify-center fixed">
                    <header className="flex justify-between items-center w-[95%] h-full">
                        <div className="flex items-center">
                            <div className="flex items-center mr-"><i className="mr-2"><LiaFreeCodeCamp className="text-5xl max-md:text-4xl" /></i>Techify</div>
                            <div className="flex items-center ml-14 max-md:hidden" >
                                <div className="text-white mx-5 hover:cursor-pointer text-[15px] ">Our Mission</div>
                                <div className="text-white mx-5 hover:cursor-pointer text-[15px]">Support</div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button className=" px-7 py-[7px] rounded-md bg-[orange] hover:bg-blue-400 text-white transition duration-500 max-md:text-[13px]">Login</button>
                            <button className="ml-5 px-7 py-2 rounded-md bg-blue-400 text-white max-md:text-[13px]">Get Started</button>
                            <div className="text-white hidden max-md:block ml-4">
                                <CgMenuRight className="text-3xl" onClick={() => {
                                    dispatch(toggled())
                                }} />
                            </div>
                        </div>

                    </header>
                </header>
            </header>) : (<header className="w-full h-[60px] transition-all duration-100  bg-black flex items-center justify-center">
                <header className="w-full h-[60px] bg-[black] text-white flex items-center justify-center fixed">
                    <header className="flex justify-between items-center w-[95%] h-full">
                        <div className="flex items-center">
                            <div className="flex items-center mr-"><i className="mr-2"><LiaFreeCodeCamp className="text-5xl max-md:text-4xl" /></i>Techify</div>
                            <div className="flex items-center ml-14 max-md:hidden">
                                <div className="text-white mx-5 hover:cursor-pointer text-[15px] ">Our Mission</div>
                                <div className="text-white mx-5 hover:cursor-pointer text-[15px]">Support</div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button className=" px-7 py-[7px] rounded-md bg-[orange] hover:bg-blue-400 text-white transition-all duration-500 max-md:text-[13px]">Login</button>
                            <button className="ml-5 px-7 py-2 rounded-md bg-blue-400 text-white max-md:text-[13px]">Get Started</button>
                            <div className="text-white hidden max-md:block ml-4">
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
