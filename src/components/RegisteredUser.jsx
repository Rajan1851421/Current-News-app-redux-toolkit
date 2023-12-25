import React, { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteUser, showUser } from '../features/userDetailSlice'
import { useDispatch, useSelector } from 'react-redux'
import Modal from './Modal'
import Loading from './Loading'

function RegisteredUser() {
    const [id, setId] = useState()
    const [showPopup, setShowPopup] = useState(false)



    const dispatch = useDispatch()
    // const allData = useSelector((state)=>state.app)
    const { users, loading } = useSelector((state) => state.app)


    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(showUser())
    }, []);

    if (loading) {
        return (
            <Loading/>
        )
    }



    return (
        <>
            {showPopup && <Modal id={id} showPopup={showPopup} setShowPopup={setShowPopup} />}
            <center>
                <h2 className='text-center text-2xl font-bold my-5 uppercase'><i className="fa-solid fa-users-rays text-red-900 mx-2"></i>
                    All Registered User  <span className="bg-red-700 text-white rounded-full  px-1 ml-1">{users.length}</span></h2>

            </center>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg rounded-l-md">
                <table className=" mb-2 mx-auto text-center md:w-[95%] sm:w-full w-full text-sm  rtl:text-right text-gray-500 dark:text-gray-400 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">NAME</th>
                            <th scope="col" className="px-6 py-3">Email</th>
                            <th scope="col" className="px-6 py-3">Age</th>
                           
                        </tr>
                    </thead>
                    {users && users.map((ele) => (
                        <tbody>
                            <tr key={ele.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4 capitalize">{ele.name} <br />
                                    <Link to={`/edit/${ele.id}`} type="button" 
                                    className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm md:px-5 md:py-2.5 text-center me-2 mb-2 sm:px-1 sm:mx-auto">
                                        <i className="fa-solid fa-pen-to-square mr-2"></i>Edit</Link> </td>
                                <td className="px-6 py-4">{ele.email}
                                    <br />
                                    <button type="button" onClick={() => [setId(ele.id), setShowPopup(true)]}
                                     className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm md:px-5 md:py-2.5 text-center me-2 mb-2 sm:px-1 sm:mx-auto">
                                        <i className="fa-regular fa-eye mr-2"></i>View</button></td>
                                <td className="px-6 py-4">{ele.age} <br />
                                    <button type="button" onClick={() => dispatch(deleteUser(ele.id))} 
                                    className="inline-block text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm md:px-5 md:py-2.5 text-center me-2 mb-2 sm:px-1 sm:mx-auto">
                                        <i className="fa-solid fa-trash mr-2"></i>Delete</button></td>
                            </tr>
                        </tbody>
                    ))}
                </table>

            </div>




        </>
    )
}

export default RegisteredUser
