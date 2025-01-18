import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center w-full p-4 bg-blue-800 text-white rounded-xl shadow-lg z-10">
     
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img
            src={logo}
            alt="Logo.svg"
            className="h-12 w-auto transform transition-all duration-300 hover:rotate-180"
          />
        </Link>
      </div>

    
      <div className="hidden md:flex space-x-8">
        <ul className="flex items-center space-x-6 text-lg font-semibold">
          <li>
            <Link
              to="/"
              className="hover:text-gray-400 transition-colors duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-400 transition-colors duration-300 ease-in-out"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="hover:text-gray-400 transition-colors duration-300 ease-in-out"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-gray-400 transition-colors duration-300 ease-in-out"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      
      <div className="md:hidden flex items-center">
        <button
          className="text-white p-2 rounded-md hover:bg-blue-700 transition-all"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-blue-700 rounded-md shadow-lg w-48 z-20">
          <ul className="flex flex-col p-4 text-lg font-semibold space-y-4">
            <li>
              <Link
                to="/"
                className="hover:text-gray-300 transition-colors duration-300 ease-in-out flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M9 21V7h6v14"
                  />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-300 transition-colors duration-300 ease-in-out flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8"
                  />
                </svg>
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="hover:text-gray-300 transition-colors duration-300 ease-in-out flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 17v-4h6v4m-6-4V7h6v6"
                  />
                </svg>
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-300 transition-colors duration-300 ease-in-out flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12H8m0 0h8m0 0v6m0-6V6"
                  />
                </svg>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
