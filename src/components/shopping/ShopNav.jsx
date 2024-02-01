import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ShopCart from './ShopCart';
import ShopHome from './ShopHome';
import { FaShoppingCart } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { GiShoppingBag } from "react-icons/gi";
import MyOrder from './MyOrder';
import Login from './admin/Login';
import { Link } from 'react-router-dom';

function ShopNav() {
    const { cart, uniqueAddress,order } = useSelector((state) => state.product)
    const [home, setHome] = useState(true);
    const [cartcontainer, setCartcontainer] = useState(false);
    const [orderpage, setOrderPage] = useState(false)
    const [loginPage, setLoginPage] = useState(false)

    console.log("SElected:", uniqueAddress);
    useEffect(() => {
        setHome(true)
    }, [])

    const handleMenu = (menu) => {
        setHome(menu === 'home');
        setCartcontainer(menu === 'cart');
        setOrderPage(menu == 'order')
        setLoginPage(menu == 'loginPage');
    };


    return (
        <>

            <div className='container '>
                <ul className="flex bg-[#064E3B] bg-opacity-50 p-1 fixed top-28 z-10 ">
                    <li className="mr-3">
                        <Link className="text-white font-bold hover:text-blue-800  rounded-lg flex items-center shadow-lg p-1"
                            onClick={() => handleMenu('home')} to=''>
                            <FcHome className='mx-1' />  Home
                        </Link>
                    </li>
                    <li className="mr-3">
                        <Link className="text-white font-bold hover:text-blue-800 rounded-lg relative flex items-center shadow-lg p-1 "
                            onClick={() => handleMenu('cart')} to=''>
                            <FaShoppingCart className='mx-1' /> Cart
                            <span className="absolute top-0 end-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-red-500 text-white">{cart.length}</span>
                        </Link>
                    </li>
                    <li className="mr-3">
                        {order.length === 0 ? (
                            <span className="text-gray-500 cursor-not-allowed">
                                <GiShoppingBag className='mx-1' /> Orders
                            </span>
                        ) : (
                            <Link
                                className="text-white font-bold hover:text-blue-800 rounded-lg relative flex items-center shadow-lg p-1"
                                onClick={() => handleMenu('order')}
                                to=''
                            >
                                <GiShoppingBag className='mx-1' /> Orders
                            </Link>
                        )}
                    </li>

                    <li className="mr-3">
                        <Link className="text-white font-bold hover:text-blue-800 rounded-lg relative flex items-center   " onClick={() => handleMenu('loginPage')} to=''>
                            <Link to='' className="rounded-md px-3.5 py-1  m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600  text-white">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative text-white transition duration-300 group-hover:text-white ease">Login</span>
                            </Link>
                        </Link>
                    </li>

                </ul>
            </div>

            <div className="home  ">
                {home && <ShopHome />}
            </div>

            <div className="cart ">
                {cartcontainer && <ShopCart />}
            </div>
            <div className='order'>
                {orderpage && <MyOrder />}
            </div>
            <div>
                {loginPage && <Login />}
            </div>
        </>
    );
}

export default ShopNav;
