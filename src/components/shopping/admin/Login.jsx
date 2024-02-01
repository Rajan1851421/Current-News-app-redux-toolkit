import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AdminLayout from './AdminLayout';
import { showUser } from '../../../features/userDetailSlice';

function Login() {
    const [email, setEmail] = useState('r@mail.com');
    const [matchEmail, setMatchEmail] = useState('');
    const [loggedin, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { users } = useSelector((state) => state.app);
    const newEmail = users.map((ele) => ele.email);
    const loginImage =
        'https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7862.jpg?size=626&ext=jpg&ga=GA1.1.108132751.1702923772&semt=sph'
    useEffect(() => {
        dispatch(showUser())
        window.scrollTo(0, 0)
    }, [])

    const handleLogin = (e) => {
        e.preventDefault();
        // Check if the entered email matches any existing emails
        if (newEmail.includes(email)) {
            setMatchEmail('');
            setLoggedIn(true);
        } else {
            setMatchEmail('Email does not match!');
        }
    };

    // If logged in, render the AdminLayout component
    if (loggedin) {
        return <AdminLayout />;
    }

    // If not logged in, render the login form
    return (
        <>

            {/* <!-- component --> */}
            <section className="flex flex-col md:flex-row h-screen items-center container ">

                <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                    <img src={loginImage}
                        alt="" className="w-full h-full object-cover" />
                </div>

                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                                    flex items-center justify-center">

                    <div className="w-full h-100">


                        <h1 className="text-xl md:text-2xl font-bold leading-tight ">Log in to your account</h1>
                        <p className='text-red-500'>{matchEmail}</p>

                        <form className="mt-6" onSubmit={handleLogin}>
                            <div>
                                <label className="block text-gray-700">Email Address</label>
                                <input type="email" name="" id="" placeholder="Enter Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-700">Password</label>
                                <input type="password" name="" id="" placeholder="Enter Password"
                                    minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                                     focus:bg-white focus:outline-none"
                                    readOnly />
                            </div>



                            <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                                  px-4 py-3 mt-6">Log In</button>
                        </form>

                        <hr className="my-6 border-gray-300 w-full" />



                        <p className="mt-8">Need an account? <Link to='/register' className="text-blue-500 hover:text-blue-700 font-semibold">Create an
                            account</Link></p>


                    </div>
                </div>

            </section>





        </>
    );
}

export default Login;
