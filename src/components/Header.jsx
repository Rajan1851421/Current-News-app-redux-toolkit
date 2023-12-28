// src/App.jsx
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




function App() {

    const Allusers = useSelector((state) => state.app.users)
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
            <nav className="p-4 px-8  bg-gray-300 sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center">

                    {/* Logo */}
                    <div className="flex items-center">
                        <img className="h-10 w-auto mr-2 rounded-full" 
                        src="https://avatars.githubusercontent.com/u/105105537?v=4" alt="Logo" />
                        <span className="text-lg font-semibold"><img className='h-10 w-auto'
                            src="https://img.icons8.com/?size=80&id=0hL1XXinNxFc&format=png" alt="News" />

                        </span>
                        <span className='ml-8 font-normal p-3 text-gray-400 '>{(currentDateTime.toLocaleString())}</span>

                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-10  ">
                        <Link to="/" className="font-bold hover:text-blue-900 hover:skew-x-12  hover:border-b"><i class="fa-solid fa-house-chimney-window mx-1 text-blue-900"></i>Home</Link>
                        <Link to="/news" className="font-bold hover:text-blue-900 hover:skew-x-12 hover:border-b "><i class="fa-regular fa-newspaper mx-1 text-[#3730A3] "></i>News</Link>
                        <Link to="/resume" className="font-bold hover:text-blue-900 hover:skew-x-12 hover:border-b "><i class="fa-solid fa-pen text-[#4C1D95] mx-1 "></i>Resume</Link>
                        <Link to="/calculator" className="font-bold hover:text-blue-900 hover:skew-x-12 hover:border-b "><i class="fa-solid fa-calculator text-red-600 mx-1 "></i>Calculator</Link>

                        <Link to="/about" className="font-bold hover:text-blue-900 hover:skew-x-12 hover:border-b "><i class="fa-solid fa-address-card mx-1 text-[#b91c1c] "></i>AboutUs</Link>
                        <Link to="/register" className="inline-flex items-center font-bold hover:text-blue-900 hover:skew-x-12 hover:border-b">
                            <i className="fas fa-user mx-1 text-yellow-500"></i>
                            Register
                            <span className="bg-red-700 text-white rounded-full  px-1 ml-1">{Allusers.length}</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden focus:outline-none" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>

                </div>
            </nav>

            {/* Mobile Menu (Hidden by default) */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-800 text-white p-4 absolute top-14 left-0 w-full z-1500  sticky top-15">
                    <Link to="/" onClick={closeMobileMenu} className="block font-bold hover:text-blue-900  py-2"><i class="fa-solid fa-house-chimney-window mx-1 text-blue-900" ></i>Home</Link>
                    <Link to="/resume" onClick={closeMobileMenu} className="block font-bold hover:text-blue-900  py-2"><i class="fa-solid fa-pen text-[#4C1D95] mx-1 "></i>Resume</Link>
                    <Link to="/news" onClick={closeMobileMenu} className="block font-bold hover:text-blue-900  py-2"><i class="fa-regular fa-newspaper mx-1 text-[#3730A3] "></i>News</Link>
                    <Link to="/calculator" onClick={closeMobileMenu} className="block font-bold hover:text-blue-900  py-2"><i class="fa-solid fa-calculator text-red-600 mx-1 "></i>Calculator</Link>
                    <Link to="/about" onClick={closeMobileMenu} className="block font-bold hover:text-blue-900  py-2"><i class="fa-solid fa-address-card mx-1 text-[#b91c1c] "></i>AboutUS</Link>
                    <Link to="/register" onClick={closeMobileMenu} className="block font-bold hover:text-blue-900  py-2"><i class="fa-solid fa-user mx-1 text-yellow-500"></i>Register {Allusers.length} </Link>
                </div>
            )}
        </>
    );
}

export default App;
