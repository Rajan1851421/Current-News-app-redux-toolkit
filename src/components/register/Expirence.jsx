
import { Link } from 'react-router-dom'

function Expirence() {
    return (
        <>
            <div className="mx-4 border border-gray-400 p-5 rounded-md my-5 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-1">
                    <p className='mx-auto  md:text-7xl lg:text-3xl sm:text-xl hover:skew-x-12 hover:duration-500 uppercase font-bold mb-5 '>
                        experience
                    </p>

                   
                    <span className='text-2xl font-bold '>INTERNSHIP</span>
                    <ul className='list-disc font-bold text-gray-800 mx-2'>
                        <li>
                            Front End developer, West Bengal
                        6 Months internship I did at React Js Technology from September 2022 to March 2023.
                        </li>
                    </ul>
                    <ul className='list-disc font-bold text-gray-800 mx-2 no-select'>
                        <li>I have completed FullStack Devloper course from <strong className='uppercase'>PW skills</strong> Jan 2023 - Dec 2023</li>
                    </ul>
                    <ul className='list-disc font-bold text-gray-800 mx-2 no-select'>
                        <li>One Year experience in  <strong className='uppercase'>Crazy Soft Coder Pvt Ltd.</strong> Aug 2023 - Oct 2024</li>
                    </ul>
                   
                    <ul className='list-disc font-bold text-gray-800 mx-2'>
                        <li>
                            <Link to='https://uttamtravels.netlify.app/' target='_blank' rel='no' >Booking Cab application and manage Admin pannel. &nbsp; <span className='text-blue-800'>https://uttamtravels.netlify.app</span> </Link>
                        </li>
                    </ul>
                    <ul className='list-disc font-bold text-gray-800 mx-2 no-select'>
                        <li>I am currentaly working with  <strong className='uppercase'>rD vision.tech</strong> <span className='bg-[#38b000] px-2 rounded-sm'>Aug 2024</span> To <span className='bg-[#c32f27] px-2 rounded-sm'>Till Now</span></li>
                    </ul>

                </div>
            </div>

        </>
    )
}

export default Expirence
