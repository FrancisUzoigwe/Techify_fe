
const Building = () => {
    return (
        <div className="w-full  justify-center items-center flex min-h-[calc(100vh-60px)]">
            <div className="w-[95%] h-full flex justify-between items-end max-lg:flex-col max-lg:items-center">
                <div className="w-[550px]  max-lg:mt-5  h-[80%] max-lg:w-[80%] max-lg:text-center">
                    <div className="text-5xl max-lg:mt-5 font-black max-md:text-[30px] leading-[60px] max-md:leading-[45px]"><span className="text-[orange] ">Building </span> Tomorrow's  Tech, Today's <span className="text-[orange]">Talent</span></div>
                    <div className="text-left mt-3 max-lg:text-center">
                        TechSynergy is a social edtech targeted at bridging the gap between early tech talents and businesses. Businesses get an option to invite early tech talents to work on projects based on their business problems.
                    </div>
                    <div className="text-left mt-3 max-lg:text-center">
                        Throughout the project journey, businesses get a chance to check the talent’s skills.
                    </div>
                    <div className="w-full h-auto py-2 mt-2 flex justify-start items-center max-lg:justify-center">
                        <div className="flex items-center">
                            <button className="mr-5 px-4 py-2 rounded-md bg-[orange] hover:bg-blue-400 transition duration-300 text-white ">For Support</button>
                            <button className="rounded-md px-4 py-2 bg-blue-400 text-white">For Learning</button>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] bg-[red] max-lg:w-[85%] border max-lg:my-3 h-auto max-lg:h-full max-lg:mt-6 ml-4">
                    <div className="h-[400px] bg-[green]  max-lg:h-[450px] w-full">Hello</div>
                </div>
            </div>
        </div>
    )
}

export default Building