import { useTypewriter, Cursor } from 'react-simple-typewriter';
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Background1 from "../assets/bg1.jpg";
import ProfileImage from "../assets/profile.png"; // Replace with your image path

function Home() {
  const navigate = useNavigate();
  const [text] = useTypewriter({
    words: ["GIAN", "CODER", "GAMER",],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000
  });

  const handleMoreClick = () => {
    navigate("/about");
  };

  
  return (
    <div className="min-h-screen relative">
      <div
        className="h-screen"
        style={{
          backgroundImage: `url(${Background1})`,
        }}
      >
        <Navbar />
        {/* Main Content */}
        <div className="relative h-full">
          <div className="bg-black bg-opacity-60 absolute inset-0" />
          <div className="flex justify-start items-center h-full relative ">
            <div className="sm:px-4 sm:w-full sm:mb-[9rem] sm:text-center md:px-4 md:w-full md:mb-[9rem] md:text-center lg:ml-[6rem] xl:ml-[6rem]">
              <div className="mb-8 relative sm:w-full">
                <div className="flex items-center rounded-[4rem] lg:w-[477px] lg:h-[477px] lg:left-[44rem] lg:bottom-[-9rem] lg:absolute lg:bg-blue-400 xl:w-[499px] xl:h-[475px] xl:left-[50rem] xl:bottom-[-7rem] xl:absolute splash animate-slideLeft " style={{
                  animation: 'moveSplash 7s linear infinite alternate',
                  transform: 'translateX(-50%)',
                }}>
                  <div className=''>
                    <div className="icon-circle icon1 text-white " style={{
                      animation: 'moveIconsCircular 20s linear infinite alternate',
                      left: '50%',
                      top: '-100px',
                      transform: 'translateX(-50%)',
                      animationDelay: '1s',
                    }}>
                      <i className="fas fa-thumbs-up fa-spin"></i>
                    </div>
                    <div className="icon-circle icon2 text-white" style={{
                      animation: 'moveIconsCircular 20s linear infinite alternate',
                      left: '50%',
                      top: '-100px',
                      transform: 'translateX(-50%)',
                      animationDelay: '5s',
                    
                    }}>
                      <i className="fas fa-heart fa-spin"></i>
                    </div>
                    <div className="icon-circle icon3 text-white" style={{
                      animation: 'moveIconsCircular 20s linear infinite alternate',
                      left: '50%',
                      top: '-100px',
                      transform: 'translateX(-50%)',
                      animationDelay: '9s',
                    }}>
                      <i className="fas fa-star fa-spin"></i>
                    </div>
                  </div>
                  <img
                    src={ProfileImage}
                    alt="Profile"
                    className="sm:mb-2 sm:w-full sm:h-[40rem] md:mb-2 md:w-full md:h-[40rem] lg:mb-[15rem] lg:w-[30rem] lg:h-[44rem] xl:mb-[20rem] xl:w-[40rem] xl:h-[54rem] object-cover rounded-full hover:scale-95"
                  />
                </div>
                <div className="xl:ml-[6rem] xl:pt-[2rem] animate-slideRight">
                  <div className="text-center">
                    <h1 className="font-custom md:mb-[-0.5rem] md:text-[2.8rem] lg:text-[3.4rem] xl:text-[4rem] font-bold text-white">HELLO! I'M <span className="text-blue-400" style={{ textShadow: '5px 2px 2px rgba(59, 130, 246, 0.5)' }}>{text}</span><Cursor /></h1>
                  </div>
                  <h1 className="font-custom md:text-[1rem] lg:text-[1.1rem] xl:text-[2rem] text-blue-400">
                    <span>UI</span><span className="text-white">/</span><span>UX</span>
                  </h1>
                  <h1 className="font-custom md:text-[1rem] lg:text-[1.1rem] xl:text-[2rem] text-white mb-8"> <span>D E</span> <span className="text-blue-400">V E</span> <span>L O</span> <span className="text-blue-400">P E</span> <span className="text-white">R</span></h1>
                  <div className="flex space-x-4 items">
                    <button
                      onClick={handleMoreClick}
                      className="block w-[11rem] px-6 py-3 bg-transparent text-blue-400 border border-blue-400 rounded-full border-4 hover:text-white hover:bg-blue-400 hover:scale-95 cursor-pointer animate-slideRight button-container"
                    >
                      ABOUT ME
                    </button>
                  </div>
                </div>
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
