import React, { useState } from "react";
import { Link } from "react-scroll";
import Navbar from "../components/Navbar";
import Background2 from "../assets/bg2.jpg";
import Img1 from "../assets/img1.jpg";

function About() {
  const [displayText, setDisplayText] = useState("about");

  const handlePaginationClick = (page) => {
    setDisplayText(page);
  };

  return (
    <div className="h-screen relative">
      <div
        className="h-screen flex flex-col items-center"
        style={{ backgroundImage: `url(${Background2})` }}
      >
        <Navbar />

        <div className="text-center sm:pt-[10rem] md:pt-[10rem] lg:pt-20 lg:mb-14 xl:pt-20 xl:mb-14">
          <h2 className="lg:text-4xl xl:text-4xl font-bold text-blue-500 sm:text-xl md:text-2xl ">
            Let Me Introduce Myself
          </h2>
        </div>
        <div className="flex justify-center mt-8 lg:space-x-[4rem] xl:space-x-[7rem] ">
          <div className="bg-blue-500 lg:w-[20rem] lg:h-[20rem] xl:w-[25rem] xl:h-[25rem] rounded-xl shadow-md flex justify-center items-center sm:hidden md:hidden lg:show xl:show">
            <div className="relative w-[23rem] h-[23rem] transform hover:scale-95 hover:rotate-6 transition-all duration-300">
              <img
                src={Img1}
                alt="Card Image"
                className="lg:h-[20rem] xl:w-full xl:h-full object-cover rounded-xl rotate-12"
              />
            </div>
          </div>
          <div className="sm:flex sm:flex-col sm:items-center md:flex md:flex-col md:items-center">
            <div className="flex flex-row space-x-8 lg:mt-12 xl:mt-12">
              <div className="bg-blue-500 sm:w-[10rem] md:[11rem] lg:w-[15rem] xl:w-[15rem] h-[7rem]  rounded-xl shadow-md flex justify-center items-center">
                <h3 className="text-white sm:text-sm md:text-md md:px-2 lg:text-lg xl:text-xl font-bold text-center">
                  4th year BSIT Student
                </h3>
              </div>
              <a
               href="/project"
                spy={true}
                smooth={true}
                duration={500}
                className="bg-blue-500 sm:w-[10rem] md:w-[11rem] lg:w-[15rem] xl:w-[15rem] rounded-xl shadow-md flex justify-center items-center hover:scale-95 cursor-pointer"
              >
                <h3 className="text-white sm:text-sm md:text-md lg:text-lg xl:text-xl font-bold text-center">Projects</h3>
              </a>
            </div>
            <div>
              <div className="flex justify-center mt-4 space-x-6 ">
                <div
                  onClick={() => handlePaginationClick("about")}
                  className={`sm:w-6 sm:h-1 md:w-8 md:h-1 lg:w-10 lg:h-2 xl:w-10 xl:h-2 bg-blue-500 border-2 border-blue-500 cursor-pointer ${
                    displayText === "about" ? "scale-125" : ""
                  }`}
                ></div>
                <div
                  onClick={() => handlePaginationClick("hobbies")}
                  className={`sm:w-6 sm:h-1 md:w-8 md:h-1 lg:w-10 lg:h-2 xl:w-10 xl:h-2 bg-blue-500 border-2 border-blue-500 cursor-pointer ${
                    displayText === "hobbies" ? "scale-125" : ""
                  }`}
                ></div>
                <div
                  onClick={() => handlePaginationClick("motto")}
                  className={`sm:w-6 sm:h-1 md:w-8 md:h-1 lg:w-10 lg:h-2 xl:w-10 xl:h-2 bg-blue-500 border-2 border-blue-500 cursor-pointer ${
                    displayText === "motto" ? "scale-125" : ""
                  }`}
                ></div>
              </div>
            </div>
            <div className="mt-4 text-justify w-[30rem]">
              {displayText === "about" && (
                <p className="sm:text-sm md:text-md lg:text-lg xl:text-lg text-white sm:w-[22rem] sm:ml-[4rem] md:w-[24rem] md:ml-[3rem]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Recusandae tenetur aliquid ea at iusto sapiente!
                </p>
              )}
              {displayText === "hobbies" && (
                <p className="sm:text-sm md:text-md lg:text-lg xl:text-lg text-white sm:w-[22rem] md:w-[24rem]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Excepturi odit molestiae illo, fuga libero velit a dolorum
                  voluptas eum autem?
                </p>
              )}
              {displayText === "motto" && (
                <p className="sm:text-sm md:text-md lg:text-lg xl:text-lg text-white sm:w-[22rem] md:w-[24rem]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veniam, eius dolores molestiae rem ad voluptates repellat eos
                  saepe, natus voluptate cum sequi obcaecati consequuntur.
                </p>
              )}
            </div>
            <div className="flex flex-row space-x-4">
              <a
                href="/"
                spy={true}
                smooth={true}
                duration={500}
                className="w-[11rem] h-[3rem] mt-7 bg-transparent border border-blue-900 rounded-full border-4 hover:text-white hover:bg-blue-900 hover:scale-95 cursor-pointer"
              >
                <h3 className="text-white text-center mt-2">Back</h3>
              </a>
              <a
               href="/profile"
                spy={true}
                smooth={true}
                duration={500}
                className="w-[11rem] h-[3rem] mt-7 bg-blue-900 border border-blue-900 rounded-full border-4 hover:text-white hover:bg-transparent hover:scale-95 cursor-pointer"
              >
                <h3 className="text-white text-center mt-2">Profile</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
