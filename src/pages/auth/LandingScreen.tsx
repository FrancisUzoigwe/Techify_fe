import { useDispatch } from "react-redux"
import { changedToggle } from "../../global/globalState"
import Building from "../../components/Reusesable/Building"
import SecondSection from "../../components/Reusesable/SecondSection"

const LandingScreen = () => {

    const dispatch = useDispatch()
    return (
        <div className="w-full h-auto bg-[#F5F2EB]" onClick={() => {
            dispatch(changedToggle())
        }}>
            <Building />
            <SecondSection />
        </div>
    )
}

export default LandingScreen