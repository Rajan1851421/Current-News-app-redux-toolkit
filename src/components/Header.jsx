import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.jpg";

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  const Allusers = useSelector((state) => state.app.users);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className="p-4 bg-[#c0c0c0] sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img className="h-10 w-auto rounded-full" src={logo} alt="Logo" />
          </Link>
          <span className="text-lg font-semibold">
            <img
              className="h-10 w-auto"
              src="https://img.icons8.com/?size=80&id=0hL1XXinNxFc&format=png"
              alt="News"
            />
          </span>
          <span className="ml-8 text-sm md:text-base text-gray-800">
            {currentDateTime.toLocaleString()}
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-5">
          <Link to="/" className="font-bold hover:text-white">Home</Link>
          <Link to="/editor" className="font-bold hover:text-white">Editor</Link>
          <Link to="/project" className="font-bold hover:text-white">Project</Link>
          <Link to="/game" className="font-bold hover:text-white">Game</Link>
          <Link to="/shopping" className="font-bold hover:text-white">Shopping</Link>
          <Link to="/register" className="font-bold hover:text-white relative">
            Register
            <span className="absolute top-0 right-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-red-500 text-white">
              {Allusers.length}
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleDrawer}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer (with Backdrop) */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-50 ${
          isDrawerOpen ? "block" : "hidden"
        }`}
        onClick={closeDrawer}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-[100]`}
      >
        <div className="p-4">
          <button
            className="text-right text-xl font-bold w-full mb-4"
            onClick={closeDrawer}
          >
            ✖
          </button>

          <Link to="/" onClick={closeDrawer} className="block py-2 border-b">Home</Link>
          <Link to="/editor" onClick={closeDrawer} className="block py-2 border-b">Editor</Link>
          <Link to="/game" onClick={closeDrawer} className="block py-2 border-b">Game</Link>
          <Link to="/project" onClick={closeDrawer} className="block py-2 border-b">Project</Link>
          <Link to="/shopping" onClick={closeDrawer} className="block py-2 border-b">Shopping</Link>
          <Link to="/register" onClick={closeDrawer} className="block py-2 border-b">
            Register ({Allusers.length})
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default App;
