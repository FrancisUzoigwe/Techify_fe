import { useDispatch, useSelector } from "react-redux";
import { changedToggle } from "../../global/globalState";
import { motion } from "framer-motion";

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
            x: "-100px",
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
            className={`${toggled ? "w-[70%]" : "w-[0px]"} md:hidden bg-[red] h-screen fixed`}
        >
            <div
                className="w-full flex justify-end"
                onClick={() => {
                    dispatch(changedToggle());
                }}
            >
                Cancel
            </div>
        </motion.div>
    );
};

export default SiderScreen;
