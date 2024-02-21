import React from 'react';

function PdfToWord() {
    return (
        <>
            <div className='h-screen'>
                <form action="/upload" method="post" encType="multipart/form-data" className="space-y-4 flex flex-col justify-center items-center mt-3">
                    <h2 className="text-2xl font-bold mb-4">Select a PDF File</h2>
                    <label htmlFor="pdfFile" className="block">Choose a PDF file:</label>
                    <input type="file" id="pdfFile" name="pdfFile" accept=".pdf" className="border rounded-lg p-2" />
                  
                    <button  type="submit" class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Convert
                        </span>
                    </button>
                </form>
            </div>


        </>
    );
}

export default PdfToWord;
