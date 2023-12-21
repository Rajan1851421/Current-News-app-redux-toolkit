// src/App.jsx
import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { showUser } from '../features/userDetailSlice';


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
                        <img className="h-10 w-auto mr-2 rounded-full" src="https://avatars.githubusercontent.com/u/105105537?v=4" alt="Logo" />
                        <span className="text-lg font-semibold"><img className='h-10 w-auto'
                            src="                        https://p7.hiclipart.com/preview/817/265/197/headline-newspaper-nigeria-breaking-news-others-thumbnail.jpg
                        " alt="News" />                          

                        </span>
                        <span>{(currentDateTime.toLocaleString())}</span>
                        
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-10  ">
                        <Link to="/" className="font-bold hover:text-blue-900 hover:skew-x-12  hover:border-b"><i class="fa-solid fa-house-chimney-window mx-1 text-blue-900"></i>Home</Link>
                        <Link to="/general" className="font-bold hover:text-blue-900 hover:skew-x-12  hover:border-b "><i class="fa-solid fa-face-meh-blank mx-1 text-red-700"></i>General</Link>
                        <Link to="health" className="font-bold hover:text-blue-900 hover:skew-x-12 hover:border-b "><i class="fa-solid fa-briefcase-medical mx-1 text-orange-900"></i>Health</Link>
                        <Link to="/sport" className="font-bold hover:text-blue-900 hover:skew-x-12 hover:border-b "><i class="fa-solid fa-volleyball mx-1 text-[#84cc16]"></i>Sports</Link>
                        <Link to="/business" className="font-bold hover:text-blue-900 hover:skew-x-12 hover:border-b"> <i class="fa-solid fa-business-time mx-1 text-[#86198f]"></i>Business</Link>
                        <Link to="/technology" className="font-bold hover:text-blue-900 hover:skew-x-12 hover:border-b "><i class="fa-solid fa-gears mx-1 text-[#1d4ed8] "></i>Technology</Link>
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
                <div className="md:hidden bg-gray-800 text-white p-4">
                    <Link to="/" className="block font-bold hover:text-blue-900  py-2"><i class="fa-solid fa-house-chimney-window mx-1 text-blue-900" onClick={closeMobileMenu}></i>Home</Link>
                    <Link to="/general" className="block font-bold hover:text-blue-900  py-2"><i class="fa-solid fa-face-meh-blank mx-1 text-red-700"></i>General</Link>
                    <Link to="/health" className="block font-bold hover:text-blue-900  py-2"><i class="fa-solid fa-briefcase-medical mx-1 text-orange-900"></i>Health</Link>
                    <Link to="/sport" className="block font-bold hover:text-blue-900  py-2"><i class="fa-solid fa-volleyball mx-1 text-[#84cc16]"></i>Sports</Link>
                    <Link to="/business" className="block font-bold hover:text-blue-900  py-2"><i class="fa-solid fa-business-time mx-1 text-[#86198f]"></i>Business</Link>
                    <Link to="/technology" className="block font-bold hover:text-blue-900  py-2"><i class="fa-solid fa-gears mx-1 text-[#1d4ed8] "></i>Technology</Link>
                    <Link to="/about" className="block font-bold hover:text-blue-900  py-2"><i class="fa-solid fa-address-card mx-1 text-[#b91c1c] "></i>AboutUS</Link>
                    <Link to="/register" className="block font-bold hover:text-blue-900  py-2"><i class="fa-solid fa-user mx-1 text-yellow-500"></i>Register {Allusers.length} </Link>
                </div>
            )}

        </>
    );
}

export default App;
