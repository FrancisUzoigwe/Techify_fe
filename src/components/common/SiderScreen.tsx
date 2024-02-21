import { useDispatch, useSelector } from "react-redux";
import { changedToggle } from "../../global/globalState";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5"
import { LiaFreeCodeCamp } from "react-icons/lia";

const SiderScreen = () => {
    const toggled = useSelector((state: any) => state.toggle);
    const dispatch = useDispatch();

    const motionVariant = {
        open: {
            x: 0,
            opacity: 1,
            transition: {
                ease: "easeOut",
                dalay: 0.5,
                duration: 0.5,
            },
        },
        close: {
            x: "-300px",
            opacity: 1,
            transition: {
                ease: "easeIn",
                dalay: 0.5,
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            variants={motionVariant}
            initial="close"
            animate={toggled ? "open" : "close"}
            className={`${toggled ? "w-[70%]" : "w-[0px]"} md:hidden bg-white  h-screen fixed z-[9999]`}
        >
            {toggled ? <div>
                <div
                    className="w-full flex justify-end"

                >
                    <IoClose size={40} className="absolute top-2 right-2  text-3xl px-3 py-3 rounded-full bg-[#ebebeb] hover:cursor-pointer hover:scale-[1.1] transition duration-300 hover:shadow-sm" onClick={() => {
                        dispatch(changedToggle());
                    }} />
                </div>
                <div className="ml-6">
                    <div className="flex items-center mr-2 font-[Buda] text-2xl"><i className="mr-[6px]"><LiaFreeCodeCamp className="text-5xl max-md:text-4xl" /></i>Techify</div>
                    <button className="my-5 py-2 px-5 rounded-md bg-blue-400 text-white">
                        For Support
                    </button>
                </div>
                <div className="ml-6">
                    <button className="my-5 py-2 px-5 rounded-md bg-blue-400 text-white">
                        For Learning
                    </button>
                </div>
                <div className="ml-6">
                    <button className="my-5 py-2 px-5 rounded-md bg-[orange] hover:bg-blue-400 transition duration-300 text-white">
                        Login
                    </button>
                </div>
                <div className="ml-6">
                    <button className="my-5 py-2 px-5 rounded-md bg-blue-400 text-white">
                        Get Started
                    </button>
                </div>
            </div> : null}
            <div className="">
                <div className="flex  absolute right-2  bottom-20 items-center mr-2 font-[Buda] text-[15px]"><i className="mr-[6px]"><LiaFreeCodeCamp className="text-3xl" /></i>Techify</div>
            </div>
        </motion.div>
    );
};

export default SiderScreen;
