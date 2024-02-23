import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion"
import { IoClose } from "react-icons/io5";
import { changedAuthToggle, logOut } from "../../global/globalState";
import { LiaFreeCodeCamp } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
const MainSideScreen = () => {
  const toggled = useSelector((state: any) => state.authToggle);
  const dispatch = useDispatch();

  const variants = {
    open: { width: 250, x: 0 },
    closed: { width: 0, x: "-200px" },
  };

  return (
    <motion.div
      variants={variants}
      initial={false}
      animate={toggled ? "open" : "close"}
      className={`${toggled ? "w-[0px]" : "w-[0px]"} md:hidden bg-white  h-screen fixed z-[9999]`}
    >
      {toggled ? <div>
        <div
          className="w-full flex"
        >
          <div className="absolute left-2 top-2 flex items-center">
            <img src="" alt="Profile" className="w-[45px] h-[45px] rounded-full bg-black " />
            <div className="ml-2 text-[13px]">Name</div>
          </div>
          <IoClose size={40} className="absolute top-2 right-2  text-3xl px-3 py-3 rounded-full bg-[#ebebeb] hover:cursor-pointer hover:scale-[1.1] transition duration-500 hover:shadow-sm hover:rotate-180" onClick={() => {
            dispatch(changedAuthToggle());
          }} />
        </div>
        <div className="ml-2  mt-16">
          <div className="relative h-[40px] flex items-center">
            <div className="absolute pl-2 "><CiSearch className="text-2xl" /></div>
            <input type="text" placeholder="Search Topics..." className="h-full rounded-full border outline-none pl-8 text-[15px]" />
          </div>
        </div>
        <div className="ml-6 mt-5">
          <div className="hover:cursor-pointer font-bold">Create Article</div>
        </div>
        <div className="ml-6 mt-5">
          <div className="hover:cursor-pointer font-bold">Articles</div>
        </div>
        <div className="ml-6 mt-5">
          <div className="hover:cursor-pointer font-bold" onClick={() => {
            dispatch(logOut())
          }}>LogOut</div>
        </div>
      </div> : null}
      <div className="">
        <div className="flex  absolute right-2  bottom-20 items-center mr-2 font-[Buda] text-[15px]"><i className="mr-[6px]"><LiaFreeCodeCamp className="text-3xl" /></i>Techify</div>
      </div>
    </motion.div>
  );
};

export default MainSideScreen