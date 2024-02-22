import { Fade } from "react-awesome-reveal"
import coding from "../../assets/coding.jpg"
import coding1 from "../../assets/coding1.jpg"

const SecondSection = () => {
    return (
        <div className=" w-full min-h-[100vh] flex justify-center  items-center ">
            <div className="w-[95%] h-auto mt-16 flex justify-between max-lg:flex-col">
                <Fade direction="up" triggerOnce={true} delay={100}>
                    <div className="h-[400px]  max-lg:w-[95%]  w-[550px] max-xl:w-[450px] rounded-3xl relative" style={{ background: `url(${coding})`, backgroundPosition: "center" }}>
                        <div className="w-[200px] h-[200px] rounded-lg  absolute -bottom-16 -right-4" style={{ background: `url(${coding1})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                    </div>
                </Fade>
                <div className="h-[500px] md:mt-20 md:ml-10 max-lg:w-[95%]  w-[630px]  rounded-3xl max-md:mt-24">
                    <div className="text-4xl max-md:text-2xl  font-black leading-[50px]">Shape the Future of Tech: <span className="text-[orange]">Mentor </span>the Next Generation of <span className="text-[orange]">Techies</span></div>

                    <div className="my-3">
                        Inspire and guide the next generation of developers by becoming a mentor on TechSynergy. Share your industry knowledge, help shape careers, and contribute to the growth of aspiring coders. Make a lasting impact—join us as a mentor today.
                    </div>
                    <div>
                        <li className="my-2 text-[15px]">Passionate about tech</li>
                        <li className="my-2 text-[15px]">Available to mentor for 1hr a week</li>
                        <li className="my-2 text-[14px]">Keen on giving back</li>
                    </div>
                    <div className="mt-4">
                        <button className="bg-blue-400 hover:bg-[orange] hover:cursor-pointer transition duration-300 py-3 px-5 rounded-md text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection