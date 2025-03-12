import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../features/userDetailSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

function Create() {
    const [users, setUsers] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading } = useSelector((state) => state.app);

    window.scrollTo(0, 0);

    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(users));
        setTimeout(() => {
            navigate('/registeredUser');
        }, 3000);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen bg-white">
            {/* Image Section */}
            <div className="hidden lg:flex items-center justify-center p-4">
                <img
                    className="w-full max-w-md h-auto"
                    src="https://img.freepik.com/free-vector/forms-concept-illustration_114360-4947.jpg?w=740&t=st=1703338337~exp=1703338937~hmac=1ee7fae8d224475a6ead3dd022a1ec756a7969c33d7b9c4c31eb5c08a661c29e"
                    alt="Illustration"
                />
            </div>

            {/* Form Section */}
            <div className="flex flex-col items-center justify-center p-4">
                <form
                    className="bg-[#bfdbfe] w-full max-w-md rounded-lg shadow-lg p-6"
                    onSubmit={handleSubmit}
                >
                    <h1 className="text-3xl text-center font-bold mb-6">Register</h1>

                    <input
                        type="text"
                        className="w-full p-3 mb-4 border rounded capitalize"
                        name="name"
                        placeholder="Full Name"
                        required
                        onChange={getUserData}
                    />

                    <input
                        type="email"
                        className="w-full p-3 mb-4 border rounded"
                        name="email"
                        placeholder="Email"
                        required
                        onChange={getUserData}
                    />

                    <input
                        type="number"
                        className="w-full p-3 mb-4 border rounded"
                        name="age"
                        placeholder="Age"
                        required
                        onChange={getUserData}
                    />

                    <div className="flex items-center space-x-4 mb-4">
                        <label className="text-sm font-medium">Gender:</label>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                value="male"
                                name="gender"
                                className="mx-2"
                                onChange={getUserData}
                            />
                            <span>Male</span>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                value="female"
                                name="gender"
                                className="mx-2"
                                onChange={getUserData}
                            />
                            <span>Female</span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300"
                        disabled={loading}
                    >
                        {loading ? 'Please wait...' : 'Register'}
                    </button>

                    <Link
                        to='/registeredUser'
                        className="flex justify-center items-center mt-4 text-blue-600 hover:text-blue-800"
                    >
                        Registered User <FaArrowRight className="ml-1" />
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Create;
