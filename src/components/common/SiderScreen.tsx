import { useDispatch, useSelector } from "react-redux";
import { changedToggle } from "../../global/globalState";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5"
import { LiaFreeCodeCamp } from "react-icons/lia";
import { Link } from "react-router-dom";

const SiderScreen = ({ }) => {
    const toggled = useSelector((state: any) => state.toggle);
    const dispatch = useDispatch();

    const variants = {
        open: { width: 0 },
        closed: { width: 0, },
    };

    return (
        <motion.div
            variants={variants}
            initial={false}
            animate={!toggled ? "open" : "close"}
            className={`${toggled ? "w-[0px]" : "w-[0px]"} xl:hidden bg-white  h-screen fixed z-[9999]`}
        >
            {toggled ? <div>
                <div
                    className="w-full flex justify-end"
                >
                    <IoClose size={40} className="absolute top-2 right-2  text-3xl px-3 py-3 rounded-full bg-[#ebebeb] hover:cursor-pointer hover:scale-[1.1] transition duration-500 hover:shadow-sm hover:rotate-180" onClick={() => {
                        dispatch(changedToggle());
                    }} />
                </div>
                <div className="ml-6 mt-10">
                    <Link to="/mission">
                        <div className="my-5 ">Our Mission</div>
                    </Link>
                    <Link to="/support">
                        <div className="my-5 ">Support</div>
                    </Link>
                    <Link to="/signin">
                        <div className="my-5 ">Learn</div>
                    </Link>
                    <Link to="/signin">
                        <div className="my-5 ">Login</div>
                    </Link>
                    <Link to="register">
                        <div className="my-5 ">Get Started</div>
                    </Link>
                </div>
            </div> : null}
            <div className="">
                <div className="flex  absolute right-2  bottom-20 items-center mr-2 font-[Buda] text-[15px]"><i className="mr-[6px]"><LiaFreeCodeCamp className="text-3xl" /></i>Techify</div>
            </div>
        </motion.div>
    );
};

export default SiderScreen;
