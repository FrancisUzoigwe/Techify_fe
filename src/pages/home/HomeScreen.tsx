import { useDispatch } from "react-redux"
import { changedAuthToggle } from "../../global/globalState"

const HomeScreen = () => {
  const dispatch = useDispatch()
  return (
    <div className="w-full min-h-[calc(100vh-60px)] flex justify-center bg-[#F5F2EB] relative" >
      <div className="w-[95%]" onClick={() => {
        dispatch(changedAuthToggle())
      }}>HomeScreen</div>
    </div>
  )
}

export default HomeScreen