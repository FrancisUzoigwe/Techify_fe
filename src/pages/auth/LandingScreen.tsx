import { useDispatch } from "react-redux"
import { changedToggle } from "../../global/globalState"
import Building from "../../components/Reusesable/Building"
import SecondSection from "../../components/Reusesable/SecondSection"
import ThirdSection from "../../components/Reusesable/ThirdSection"

const LandingScreen = () => {

    const dispatch = useDispatch()
    return (
        <div className="w-full h-auto bg-[#F5F2EB] relative" onClick={() => {
            dispatch(changedToggle())
        }}>
            <Building />
            <SecondSection />
            <ThirdSection />
        </div>
    )
}

export default LandingScreen