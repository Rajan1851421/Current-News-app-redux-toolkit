import React from 'react'

function Expirence() {
    return (
        <>
            <div className="container bg-gradient-to-r from-indigo-400 p-5 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-1">
                    <img className='mx-auto cursor-pointer hover:sc hover:skew-x-12 hover:duration-500' src='/src/image/expirence.png' alt="" />
                    <hr />
                    <span className='text-2xl font-bold '>INTERNSHIP</span>
                    <ul className='list-disc font-bold text-gray-800'>Front End developer, West Bengal
                        6 Months internship I did at React Js Technology from September 2022 to March 2023.
                    </ul>
                    <ul className=' font-bold text-gray-800 no-select'>
                        <li>I have completed FullStack Devloper course from <strong className='uppercase'>PW skills</strong> Apr 2023 - Oct 2023</li>
                    </ul>

                </div>
            </div>

        </>
    )
}

export default Expirence
