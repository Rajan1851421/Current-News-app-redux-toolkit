import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
    return (
        <>
            <div className="container bg-gradient-to-r from-[#F87171] my-5 p-5 rounded-md ">
                <div className="grid grid-cols-1 md:grid-cols-1">
                    <img className='mx-auto h-20 cursor-pointer  hover:skew-x-12 hover:duration-500' src='/src/image/projects.png' alt="" />
                    <hr />
                    <span className='text-2xl font-bold '>INTERNSHIP</span>
                    <ul className='list-disc font-bold text-gray-800 mx-2'>	View cricket related news and other also
                        <Link to='https://cricktick.netlify.app/ ' target='_blank' rel='no' className='text-blue-600 underline' >&nbsp;https://cricktick.netlify.app/</Link>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Projects
