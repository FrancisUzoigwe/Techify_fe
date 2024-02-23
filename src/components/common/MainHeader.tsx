import { useDispatch } from "react-redux"
import { logOut } from "../../global/globalState"

const MainHeader = () => {
  const dispatch = useDispatch()
  return (
    <div className="w-full h-[40px] flex items-center justify-center">
      <div onClick={() => {
        dispatch(logOut())
      }}>MainHeader</div>
    </div>
  )
}

export default MainHeader