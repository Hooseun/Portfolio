import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/Logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 p-4 bg-transparent z-10">
      <div className="flex justify-between items-center">
        <div className="transform hover:scale-150 transition-all duration-300">
          <img className="w-[10rem] h-[5rem]" src={Logo} alt="Logo" />
        </div>
        <div className="sm:show md:show lg:hidden xl:hidden">
          <button className="text-blue-600 hover:border-b-2 hover:border-blue-800 cursor-pointer" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} size="xl" /> {/* Menu Icon */}
          </button>
        </div>
        {/* Render the full menu on screens larger than sm and md */}
        <ul className="flex sm:flex md:flex lg:flex-row xl:flex-row font-bold sm:hidden md:hidden ">
          <li className="mx-2">
            <a
              activeClass="active"
              href="/"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-blue-600 hover:border-b-2 hover:border-blue-800 cursor-pointer"
            >
              Home
            </a>
          </li>
          <li className="mx-2">
            <a
              activeClass="active"
              href="/about"
              spy={true}
              smooth={true}
              duration={500}
              className="text-blue-600 hover:border-b-2 hover:border-blue-800 cursor-pointer"
            >
              About
            </a>
          </li>
          <li className="mx-2">
            <a
              activeClass="active"
              href="/profile"
              spy={true}
              smooth={true}
              duration={500}
              className="text-blue-600 hover:border-b-2 hover:border-blue-800 cursor-pointer"
            >
              Profile
            </a>
          </li>
          <li className="mx-2">
            <a
              activeClass="active"
              href="/login"
              spy={true}
              smooth={true}
              duration={500}
              className="text-blue-600 hover:border-b-2 hover:border-blue-800 cursor-pointer"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
      {/* Render the hamburger menu on sm and md screens */}
      {menuOpen && (
        <div className="flex flex-col items-end font-bold">
          <a
            activeClass="active"
            href="/"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-blue-600 hover:border-b-2 hover:border-blue-800 cursor-pointer my-2"
            onClick={() => setMenuOpen(false)} // Close menu when link is clicked
          >
            Home
          </a>
          <a
            activeClass="active"
            href="/about"
            spy={true}
            smooth={true}
            duration={500}
            className="text-blue-600 hover:border-b-2 hover:border-blue-800 cursor-pointer my-2"
            onClick={() => setMenuOpen(false)} // Close menu when link is clicked
          >
            About
          </a>
          <a
            activeClass="active"
            href="/profile"
            spy={true}
            smooth={true}
            duration={500}
            className="text-blue-600 hover:border-b-2 hover:border-blue-800 cursor-pointer my-2"
            onClick={() => setMenuOpen(false)} // Close menu when link is clicked
          >
            Profile
          </a>
          <a
            activeClass="active"
            href="/login"
            spy={true}
            smooth={true}
            duration={500}
            className="text-blue-600 hover:border-b-2 hover:border-blue-800 cursor-pointer my-2"
            onClick={() => setMenuOpen(false)} // Close menu when link is clicked
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
