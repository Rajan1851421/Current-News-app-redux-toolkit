import React from 'react'
import { useSelector } from 'react-redux'

const Modal = ({ id, showPopup, setShowPopup }) => {
    const allUsers = useSelector((state) => state.app.users)
    console.log("All user:",allUsers);
    const singleUser = allUsers.filter((ele) => ele.id == id)
    return (
        <>
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-[#B45309] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-[#B45309] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <div className="mt-2">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td className='text-left'>Name : </td>
                                                        <td className="text-md text-black-800 text-left p-3">{singleUser[0].name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='text-left'>Age: </td>
                                                        <td className="text-md text-black-800 text-left p-3">{singleUser[0].age} </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='text-left'>Email: </td>
                                                        <td className="text-md text-black-800 text-left p-3">{singleUser[0].email} </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='text-left'>Gender: </td>
                                                        <td className="text-md text-black-800 text-left p-3">{singleUser[0].gender} </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#B45309] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button"
                                    onClick={() => setShowPopup(false)}
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-[white] px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Modal
