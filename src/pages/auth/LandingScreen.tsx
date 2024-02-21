import { useDispatch } from "react-redux"
import { changedToggle } from "../../global/globalState"
import Building from "../../components/Reusesable/Building"

const LandingScreen = () => {

    const dispatch = useDispatch()
    return (
        <div className="w-full h-auto bg-[#F5F2EB]" onClick={() => {
            dispatch(changedToggle())
        }}>
            <Building />
        </div>
    )
}

export default LandingScreen