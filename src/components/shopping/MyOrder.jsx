import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../Loading';
import { FaGooglePay } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";

function MyOrder() {
  const { uniqueAddress, cart } = useSelector((state) => state.product);
  const [viewOrder, setViewOrder] = useState(false);

  useEffect(() => {
    // Set viewOrder to true only if cart has items
    setViewOrder(cart.length > 0);
  }, [uniqueAddress, cart]);

  return (
    <div className='bg-no-repeat bg-cover h-screen bg-[url("https://img.freepik.com/premium-photo/3d-rendering-white-abstract-geometric-pattern_344726-140.jpg")]'>
      <div className='container mx-auto'>
        <div className='flex justify-center items-center h-screen'>
          {viewOrder ? (
            <div className='order w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/5 shadow-lg bg-indigo-300 px-10 py-5'>
              <div className='border border-gray-200 my-1 p-2 '>
                {cart &&
                  cart.map((cartItem) => (
                    <div>
                      <p key={cartItem.id} className="flex items-center text-lg font-semibold ">
                        <img
                          src={cartItem.image}
                          className="h-10 bg-white py-1 px-2 rounded-full border border-gray-600 mr-2"
                          alt=""
                        />
                        {cartItem.title}
                      </p>
                    </div>

                  ))}
              </div>
              <div className='p-5 shadow-lg bg-gray-200'>
                <span className='bg-gray-400 px-6 py-1 text-left'>Customer Info:</span>
                <p>{`Name: ${uniqueAddress && uniqueAddress.name}`}</p>
                <p>{`Email: ${uniqueAddress && uniqueAddress.email}`}</p>
                <p>{`Street: ${uniqueAddress.address && uniqueAddress.address.street}`}</p>
                <p>{`City: ${uniqueAddress.address && uniqueAddress.address.city}`}</p>
                <p>{`State: ${uniqueAddress.address && uniqueAddress.address.state}`}</p>
                <p>{`Pincode: ${uniqueAddress.address && uniqueAddress.address.zipcode}`}</p>
              </div>
              
              <p className='float-right font-bold mt-2 border border-gray-200 p-2 rounded-md'>


                {`Total Amount: INR ${cart.reduce((total, cartItem) => total + cartItem.price, 0)}`}</p>
            </div>
          ) : (
            <div className='text-center'>
              <img className='h-26 rounded-full my-2 mx-auto' src={'https://media4.giphy.com/media/xT9C25UNTwfZuk85WP/200.webp?cid=ecf05e47fv60qheknfu5yak1bb2nhlppb8dopy5cyxr4em6l&ep=v1_gifs_search&rid=200.webp&ct=g'} alt="" />
              <p className='text-2xl bg-red-300 p-6'>Please go to the Cart and add items</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyOrder;
