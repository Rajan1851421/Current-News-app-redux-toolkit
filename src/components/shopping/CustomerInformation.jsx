import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConfirmAddress, FetchAddress, RemoveAddress } from '../../features/productSlice';
import axios from 'axios';

function CustomerInformation() {
    const [curAddress, setCurAddress] = useState({});
    const dispatch = useDispatch();
    const [showAddressForm, setShowAddressForm] = useState(false);

    const { loading, error, address } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(FetchAddress());
    }, [dispatch, address]);

    const getFullAddress = (e) => {
        setCurAddress({ ...curAddress, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(ConfirmAddress(curAddress));
        setShowAddressForm(false);
    };

    const handleNewAddress = () => {
        setShowAddressForm(true);
    };

    return (
        <>
            <div className="max-w-full mx-auto bg-white py-8 px-3 rounded shadow-md md:max-w-[75%] z-50">
                
                <h2 className="text-2xl font-semibold mb-6">Customer Information</h2>
                <table className="w-full table-fixed hidden md:table">
                    <thead className="md:table-header-group">
                        <tr className='border'>
                            <th className=" border bg-gray-600 text-white text-semibold w-1/4">Name</th>
                            <th className=" border bg-gray-600 text-white text-semibold w-1/4">Address</th>
                            <th className=" border bg-gray-600 text-white text-semibold w-1/4">Mobile</th>
                            <th className=" border bg-gray-600 text-white text-semibold w-1/4">Choose</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(address) && address.map((ele) => (
                                <tr key={ele.id} className="border md:table-row">
                                    <td className="border px-4 py-2 md:table-cell">{ele.name}</td>
                                    <td className="border px-4 py-2 md:table-cell">{ele.address}</td>
                                    <td className="border px-4 py-2 md:table-cell">{ele.mobile}</td>
                                    <td className="border  py-2 md:table-cell mx-auto ">
                                        <span className=' bg-yellow-500 px-3 py-2'>
                                            Select
                                        </span>
                                        <span className=' bg-red-500 px-3 py-2 mx-1'>
                                            Remove
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>


                {/* moble view */}
                <div class=" md:hidden lg:hidden xl:hidden  max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
                    {
                        Array.isArray(address) && address.map((ele) => (
                            <div class="grid grid-cols-2 gap-4 p-2 border border-gray-200">
                                <div>
                                    <h2 class="text-2xl font-semibold mb-2">{ele.name}</h2>
                                    <p class="text-gray-600">{ele.address}</p>
                                    <p class="text-gray-600">{ele.mobile}</p>
                                </div>

                                <div className='text-center'>
                                    <p className='bg-yellow-500 px-3 py-2 mx-auto text-center'>Select</p>
                                    <p onClick={dispatch(RemoveAddress(ele.id))} className='cursor-pointer bg-red-500 px-3 py-2 mx-auto text-center my-1'>Remove</p>
                                </div>
                            </div>

                        ))
                    }
                </div>



                <div className='flex justify-center mt-3 '>
                    <button onClick={handleNewAddress} className='px-4 py-2 bg-blue-700 cursor-pointer'>
                        Add New Address
                    </button>
                </div>
                {showAddressForm && <form onSubmit={handleSubmit} className="md:w-[75%] mx-auto mt-4">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="Enter your name"
                            onChange={getFullAddress}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-600 font-medium mb-2">Address</label>
                        <textarea
                            id="address"
                            name="address"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="Enter your address"
                            rows="3"
                            onChange={getFullAddress}
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="mobile" className="block text-gray-600 font-medium mb-2">Mobile</label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="Enter your mobile number"
                            onChange={getFullAddress}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="pincode" className="block text-gray-600 font-medium mb-2">Pincode</label>
                        <input
                            type="text"
                            id="pincode"
                            name="pincode"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="Enter your pincode"
                            onChange={getFullAddress}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="state" className="block text-gray-600 font-medium mb-2">State</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="Enter your state"
                            onChange={getFullAddress}
                        />
                    </div>


                    <button type='submit' class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                        <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                        <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                        <span class="relative text-white">Confirm Address</span>
                    </button>
                </form>}
            </div>


        </>
    )
}

export default CustomerInformation
