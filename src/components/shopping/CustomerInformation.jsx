import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ConfirmAddress } from '../../features/productSlice'

function CustomerInformation() {

    const [address, setAddress] = useState({})
    const dispatch = useDispatch();

    const getFullAddress = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
        console.log(address);
    }

    



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(address);
        dispatch(ConfirmAddress(address));
    };


    return (
        <>
            <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Customer Information</h2>

                <form onSubmit={handleSubmit}>
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
                </form>
            </div>


        </>
    )
}

export default CustomerInformation
