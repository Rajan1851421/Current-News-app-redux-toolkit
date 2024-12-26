// src/App.jsx
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from '../assets/image/logo.jpg'

// import { SiGooglegemini } from "react-icons/si";

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpration, setIsOperation] = useState(false);

  const toggleDropdownOperation = () => {
    setIsOperation(!isOpration);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const Allusers = useSelector((state) => state.app.users);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every 1000 milliseconds (1 second)

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="p-4 px-8  bg-gradient-to-r from-cyan-700 to-blue-200 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to='/'>
              <img
                className="h-10 w-auto mr-2 rounded-full"
                // src="https://avatars.githubusercontent.com/u/105105537?v=4"
                src={logo}
                alt="Logo"
              />
            </Link>
            <span className="text-lg font-semibold">
              <img
                className="h-10 w-auto"
                src="https://img.icons8.com/?size=80&id=0hL1XXinNxFc&format=png"
                alt="News"
              />
            </span>
            {/* github */}
            <span className="ml-8 font-normal p-3 text-gray-400 ">
              {currentDateTime.toLocaleString()}
            </span>
            <Link
              to="https://github.com/Rajan1851421"
              target="_blank"
              className="font-bold hover:text-blue-900  "
            >
              <i className="fa-brands fa-github mx-1 text-lg text-white "></i>
            </Link>
            {/* twitter */}
            <Link
              to="https://x.com/Rajan1851421"
              target="_blank"
              className="font-bold hover:text-blue-900  "
            >
              <i class="fa-brands fa-square-x-twitter mx-4 text-white text-lg"></i>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-5 relative">
            <Link
              to="/"
              className="font-bold hover:text-white  hover:border-b"
            >
              <i className="fa-solid fa-house-chimney-window mx-1 text-blue-900 tracking-normal  "></i>
              Home
            </Link>
            <Link
              to="/gemini"
              className="font-bold hover:text-white hover:border-b "
            >
              <i class="fa-regular fa-star  text-[yellow] mx-1 "></i>
              Gemini
            </Link>

            <Link
              to="/editor"
              className="font-bold hover:text-white  hover:border-b"
            >
              <i className="fa-solid fa-text-height mx-1 text-green-600"></i>
              Text Editor
            </Link>

            <Link to="/game" className="font-bold hover:text-white hover:border-b ">
                            Game
                        </Link>

            <Link
              to="#"
              onClick={toggleDropdown}
              className="font-bold hover:border-b relative"
            >
              <i className="fa-solid fa-calculator text-red-600 mx-1 "></i>
              Calulator <i className="fa-solid fa-angle-down mx-1 "></i>
              {isDropdownOpen && (
                <div className="bg-gray-600 absolute mt-3 p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <Link
                    to="/calculator"
                    className="font-bold hover:text-white  hover:border-b "
                  >
                    <i className="fa-solid fa-plus-minus mx-1 text-white"></i>
                    Calculator
                  </Link>{" "}
                  <br />
                  <Link
                    to="/agecalculator"
                    className="font-bold hover:text-white  hover:border-b "
                  >
                    <i className="fa-solid fa-person-arrow-up-from-line mx-1 text-white"></i>
                    Age Calculator
                  </Link>
                </div>
              )}
            </Link>

            <Link
              to="/project"
              className="font-bold hover:text-white hover:border-b "
            >             
              <i class="fa-brands fa-r-project mx-1 text-[#b91c1c]  "></i>
              Projects
            </Link>

            <Link
              to="/shopping"
              className="font-bold hover:text-white hover:border-b "
            >
              <i className="fa-solid fa-sack-dollar mx-1 text-blue-600"></i>
              Shopping
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center font-bold hover:text-white hover:border-b"
            >
              <i className="fas fa-user mx-1 text-yellow-500"></i>
              Register
              <span className="absolute top-0 end-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-red-500 text-white">
                {Allusers.length}
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Hidden by default) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-400 text-white p-4 absolute top-14 left-0 w-full z-1500  sticky top-15">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="border-b border-gray-600 block font-bold hover:text-blue-900  py-2"
          >
            <i className="fa-solid fa-house-chimney-window mx-1 text-blue-900"></i>
            Home
          </Link>
          <Link
            to="/editor"
            onClick={closeMobileMenu}
            className="border-b border-gray-600 block font-bold hover:text-blue-900 py-2 hover:border-b"
          >
            <i className="fa-solid fa-text-height mx-1 text-green-600"></i>Text
            Editor
          </Link>

          <Link
            to="/gemini"
            onClick={closeMobileMenu}
            className="border-b border-gray-600 block font-bold hover:text-blue-900 my-1  py-2"
          >
            <i class="fa-regular fa-star  text-[yellow] mx-1 "></i>Gemini
          </Link>
          <Link to="/game" onClick={closeMobileMenu} className="border-b border-gray-600 block font-bold hover:text-blue-900 my-1  py-2">Game</Link>
          <Link
            to="#"
            onClick={toggleDropdown}
            className="font-bold hover:text-blue-900 hover:border-b relative border-b border-gray-600 block py-2"
          >
            <i className="fa-solid fa-calculator text-red-600 mx-1 "></i>
            Calulator<i className="fa-solid fa-angle-down mx-1 "></i>
            {isDropdownOpen && (
              <div className="absolute p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 bg-gray-500">
                <Link
                  onClick={closeMobileMenu}
                  to="/calculator"
                  className="font-bold hover:text-blue-900  hover:border-b "
                >
                  <i className="fa-solid fa-calculator text-red-600 mx-1 my-2 "></i>
                  Calculator
                </Link>{" "}
                <br />
                <Link
                  onClick={closeMobileMenu}
                  to="/agecalculator"
                  className="font-bold hover:text-blue-900  hover:border-b "
                >
                  <i className="fa-solid fa-person-half-dress text-red-600 mx-1"></i>
                  Age Calculator
                </Link>
              </div>
            )}
          </Link>
          <Link
            to="/project"
            onClick={closeMobileMenu}
            className="border-b border-gray-600 block font-bold hover:text-blue-900  py-2"
          >
            <i className="fa-solid fa-address-card mx-1 text-[#b91c1c] "></i>
            Projects
          </Link>
          <Link
            to="/shopping"
            onClick={closeMobileMenu}
            className="border-b border-gray-600 block font-bold hover:text-blue-900  py-2"
          >
            <i className="fa-solid fa-sack-dollar mx-1 text-blue-600"></i>
            Shopping
          </Link>
          <Link
            to="/register"
            onClick={closeMobileMenu}
            className="border-b border-gray-600 block font-bold hover:text-blue-900  py-2"
          >
            <i className="fa-solid fa-user mx-1 text-yellow-500"></i>Register{" "}
            {Allusers.length}{" "}
          </Link>
        </div>
      )}
    </>
  );
}

export default App;
