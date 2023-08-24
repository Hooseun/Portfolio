import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Background1 from "../assets/bg1.jpg";
import ProfileImage from "../assets/profile.png"; // Replace with your image path

function Home() {
  const navigate = useNavigate();

  const handleMoreClick = () => {
    navigate("/about");
  };

  return (
    <div className="min-h-screen relative">
      <div
        className="h-screen"
        style={{
          backgroundImage: `url(${Background1})`,
          backgroundPosition: "left 1% top 10%",
        }}
      >
        <Navbar />
        {/* Main Content */}
        <div className="relative h-full">
          <div className="bg-black bg-opacity-60 absolute inset-0" />
          <div className="flex justify-start items-center h-full relative ">
            <div className="sm:px-4 sm:w-full sm:mb-[9rem] sm:text-center md:px-4 md:w-full md:mb-[9rem] md:text-center lg:ml-[6rem] xl:ml-[6rem]">
              <div className="relative sm:w-full">
                <div className="flex items-center rounded-full lg:w-[477px] lg:h-[477px] lg:left-[44rem] lg:bottom-[-9rem] lg:absolute lg:bg-blue-400 xl:w-[499px] xl:h-[475px] xl:left-[52rem] xl:bottom-[-9rem] xl:absolute xl:bg-blue-400">
                  <img src={ProfileImage} alt="Profile" className="sm:mb-2 sm:w-full sm:h-[40rem] md:mb-2 md:w-full md:h-[40rem] lg:mb-[15rem] lg:w-[30rem] lg:h-[44rem] xl:mb-[20rem] xl:w-[40rem] xl:h-[54rem] object-cover rounded-full hover:scale-95" />
                </div>
                <h1 className="md:mb-[-0.5rem] md:text-[2.8rem] lg:text-[3.4rem] xl:text-[4rem] font-bold text-blue-400 mb-4">HELLO! I'M RIMEL JOHN!</h1>
                <h1 className="md:text-[1rem] lg:text-[1.1rem] xl:text-2xl text-white">
                  Welcome to my WEBSITE. If you are interested on my background, kindly
                </h1>
                <h1 className="md:text-[1rem] lg:text-[1.1rem] xl:text-2xl text-white mb-8"> click the "MORE" button know more about me!</h1>
                <button
                  onClick={handleMoreClick}
                  className="block w-[11rem] mx-auto px-6 py-3 bg-transparent text-blue-400 border border-blue-400 rounded-full border-4 hover:text-white hover:bg-blue-400 hover:scale-95 cursor-pointer"
                >
                  MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*End of Firstpage*/}
      </div>
    </div>
  );
}

export default Home;
