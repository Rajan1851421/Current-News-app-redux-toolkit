import React, { useState } from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";

function PdfToWord() {
    const [pdf, setPdf] = useState(null);
    console.log("PDf:",pdf);

    const handlePdfChange = (e) => {
        const selectedPdf = e.target.files[0];
        setPdf(selectedPdf);

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };


    return (
        <div className='h-screen flex justify-center items-center sm:my-5 md:my-10 xl:my-15 xxl:my-20'>
            <div className='p-5  w-11/12 md:w-1/2 bg-red-400 shadow-lg rounded-md mt-[-150px]'>
                <form action="/upload" method="post" encType="multipart/form-data" className="space-y-4 flex flex-col justify-center items-center mt-3">

                    <h2 className="text-2xl font-bold mb-4">Select a new PDF File</h2>

                    <input 
                            type="file" 
                            id="pdfFile" 
                            name="pdfFile" 
                            accept=".pdf" 
                            className="border rounded-lg p-2" 
                            onChange={handlePdfChange} 
                        />

                    <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Convert
                        </span>
                    </button>

                    <button
                    onClick={handleSubmit}
                    className=" w-[90%] relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                        <span className="relative"> <FaCloudDownloadAlt className='mx-1 inline-block text-2xl' /> Download</span>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PdfToWord;
