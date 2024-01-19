import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomerInformation from './CustomerInformation';
import { cartRemoveProduct } from '../../features/productSlice';
import StarRating from './StarRating';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

function ShopCart() {
  const navigate = useNavigate()
  const [qty, setQty] = useState(1)
  window.scrollTo(0, 0)
  const [placeOrder, SetPlaceOrderPage] = useState(false);
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.product);




  const HnadlePlaceOrder = () => {
    SetPlaceOrderPage(true)
  };

  const handleIncreaseQty = (cartItemId) => {
    const updatedCart = cart.map((item) =>
      item.id === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
    );

  }



  return (
    <>
      <div class="container grid md:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 gap-2">
        <div>
          <div className='container my-14 mx-auto w-full bg-white grid grid-cols-1 md:grid-cols-1 md:p-8  overflow-auto'>
            {/* First Column - Mapped Items */}
            <div className=''>
              {cart.length == 0 ? (
                <div className="container mx-auto my-14 w-full ">
                  <div className='flex justify-center '><img className='h-24'
                    src="https://img.freepik.com/free-vector/black-friday-concept-illustration_114360-3667.jpg?size=626&ext=jpg&uid=R131980866&ga=GA1.1.108132751.1702923772&semt=sph   "
                  />
                  </div>
                  <p className='flex justify-center'>Your Cart is empty. Go to the home Page</p>
                  {

                  }
                </div>
              ) :
                cart && cart.map((cartItem, index) => {
                  // Calculate total quantity for the current cartItem.id
                  const totalQty = cart.filter((item) => item.id === cartItem.id).length;
                  return (
                    <div key={index} className="grid grid-cols-2 gap-0 py-1 shadow-lg p-2 my-2 w-full ">
                      <div>
                        <img src={cartItem.image} className='h-20 w-20 object-cover rounded' alt={cartItem.id} />

                        <span>Qty: {totalQty}</span>
                        <button
                          onClick={() => handleIncreaseQty(cartItem.id)}
                          className='text-sm md:text-base border border-black px-2 my-1'
                        >
                          +
                        </button>
                      </div>
                      <div>
                        <p className='text-sm md:text-base'>{`Category: ${cartItem.category}`}</p>
                        <StarRating stars={cartItem.rating.rate} count={cartItem.rating.count} />
                        <p className='text-sm md:text-base font-semibold'>{`Price: ${cartItem.price}`}</p>
                        <button onClick={() => { dispatch(cartRemoveProduct(cartItem.id)) }}
                          className='text-sm md:text-base border border-black px-2 py-1'>Remove</button>
                      </div>
                    </div>
                  );
                })}

            </div>
          </div>
        </div>

        <div className='md:fixed md:top-[144px] md:w-1/2 md:right-0 h-screen md:overflow-y-auto sm:overflow-y-hidden sm:block sm:w-full '>
          {cart.length > 0 ? (<div className=' flex flex-col bg-slate-200 py-3  items-center  shadow-xl '>
            <p className='font-bold text-lg md:text-xl'>{`Total Item : ${cart.length}`} </p> <br />
            <p className='font-bold text-lg md:text-xl'>
              {`Total Amount: INR ${cart.reduce((total, cartItem) => total + cartItem.price, 0)}`}
            </p>

            <div className='my-2'>
              <button onClick={HnadlePlaceOrder} class="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
                <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span class="relative z-20 flex items-center text-sm">
                  <svg class="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  Place Order
                </span>
              </button>
            </div>

            {placeOrder &&
            <div className='h-screen overflow-auto'>
                <CustomerInformation />
            </div>
            
            }
          </div>) : (
            <div>

            </div>
          )
          }
        </div>
      </div>


    </>
  );
}

export default ShopCart;
