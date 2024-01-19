import React, { useState } from 'react';
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import DeleteProduct from './DeleteProduct'
import { Link } from 'react-router-dom';
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiLogout } from "react-icons/ci";


function AdminLayout() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobilemenu, setMobileMenu] = useState(true)

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        setMobileMenu(true)
    };
    

    const [productadd, setProductAdd] = useState(true)
    const [productedit, setProductEdit] = useState(false)
    const [productdelete, setProductDelete] = useState(false)
    const handleMenu = (menu) => {
        setMobileMenu(false)
        setProductAdd(menu === 'AddProduct');
        setProductDelete(menu === 'DeleteProduct');
        setProductEdit(menu == 'EditProduct')

    };

    return (
        <div className="flex h-screen bg-gray-300 mt-16">
            {/* Sidebar */}
            <aside className="hidden sm:flex flex-shrink-0 w-64 bg-gray-800 text-white">

                <nav className="space-y-2">
                    <Link to=" " onClick={() => handleMenu('AddProduct')}
                        className=" p-2 hover:bg-gray-700 flex items-center ml-2">
                        <FaCloudUploadAlt className='mx-1' />
                        Add Product</Link>
                    <Link to=" "
                        onClick={() => handleMenu('EditProduct')}
                        className="flex items-center p-2 hover:bg-gray-700 ml-2">
                        <FaEdit className='mx-1' />Edit Product</Link>
                    <Link to=''
                        onClick={() => handleMenu('DeleteProduct')}
                        className="flex items-center p-2 hover:bg-gray-700 ml-2">
                        <MdDelete className='mx-1' />Delete Product</Link>
                    <Link to=" " className="flex items-center p-2 hover:bg-gray-700 w-full bg-red-500 ml-2">
                        <CiLogout className='mx-1' />
                        LogOut</Link>

                </nav>
            </aside>

            {/* Mobile Menu */}
            {mobilemenu && <div className={`sm:hidden fixed inset-0 z-50 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <div
                    className="absolute inset-0 bg-gray-600 opacity-75"
                    onClick={toggleMobileMenu}
                ></div>
                <div className="fixed inset-y-0 right-0 w-64 bg-gray-800 text-white p-4">
                    {/* Mobile Menu Content */}

                    <nav className="space-y-2">
                    <Link to=" " onClick={() => handleMenu('AddProduct')}
                        className=" p-2 hover:bg-gray-700 flex items-center ml-2">
                        <FaCloudUploadAlt className='mx-1' />
                        Add Product</Link>
                    <Link to=" "
                        onClick={() => handleMenu('EditProduct')}
                        className="flex items-center p-2 hover:bg-gray-700 ml-2">
                        <FaEdit className='mx-1' />Edit Product</Link>
                    <Link to=''
                        onClick={() => handleMenu('DeleteProduct')}
                        className="flex items-center p-2 hover:bg-gray-700 ml-2">
                        <MdDelete className='mx-1' />Delete Product</Link>
                    <Link to=" " className="flex items-center p-2 hover:bg-gray-700 w-full bg-red-500 ml-2">
                        <CiLogout className='mx-1' />
                        LogOut</Link>

                </nav>
                </div>
            </div>}

            {/* Content */}
            <div className="flex-1 overflow-x-hidden overflow-y-auto">
                {/* Page content goes here */}
                <div className="p-4 shadow-md ">
                    {productadd && <AddProduct />}
                    {productedit && <UpdateProduct />}
                    {productdelete && <DeleteProduct />}
                </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
                className="sm:hidden fixed bottom-4 right-4 p-3 bg-gray-800 text-white rounded-full"
                onClick={toggleMobileMenu}
            >
                <svg
                    className="w-6 h-6"
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
    );
}

export default AdminLayout;
