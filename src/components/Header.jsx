// src/App.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function App() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>      
           

            {/* Navbar */}
            <nav className="p-4 px-8  bg-gray-300">
                <div className="container mx-auto flex justify-between items-center">

                    {/* Logo */}
                    <div className="flex items-center">
                        <img className="h-10 w-auto mr-2 rounded-full" src="https://avatars.githubusercontent.com/u/105105537?v=4" alt="Logo" />
                        <span className="text-lg font-semibold"><img className='h-10 w-auto' 
                        src="                        https://p7.hiclipart.com/preview/817/265/197/headline-newspaper-nigeria-breaking-news-others-thumbnail.jpg
                        " alt="News" /></span>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-10 ">
                        <Link to="/Form" className="font-bold hover:text-blue-900  hover:border-b ">Form</Link>
                        <Link to="/" className="font-bold hover:text-blue-900  hover:border-b ">General</Link>
                        <Link to="health" className="font-bold hover:text-blue-900  hover:border-b ">Health</Link>
                        <Link to="/sport" className="font-bold hover:text-blue-900  hover:border-b ">Sports</Link>
                        <Link to="/business" className="font-bold hover:text-blue-900  hover:border-b ">Business</Link>
                        <Link to="/technology" className="font-bold hover:text-blue-900  hover:border-b ">Technology</Link>
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
                    <Link to="/Form" className="block font-bold hover:text-blue-900  py-2">Form</Link>
                    <Link to="/" className="block font-bold hover:text-blue-900  py-2">General</Link>
                    <Link to="/health" className="block font-bold hover:text-blue-900  py-2">Health</Link>
                    <Link to="/sport" className="block font-bold hover:text-blue-900  py-2">Sports</Link>
                    <Link to="/business" className="block font-bold hover:text-blue-900  py-2">Business</Link>
                    <Link to="/technology" className="block font-bold hover:text-blue-900  py-2">Technology</Link>
                </div>
            )}

        </>
    );
}

export default App;
