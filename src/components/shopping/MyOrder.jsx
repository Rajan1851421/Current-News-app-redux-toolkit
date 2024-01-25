import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../Loading';

function MyOrder() {
  const { loading, selectAddress, cart } = useSelector((state) => state.product);
  const [viewOrder, setViewOrder] = useState(false);

  useEffect(() => {
    console.log(selectAddress);
    console.log(cart.length);

    // Set viewOrder to true only if cart has items
    setViewOrder(cart.length > 0);
  }, [selectAddress, cart]);

  return (
    <div className='bg-no-repeat bg-cover h-screen bg-[url("https://img.freepik.com/premium-photo/3d-rendering-white-abstract-geometric-pattern_344726-140.jpg")]'>
      <div className='container mx-auto'>
        <div className='flex justify-center items-center h-screen'>
          {viewOrder ? (
            <div className='order w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 shadow-lg bg-indigo-300 p-5'>
              <div>
                {cart &&
                  cart.map((cartItem) => (
                    <p key={cartItem.id}>{`Item: ${cartItem.title}`}</p>
                  ))}
              </div>
              <div className='p-3 shadow-lg'>
                <p>{`Name: ${selectAddress && selectAddress.name}`}</p>
                <p>{`Email: ${selectAddress && selectAddress.email}`}</p>
                <p>{`Street: ${selectAddress.address && selectAddress.address.street}`}</p>
                <p>{`City: ${selectAddress.address && selectAddress.address.city}`}</p>
                <p>{`State: ${selectAddress.address && selectAddress.address.state}`}</p>
                <p>{`Pincode: ${selectAddress.address && selectAddress.address.zipcode}`}</p>
              </div>

              <p className='float-right font-bold'>{`Total Amount: INR ${cart.reduce((total, cartItem) => total + cartItem.price, 0)}`}</p>
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
