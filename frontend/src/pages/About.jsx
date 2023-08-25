import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Background2 from '../assets/bg1.jpg';
import Img1 from '../assets/img1.jpg';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState('about');

  const handlePaginationClick = (page) => {
    setDisplayText(page);
  };

  return (
    <div className="h-screen relative">
      <div
        className="h-screen"
        style={{ backgroundImage: `url(${Background2})` }}
      >
        <Navbar />
        <div className="bg-black bg-opacity-60 absolute inset-0" />
        <div className='h-screen flex flex-col items-center relative z-[1]'>
          <div className="text-center sm:pt-[13rem] md:pt-[13rem] lg:pt-20 lg:mb-14 xl:pt-20 xl:mb-14 ">
            <h2 className="lg:text-4xl xl:text-4xl font-bold text-blue-400 sm:text-xl md:text-[2rem] ">
              Let Me Introduce Myself
            </h2>
          </div>
          <div className="flex justify-center mt-8 lg:space-x-[4rem] xl:space-x-[7rem] ">
            <div className="bg-blue-400 lg:w-[22rem] lg:h-[22rem] xl:w-[25rem] xl:h-[25rem] rounded-xl shadow-md flex justify-center items-center sm:hidden md:hidden lg:show xl:show">
              <div className="relative w-[23rem] h-[23rem] transform hover:scale-95 hover:rotate-6 transition-all duration-300">
                <img
                  src={Img1}
                  alt="Card Image"
                  className="lg:h-full xl:w-full xl:h-full object-cover rounded-xl rotate-12"
                />
              </div>
            </div>
            <div className="sm:flex sm:flex-col sm:items-center md:flex md:flex-col md:items-center">
              <div className="flex flex-row space-x-4 lg:mt-12 xl:mt-12">
                <div className="bg-blue-400 sm:w-[8rem] md:[11rem] lg:w-[15rem] xl:w-[15rem] h-[7rem]  rounded-xl shadow-md flex justify-center items-center">
                  <h3 className="text-white sm:text-sm md:text-md md:px-2 lg:text-lg xl:text-xl font-bold text-center">
                    4th year BSIT Student
                  </h3>
                </div>
                <button
                  onClick={() => navigate('/project')}
                  className="bg-blue-400 sm:w-[8rem] md:w-[11rem] lg:w-[15rem] xl:w-[15rem] rounded-xl shadow-md flex justify-center items-center hover:scale-95 cursor-pointer"
                >
                  <h3 className="text-white sm:text-sm md:text-md lg:text-lg xl:text-xl font-bold text-center">
                    Projects
                  </h3>
                </button>
              </div>
              <div>
                <div className="flex justify-center mt-4 space-x-6 ">
                  <div
                    onClick={() => handlePaginationClick('about')}
                    className={`sm:w-4 sm:h-1 md:w-8 md:h-1 lg:w-10 lg:h-2 xl:w-10 xl:h-2 bg-blue-400 border-2 border-blue-400 cursor-pointer ${displayText === 'about' ? 'scale-125' : ''
                      }`}
                  ></div>
                  <div
                    onClick={() => handlePaginationClick('hobbies')}
                    className={`sm:w-4 sm:h-1 md:w-8 md:h-1 lg:w-10 lg:h-2 xl:w-10 xl:h-2 bg-blue-400 border-2 border-blue-400 cursor-pointer ${displayText === 'hobbies' ? 'scale-125' : ''
                      }`}
                  ></div>
                  <div
                    onClick={() => handlePaginationClick('motto')}
                    className={`sm:w-4 sm:h-1 md:w-8 md:h-1 lg:w-10 lg:h-2 xl:w-10 xl:h-2 bg-blue-400 border-2 border-blue-400 cursor-pointer ${displayText === 'motto' ? 'scale-125' : ''
                      }`}
                  ></div>
                </div>
              </div>
              <div className="mt-4 text-justify  lg:w-[25rem] xl:w-[30rem]">
                {displayText === 'about' && (
                  <p className="sm:w-[14rem] sm:text-sm md:text-md lg:text-lg xl:text-lg text-white md:w-[24rem] md:ml-[3rem]">
                    Lorem ipsum dolor, sit amet consectetur asdasdasd adipisicing elit.
                    Recusandae tenetur aliquid ea at iusto sapiente!
                  </p>
                )}
                {displayText === 'hobbies' && (
                  <p className="sm:w-[14rem] sm:text-sm md:text-md lg:text-lg xl:text-lg text-white md:w-[24rem]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Excepturi odit molestiae illo, fuga libero velit a dolorum
                    voluptas eum autem?
                  </p>
                )}
                {displayText === 'motto' && (
                  <p className="sm:w-[14rem] sm:text-sm md:text-md lg:text-lg xl:text-lg text-white md:w-[24rem]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Veniam, eius dolores molestiae rem ad voluptates repellat eos
                    saepe, natus voluptate cum sequi obcaecati consequuntur.
                  </p>
                )}
              </div>
              <div className="flex flex-row space-x-4">
                <button 
                  onClick={() => navigate('/')}
                  className="sm:w-[6rem] md:w-[7rem] lg:w-[9rem] xl:w-[11rem] xl:h-[3rem] mt-7 bg-transparent border border-blue-900 rounded-full border-4 hover:text-white hover:bg-blue-900 hover:scale-95 cursor-pointer"
                >
                  <h3 className="sm:text-[13px] text-white text-center ">Back</h3>
                </button>
                <button
                  onClick={() => navigate('/profile')}
                  className="sm:w-[6rem] md:w-[7rem] lg:w-[9rem] xl:w-[11rem] mt-7 bg-blue-900 border border-blue-900 rounded-full border-4 hover:text-white hover:bg-transparent hover:scale-95 cursor-pointer"
                >
                  <h3 className="sm:text-[13px] text-white text-center">Profile</h3>
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      );
}

      export default About;
