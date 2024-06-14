
import { Link } from 'react-router-dom'

function Expirence() {
    return (
        <>
            <div className="container bg-gradient-to-r from-indigo-400 p-5 rounded-md my-5">
                <div className="grid grid-cols-1 md:grid-cols-1">
                    <p className='mx-auto  md:text-7xl lg:text-7xl sm:text-4xl hover:skew-x-12 hover:duration-500 uppercase font-bold mb-5 '>
                        experience
                    </p>

                    <hr />
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
                        <li>I am currentaly working with  <strong className='uppercase'>Crazy Soft Coder Pvt Ltd.</strong> Aug 2023 - Present</li>
                    </ul>
                    <ul className='list-disc font-bold text-gray-800 mx-2'>
                        <li>
                            <Link to='https://cricktick.netlify.app/ ' target='_blank' rel='no' >View cricket related news and other also&nbsp; <span className='text-blue-800'>https://cricktick.netlify.app/</span> </Link>
                        </li>
                    </ul>

                </div>
            </div>

        </>
    )
}

export default Expirence
