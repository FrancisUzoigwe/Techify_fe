import { CgMenuRight } from "react-icons/cg"
import { Link } from "react-router-dom"
import { LiaFreeCodeCamp } from "react-icons/lia"
import { useDispatch } from "react-redux"
import { authToggled, logOut } from "../../global/globalState"

const MainHeader = () => {
  const dispatch = useDispatch()
  return (
    <header className="w-full h-[60px] transition-all duration-500  flex items-center justify-center z-[900] relative">
      <header className="w-full h-[60px] bg-white shadow-sm flex items-center justify-center fixed">
        <header className="flex justify-between items-center w-[95%] h-full">
          <div className="flex items-center">
            <Link to="/auth">
              <div className="flex items-center mr-2 font-[Buda] max-md:text-[15px] text-[20px]"><i className="mr-[6px]"><LiaFreeCodeCamp className="text-5xl max-md:text-4xl" /></i>Techify</div>
            </Link>
          </div>
          <div className="max-md:hidden block hover:cursor-pointer" onClick={() => {
            dispatch(logOut())
          }}>Logout</div>
          <div className="max-md:block hidden"><CgMenuRight className="text-3xl hover:cursor-pointer transition duration-300 hover:scale-[1.2]" onClick={() => {
            dispatch(authToggled())
          }} /></div>
        </header>
      </header>
    </header>
  )
}

export default MainHeader