import Navbar from "../components/Navbar"
import Background1 from "../assets/bg1.jpg"
function Home() {
    return (
        <div className="h-screen relative ">
            <div className="h-screen" style={{ backgroundImage: `url(${Background1})` }}>
                <Navbar />
                {/* Main Content */}
                <div className="sm:text-center sm:pt-[16rem] md:text-center md:pt-[16rem] lg:absolute lg:top-1/2 lg:left-1/3 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:text-center xl:absolute xl:top-1/2 xl:left-1/4 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 xl:text-center">
                    <h1 className="text-4xl font-bold text-blue-800">HELLO, WELCOME TO MY WEBSITE!</h1>
                    <h1 className="text-4xl font-bold mb-8 text-blue-500"> Learn More About me</h1>
                    <a
                        href="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="block w-[11rem] mt-7 mx-auto px-6 py-3 bg-transparent text-blue-900 border border-blue-900 rounded-full border-4 hover:text-white hover:bg-blue-900 hover:scale-95 cursor-pointer"
                    >
                        MORE
                    </a>
                </div>
                {/*End of Firstpage*/}
            </div>
        </div>
)
}

export default Home;