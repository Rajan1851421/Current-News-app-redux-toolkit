import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

function Gemini() {
    const [question, setQuestion] = useState('');
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        window.scrollTo(0,0)
    },[data])

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
        <div className='flex flex-col justify-center mx-2 md:mx-10 mt-1 md:mt-5 h-screen'>
            {data && (
                <div>
                    <textarea
                        name="userInput"
                        rows="10"
                        value={data}
                        readOnly
                        className="w-full bg-gray-900 shadow-xl shadow-indigo-500/50 rounded-md text-white p-4 border-purple-400 outline-none"
                        style={{
                            scrollbarWidth: 'none', /* For Firefox */
                            msOverflowStyle: 'none', /* For Internet Explorer and Edge */
                        }}
                    ></textarea>
                    <button
                        onClick={handleSpeak}
                        className="bg-blue-500 text-white px-4 py-2 my-2 rounded-lg hover:bg-blue-600 focus:outline-none"
                    >
                        <i class="fa-solid fa-volume-high"></i>
                    </button>
                </div>
            )}

            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <textarea
                    required
                    placeholder="Type your message..."
                    className="flex-grow p-3 text-gray-900 placeholder-gray-500 border-none outline-none"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                ></textarea>
            </div>

            <div className='flex justify-center'>
                <div className="flex max-w-sm rounded-xl bg-gradient-to-tr from-pink-600 to-blue-500 p-0.5 shadow-lg my-2 justify-center">
                    <button
                        onClick={handleSubmit}
                        className="flex-1 font-bold text-xl bg-gray-800 px-6 py-3 rounded-xl"
                    >
                        {loading ? "Please Wait .." : "Submit Your Query"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Gemini;
