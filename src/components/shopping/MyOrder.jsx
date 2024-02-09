import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CancleOrder } from '../../features/productSlice';
import { AllCancleOrder } from '../../features/productSlice';
import Loading from '../Loading'
import { MdDeleteForever } from "react-icons/md";
import { PiArrowUDownRightBold } from "react-icons/pi";

function MyOrder() {
  const { uniqueAddress, order, loading, status } = useSelector((state) => state.product);
  const [viewOrder, setViewOrder] = useState(false);
  const dispatch = useDispatch();
  const [delStatus, setDelStatus] = useState()
  const [delModal, setDelModal] = useState(false)


  useEffect(() => {
    setDelStatus(status)
    // Set viewOrder to true only if cart has items
    setViewOrder(order.length > 0);
  }, [uniqueAddress, order]);

  const handleRemoveOrder = (id) => {
    console.log("Order Id:", id);
    dispatch(CancleOrder(id));
    setDelStatus('')
    setTimeout(() => {
      setDelStatus('')
    }, 5000)
  };

  const handleCancelAll = () => {

    // Extract all item IDs
    const itemIds = order.map(item => item.id);
    // Dispatch AllCancleOrder with all item IDs
    dispatch(AllCancleOrder(itemIds));
    setDelModal(false)
  };
  if (loading) {
    return (
      <Loading />
    )
  }
  const handleNobuttonForCalcleOrder = () => {
    setDelModal(false)
  }
  const confirmMessageButton = () => {
    setDelModal(true)
  }





  return (
    <div className='bg-no-repeat bg-cover min-h-screen bg-[url("https://img.freepik.com/premium-photo/3d-rendering-white-abstract-geometric-pattern_344726-140.jpg")]'>
      <div className='container mx-auto'>
        <div className='flex justify-center items-center min-h-screen'>
          {viewOrder ? (
            <div className='order w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/3 shadow-lg bg-gradient-to-r from-amber-200 to-yellow-500 px-5 md:px-10 py-5'>
              <div className='border border-gray-200 my-1 p-2 '>
                <span></span>
                {delStatus && <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                  <span class="font-medium">{delStatus}</span>
                </div>}
                {order &&
                  order.map((cartItem) => (
                    <div className=' ' key={cartItem.id}>
                      <p className="flex justify-between items-start text-lg font-semibold my-1 ">
                        <img
                          src={cartItem.image}
                          className="h-10 bg-white py-1 px-2 rounded-full border border-gray-600 mr-2 overflow-hidden"
                          alt=""
                        />
                        {cartItem.title}
                        <span
                          className='text-right border border-gray-300 p-1 cursor-pointer hover:bg-green-300 text-sm '
                          onClick={() => handleRemoveOrder(cartItem.id)}
                        >
                          Cancel
                        </span>
                      </p>
                    </div>
                  ))}
              </div>
              <div className='p-3 md:p-5 shadow-lg bg-gray-200'>
                <span className='bg-gray-400 px-4 py-1 text-left'>Customer Info:</span>
                <p>{`Name: ${uniqueAddress && uniqueAddress.name}`}</p>
                <p>{`Email: ${uniqueAddress && uniqueAddress.email}`}</p>
                <p>{`Street: ${uniqueAddress.address && uniqueAddress.address.street}`}</p>
                <p>{`City: ${uniqueAddress.address && uniqueAddress.address.city}`}</p>
                <p>{`State: ${uniqueAddress.address && uniqueAddress.address.state}`}</p>
                <p>{`Pincode: ${uniqueAddress.address && uniqueAddress.address.zipcode}`}</p>
              </div>
              <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='flex mt-3 md:mt-0'>
                  <span className='mr-2'>
                    <i className="fa-brands fa-google-pay text-2xl md:text-3xl shadow-lg rounded-full p-2 bg-green-300 mt-1 cursor-pointer hover:bg-green-400"></i>
                  </span>
                  <span className='mr-2'>
                    <i className="fa-brands fa-apple-pay text-2xl md:text-3xl shadow-lg rounded-full p-2 bg-green-300 mt-1 cursor-pointer hover:bg-green-400"></i>
                  </span>
                </div>
                <div className='mt-3 md:mt-0'>
                  <button
                    onClick={confirmMessageButton}
                    className='px-2 py-1 border border-x-gray-600 border-y-cyan-600 transition duration-500 ease-in-out hover:bg-green-500 md:ml-2'>
                    Cancel All
                  </button>
                </div>
                <div className='mt-3 md:mt-0'>
                  <p className='font-bold mt-2 border border-gray-200 p-2 rounded-md'>
                    {`Total Amount: INR ${order.reduce((total, cartItem) => total + cartItem.price, 0)}`}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className='text-center'>
              <img
                className='h-26 rounded-full my-2 mx-auto'
                src={'https://media4.giphy.com/media/xT9C25UNTwfZuk85WP/200.webp?cid=ecf05e47fv60qheknfu5yak1bb2nhlppb8dopy5cyxr4em6l&ep=v1_gifs_search&rid=200.webp&ct=g'}
                alt=""
              />
              <p className='text-2xl bg-red-300 p-6'>Please go to the Cart and add items</p>
            </div>
          )}
        </div>
      </div>





      {delModal &&
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-filter backdrop-blur-md ">
          <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded shadow-lg flex flex-col sm:flex-row justify-around max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            <button onClick={handleCancelAll} className="bg-red-400 py-2 px-4 mb-2 sm:mb-0 sm:mr-2 rounded flex items-center justify-center"><MdDeleteForever className="mr-1" /> Yes</button>
            <button onClick={handleNobuttonForCalcleOrder} className="bg-green-400 py-2 px-4 rounded flex items-center justify-center"><PiArrowUDownRightBold className="mr-1" /> No</button>
          </div>
        </div>


      }


    </div>
  );
}

export default MyOrder;
