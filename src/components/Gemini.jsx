import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaArrowUp } from "react-icons/fa6";
import '../App'



function Gemini() {
    const [question, setQuestion] = useState('');
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentTime, setCurrentTime] = useState('');
    const [status, setStatus] = useState('')


    useEffect(() => {
        window.scrollTo(0, 0)
        const getCurrentTime = () => {
            const now = new Date();
            // Formatting time as HH:MM:SS
            const hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const formattedHours = String(hours % 12 || 12).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';

            // Log appropriate message based on the time
            if (hours >= 0 && hours < 12) {
                // console.log('Good Morning');
                setStatus("Good Morning")
            } else {
                // console.log('Good Evening');
                setStatus("Good Evening")
            }

            return `${formattedHours}:${minutes}:${seconds} ${ampm}`;
        };

        // Set initial time on page load
        setCurrentTime(getCurrentTime());

        // Optionally, you can update the time every second
        const timerId = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 1000);

        // Clean up the interval timer on component unmount
        return () => clearInterval(timerId);
    }, []);




    const handleSubmit = () => {
        setLoading(true);
        axios.post('https://backend-gemini.vercel.app/getResponse', { question })
            .then(response => {
                console.log(response.data.response);
                setData(response.data.response);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    };

    const handleSpeak = () => {
        if ('speechSynthesis' in window) {
            const voice = new SpeechSynthesisUtterance(data);
            window.speechSynthesis.speak(voice);
        } else {
            console.error('Text-to-speech not supported in this browser.');
        }
    };

    return (
        <>
            <div className='bg-[#1C1917] mt-[-20px] fixed top-0 left-0 w-full h-screen '>

                <div className='flex flex-col justify-center mx-2 md:mx-10 mt-1 md:mt-5 h-screen '>
                    {data ? (
                        <div className='flex flex-col justify-center items-center '>
                            {question && <p className='text-start text-white border border-white
                            rounded-md px-2 py-1 my-1
                            ' >
                                {question.slice(0, 20)}
                            </p>}
                            <div
                                className="w-1/2 bg-[#27272A] rounded-md text-white p-4
                                h-[400px] overflow-hidden overflow-y-auto overflow-x-auto
                                "
                                style={{
                                    scrollbarWidth: 'none', /* For Firefox */
                                    msOverflowStyle: 'none', /* For Internet Explorer and Edge */
                                }}
                            >
                                {data.split('\n').map((line, index) => (
                                    <div key={index} className="mb-2 typewriter">
                                        <p className="typewriter-text">{line}</p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ) : (
                        <div className='w-[90%] mx-auto text-white mt-[-120px]  ' >
                            <h1 className='font-extrabold py-4 text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '>Hello , <span className='mx-1'>{status}</span>

                            </h1>
                            <p className='text-xl font-bold mt-4' >You can find everything use this AI features </p>
                            {/* card */}
                            <div className="">

                                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 mt-4 lg:px-8">
                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
                                        <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                                            <div className="px-4 py-5 sm:p-6">
                                                <dl>
                                                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Total free
                                                        servers</dt>
                                                    <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">1.6M</dd>
                                                </dl>
                                            </div>
                                        </div>
                                        <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                                            <div className="px-4 py-5 sm:p-6">
                                                <dl>
                                                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Servers a
                                                        month</dt>
                                                    <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">19.2K
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                        <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                                            <div className="px-4 py-5 sm:p-6">
                                                <dl>
                                                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Servers a
                                                        week</dt>
                                                    <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">4.9K</dd>
                                                </dl>
                                            </div>
                                        </div>
                                        <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                                            <div className="px-4 py-5 sm:p-6">
                                                <dl>
                                                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Total users
                                                    </dt>
                                                    <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">166.7K
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                    }





                    <div className="flex items-center bg-gray-800 rounded-full p-2 shadow-lg fixed bottom-10 left-[5%] w-[90%] ">
                        <input
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            type="text"
                            placeholder="Enter a prompt here"
                            className="flex-grow bg-transparent text-white placeholder-gray-400 px-4 border-none focus:outline-none focus:border-transparent"
                        />
                        <FaArrowUp onClick={handleSubmit} className="text-gray-400 mx-2 p-2 cursor-pointer text-4xl border rounded-full " />

                    </div>

                </div>
            </div>
        </>

    );
}

export default Gemini;
