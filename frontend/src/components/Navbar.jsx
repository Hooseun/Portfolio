import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/Logo.png';

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenuAndNavigate = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 p-4 bg-transparent z-10">
      <div className="flex justify-between items-center">
        <div className="transform hover:scale-150 transition-all duration-300">
          <img className="w-[5rem] h-[3rem]" src={Logo} alt="Logo" />
        </div>
        <div className="sm:show md:show lg:hidden xl:hidden">
          <button className="text-blue-600 hover:border-b-2 hover:border-blue-800 cursor-pointer" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} size="xl" /> {/* Menu Icon */}
          </button>
        </div>
        {/* Render the full menu on screens larger than sm and md */}
        <ul className="flex sm:flex md:flex lg:flex-row xl:flex-row font-bold sm:hidden md:hidden ">
          <li className="mx-2">
            <button
              onClick={() => closeMenuAndNavigate('/')}
              className="text-blue-400 hover:border-b-2 hover:border-blue-600 cursor-pointer"
            >
              Home
            </button>
          </li>
          <li className="mx-2">
            <button
              onClick={() => closeMenuAndNavigate('/about')}
              className="text-blue-400 hover:border-b-2 hover:border-blue-600 cursor-pointer"
            >
              About
            </button>
          </li>
          <li className="mx-2">
            <button
              onClick={() => closeMenuAndNavigate('/profile')}
              className="text-blue-400 hover:border-b-2 hover:border-blue-600 cursor-pointer"
            >
              Profile
            </button>
          </li>
          <li className="mx-2">
            <button
              onClick={() => closeMenuAndNavigate('/login')}
              className="text-blue-400 hover:border-b-2 hover:border-blue-600 cursor-pointer"
            >
              Login
            </button>
          </li>
        </ul>
      </div>
      {/* Render the hamburger menu on sm and md screens */}
      {menuOpen && (
        <div className="flex flex-col items-end font-bold">
          <button
            onClick={() => closeMenuAndNavigate('/')}
            className="text-blue-600 hover:border-b-2 hover:border-blue-800 cursor-pointer my-2"
          >
            Home
          </button>
          <button
            onClick={() => closeMenuAndNavigate('/about')}
            className="text-blue-600 hover:border-b-2 hover:border-blue-800 cursor-pointer my-2"
          >
            About
          </button>
          <button
            onClick={() => closeMenuAndNavigate('/profile')}
            className="text-blue-600 hover:border-b-2 hover:border-blue-800 cursor-pointer my-2"
          >
            Profile
          </button>
          <button
            onClick={() => closeMenuAndNavigate('/login')}
            className="text-blue-600 hover:border-b-2 hover:border-blue-800 cursor-pointer my-2"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
