import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaDownload } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Background1 from "../assets/bg1.jpg";

function Profile() {
    const generateStars = (rating) => {
        const totalStars = 5;
        const filledStars = Math.min(rating, totalStars);
        const emptyStars = totalStars - filledStars;
        const stars = [];

        for (let i = 0; i < filledStars; i++) {
            stars.push(<i key={i} className="fas fa-star text-yellow-500"></i>);
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<i key={i + filledStars} className="far fa-star text-yellow-500"></i>);
        }

        return stars;
    };

    const handleDownloadCV = () => {
        const filePath = '/pdf/CV.pdf';
        const link = document.createElement('a');
        link.href = filePath;
        link.download = 'CV.pdf';
        link.click();
    };

    const handleContactClick = () => {
        // Navigate to the contact page
        // Replace '/contact' with the actual path of your contact page
        navigate("/about");
    };

    return (
        <div className="min-h-screen relative">
            <div
                className="min-h-screen"
                style={{ backgroundImage: `url(${Background1})` }}
            >
                <Navbar />
                <div className="bg-black bg-opacity-60 absolute inset-0" />
                <div className='w-full flex flex-col items-center relative z-[1] overflow-hidden'>
                    <h2 className="text-4xl font-bold text-blue-500 text-center pt-20 md:pt-10">Profile</h2>
                    <div className="grid sm:gap-x-0 sm:gap-y-4 md:gap-y-4 lg:gap-4 xl:gap-4 mt-8 sm:grid-cols-2 sm:px-4  md:grid-cols-2  lg:grid-cols-3 lg:px-8 xl:grid-cols-3 xl:px-10 ">
                        {/* Skills Card */}
                        <div className="bg-blue-500 sm:h-[8rem] sm:ml-[1rem] md:h-[10rem] md:w-[20rem] md:ml-[2rem] lg:h-[12rem] xl:h-[14rem]  rounded-xl shadow-md flex flex-col justify-center animate-slideLeft">
                            <h3 className="text-center text-white sm:text-sm md:text-md lg:text-2xl xl:text-2xl font-bold mb-4">Programming Language</h3>
                            <ul className="text-white sm:text-sm sm:px-4 md:text-md md:px-4 lg:text-xl lg:px-8 xl:text-xl xl:px-8">
                                <li>C++ {generateStars(3)}</li>
                                <li>C {generateStars(2)}</li>
                                <li>ReactJS {generateStars(5)}</li>
                                <li>Python {generateStars(3)}</li>
                            </ul>
                        </div>

                        {/* Experience Card */}
                        <div className="bg-blue-500 sm:h-[8rem]  sm:ml-[1rem] md:h-[10rem] md:w-[20rem] md:ml-[2rem] lg:h-[12rem] xl:h-[14rem]   rounded-xl shadow-md flex flex-col justify-center animate-slideLeft">
                            <h3 className="text-center text-white sm:text-sm md:text-md lg:text-2xl xl:text-2xl font-bold mb-4">Experience</h3>
                        </div>

                        {/* Objective Card */}
                        <div className="bg-blue-500 sm:h-[10rem] sm:ml-[1rem] md:h-[12rem] md:w-[20rem] md:ml-[2rem] lg:h-[12rem] xl:h-[14rem]   rounded-xl shadow-md flex flex-col justify-center animate-slideLeft">
                            <div className="text-white text-center">
                                <h3 className="text-center text-white sm:text-sm md:text-md lg:text-2xl xl:text-2xl font-bold mb-4">Objective</h3>
                                <p className="text-sm px-4 text-justify">
                                    To seek a role where I can fully dedicate myself to delivering optimal performance in all tasks.
                                </p>
                            </div>
                        </div>


                        {/* Education Card */}
                        <div className="bg-blue-500 sm:h-[10rem] sm:ml-[1rem] md:h-[12rem] md:w-[20rem] md:ml-[2rem] lg:h-[12rem] xl:h-[14rem]  rounded-xl shadow-md flex flex-col justify-center animate-slideRight">
                            <h3 className="text-center text-white sm:text-sm md:text-md lg:text-2xl xl:text-2xl xl:mb-0 xl:mt-5 font-bold mb-4">Education</h3>
                            <div className="sm:text-[10px] sm:px-4 md:text-[12px] md:px-4 lg:text-[12px] lg:px-4 xl:text-[14px] xl:p-4 text-white text-justify">
                                <p >Junior High School (2014-2018)</p>
                                <p>- TAYUG NATIONAL HIGH SCHOOL</p>
                                <p>Senior High School (2018-2020)</p>
                                <p>- TAYUG NATIONAL HIGH SCHOOL</p>
                                <p>College (2020-Present)</p>
                                <p>- TEXHNOLOGICAL UNIVERSITY OF THE PHILIPPINES</p>
                            </div>
                        </div>

                        {/* Contact Info Card */}
                        <div className="bg-blue-500 sm:h-[8rem] sm:ml-[1rem] md:h-[10rem] md:w-[20rem] md:ml-[2rem] lg:h-[12rem] xl:h-[14rem]   rounded-xl shadow-md flex flex-col justify-center animate-slideRight">
                            <h3 className="text-center text-white sm:text-sm md:text-md lg:text-2xl xl:text-2xl xl:mb-0 xl:mt-5 font-bold mb-2">Contact Info</h3>
                            <div className="sm:text-[10px] sm:px-4 md:text-[12px] md:px-4 lg:text-[12px] lg:px-4 xl:text-[14px] xl:p-4 text-white text-justify space-y-1">
                                <div className="flex items-center">
                                    <FaEnvelope className="mr-2" />
                                    <span>email@example.com</span>
                                </div>
                                <div className="flex items-center">
                                    <FaLinkedin className="mr-2" />
                                    <span>linkedin.com/in/username</span>
                                </div>
                                <div className="flex items-center">
                                    <FaGithub className="mr-2" />
                                    <span>github.com/username</span>
                                </div>
                                <div className="flex items-center">
                                    <FaMapMarkerAlt className="mr-2" />
                                    <span>123 Street, City, Country</span>
                                </div>
                                <div className="flex items-center">
                                    <FaPhone className="mr-2" />
                                    <span>+123 456 7890</span>
                                </div>
                            </div>
                        </div>

                        {/* Others Card */}
                        <div className="bg-blue-500 sm:h-[8rem] sm:ml-[1rem] md:h-[10rem] md:w-[20rem] md:ml-[2rem] lg:h-[12rem] xl:h-[14rem]  rounded-xl shadow-md flex flex-col justify-center animate-slideRight">
                            <h3 className="text-center text-white sm:text-sm md:text-md lg:text-2xl xl:text-2xl xl:mb-0 xl:mt-5 font-bold mb-4">PERSONAL INFO</h3>
                        </div>
                    </div>
                    <div className='flex sm:mt-6 bottom-2 space-x-6 '>
                        <button
                            onClick={handleDownloadCV}
                            className="flex border border-2 border-blue-500 bg-transparent text-white text-xl font-bold px-6 py-3 mt-4 rounded-full shadow-md hover:bg-blue-600 hover:scale-95">
                            <FaDownload className="mt-1 mr-2" />
                            <p className='text-lg'>Download CV</p>
                        </button>
                        <button
                            onClick={handleContactClick}
                            className="flex border border-2 border-blue-500 bg-blue-600 text-white text-xl font-bold px-6 py-3 mt-4 rounded-full shadow-md hover:bg-transparent hover:scale-95"
                        >
                            CONTACT ME
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;