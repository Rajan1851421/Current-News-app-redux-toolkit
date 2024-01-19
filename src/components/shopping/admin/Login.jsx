import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AdminLayout from './AdminLayout';
import { showUser } from '../../../features/userDetailSlice';

function Login() {
    const [email, setEmail] = useState('');
    const [matchEmail, setMatchEmail] = useState('');
    const [loggedin, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { users } = useSelector((state) => state.app);
    const newEmail = users.map((ele) => ele.email);

    useEffect(() => {
        dispatch(showUser())
        window.scrollTo(0,80)
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
            <section className="flex flex-col md:flex-row h-screen items-center mt-16 ">

                <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                    <img src="https://images.unsplash.com/photo-1705654731763-4fc956cbcb3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D"
                     alt="" className="w-full h-full object-cover" />
                </div>

                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

                    <div className="w-full h-100">


                        <h1 className="text-xl md:text-2xl font-bold leading-tight ">Log in to your account</h1>

                        <form className="mt-6" onSubmit={handleLogin}>
                            <div>
                                <label className="block text-gray-700">Email Address</label>
                                <input type="email" name="" id="" placeholder="Enter Email Address"
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
