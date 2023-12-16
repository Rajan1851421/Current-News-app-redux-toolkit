import React, { useEffect, useReducer } from 'react'
import { showUser } from '../features/userDetailSlice'
import { useDispatch, useSelector } from 'react-redux'

function RegisteredUser() {
    const dispatch = useDispatch()
    // const allData = useSelector((state)=>state.app)
    const { users, loading } = useSelector((state) => state.app)


    useEffect(() => {
        dispatch(showUser())

    }, []);

    if (loading) {
        return (<h2 className="text-2xl flex items-center justify-center h-screen font-bold">Loading</h2>)
    }



    return (
        <>
            <center>
                <h2 className='text-center text-2xl font-bold my-5 uppercase'><i class="fa-solid fa-users-rays text-red-900 mx-2"></i>
                All Registered User</h2>

            </center>



            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">ID </th>
                            <th scope="col" class="px-6 py-3">NAME</th>
                            <th scope="col" class="px-6 py-3">Email</th>
                            <th scope="col" class="px-6 py-3">Age</th>
                            <th scope="col" class="px-6 py-3">Action</th>
                        </tr>
                    </thead>

                    {users && users.map((ele) => (
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="px-6 py-4">{ele.id}</td>
                                <td class="px-6 py-4">{ele.name}</td>
                                <td class="px-6 py-4">{ele.email}</td>
                                <td class="px-6 py-4">{ele.age}</td>
                                <td class="px-6 py-4">
                                    <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                        <i class="fa-solid fa-pen-to-square mx-2"></i>Edit</button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>

            </div>




        </>
    )
}

export default RegisteredUser
