import React from 'react'
import youtube from '../assets/image/youtube.png'
import uttam from '../assets/image/uttam.png'
import enote from '../assets/image/enote.png'
import watch from '../assets/image/watch.png'
import live from '../assets/image/live.png'
import book from '../assets/image/book.png'
import gyandeep from '../assets/image/gyandeep.png'

function Project() {
    window.scrollTo(0,0)
    const projects = [
        { img: uttam, link: "https://uttamtravels.netlify.app/", title: "Uttam Travels" },
        { img: youtube, link: "https://rajantube.netlify.app/", title: "Rajan Tube" },
        { img: enote, link: "https://eenote.netlify.app/", title: "E-Note" },
        { img: watch, link: "https://graceful-pastelito-01b3d7.netlify.app/", title: "Watch Project" },
        { img: live, link: "https://liveclgstream.netlify.app/", title: "Live College Stream" },
        { img: gyandeep, link: "http://gdpmcvns.com/", title: "Gyandeep School" },
        { img: book, link: "https://bookbuyme.netlify.app/", title: "Book Buy" },
    ];

    return (
        <div className="bg-[#f0f4f8] min-h-screen py-4">
            <h2 className="text-center font-bold my-5 text-lg md:text-4xl">
                Our Projects
            </h2>

            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  px-4">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:scale-103 transition-all duration-300 overflow-hidden"
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-60 object-cover rounded-t-2xl"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                            <span className="text-white text-lg font-bold">{project.title}</span>
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Project;
