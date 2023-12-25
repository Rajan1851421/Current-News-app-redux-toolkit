import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Create() {
   
    const [users, setUsers] = useState({});    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    window.scrollTo(0, 0);

    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
        console.log(users);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(users));
        setTimeout(() => {
            navigate('/registeredUser');
        }, 3000);
        
    }; 
   

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-[-40px] bg-white">
                {/* First part */}
                <div className="col-span-1 md:col-span-1 p-2 ">
                    <img
                        className=" sm:display-none bg-transparent mx-auto h-[400px] mt-20"
                        src="https://img.freepik.com/free-vector/forms-concept-illustration_114360-4947.jpg?w=740&t=st=1703338337~exp=1703338937~hmac=1ee7fae8d224475a6ead3dd022a1ec756a7969c33d7b9c4c31eb5c08a661c29e"
                        alt=""
                    />
                </div>

                {/* Second part */}
                <div className="col-span-1 md:col-span-1 p-2 ">
                    {/* <!-- component --> */}
                    <form className="bg-grey-lighter min-h-screen flex flex-col mt-15  " onSubmit={handleSubmit}>
                        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                            <div className="bg-[#bfdbfe] px-10 py-8 rounded shadow-md text-black w-full">
                                <h1 className="mb-8 text-3xl text-center">Register</h1>
                                <input
                                    type="text"
                                    className="block border border-grey-light w-full p-3 rounded mb-4 capitalize"
                                    name="name"
                                    placeholder="Full Name"
                                    required
                                    onChange={getUserData} />

                                <input
                                    type="email"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    onChange={getUserData} />

                                <input
                                    type="number"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="age"
                                    placeholder="Age"
                                    required
                                    onChange={getUserData} />

                                <label> Gender :</label>

                                <input
                                    type="radio"
                                    value="male"
                                    name="gender"
                                    className="gender mx-2"
                                    onChange={getUserData}
                                />
                                Male &nbsp;
                                <input
                                    type="radio"
                                    value="female"
                                    name="gender"
                                    className="gender mx-1"
                                    onChange={getUserData}
                                />
                                Female

                                <button
                                    type="submit"
                                    className="w-full text-center mt-2 py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                                >Register</button>
                                <Link to='/registeredUser'>Registered User</Link>


                            </div>


                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Create;
