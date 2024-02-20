import { useDispatch } from "react-redux"
import { changedToggle } from "../../global/globalState"

const LandingScreen = () => {

    const dispatch = useDispatch()
    return (
        <div className="w-full h-[150vh] bg-[gray]" onClick={() => {
            dispatch(changedToggle())
        }}>
            <div>LandingScreen</div>
        </div>
    )
}

export default LandingScreen