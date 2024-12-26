import React from 'react'
import youtube  from '../assets/image/youtube.png'
import uttam from '../assets/image/uttam.png'
import enote from '../assets/image/enote.png'
import watch from '../assets/image/watch.png'
import live from '../assets/image/live.png'
import book from '../assets/image/book.png'
import gyandeep from '../assets/image/gyandeep.png'

function Project() {
    return (
        <>
            <div >
                <div className="flex items-center justify-center w-full ">
                    <h2 className="text-center font-bold my-5 md:mt-8 text-lg md:text-4xl">
                        Our Projects
                    </h2>
                </div>
                <section class="overflow-hidden">
                    <div class="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-20 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto space-y-3">
                        <a href="https://uttamtravels.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={uttam}
                                    className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 w-full h-auto object-cover hover:scale-105 transform origin-bottom"
                                    alt="Project 2"
                                />
                            </a>
                            <a href="https://rajantube.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={youtube}
                                    className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 w-full h-auto object-cover hover:scale-105 transform origin-bottom"
                                    alt="Project 2"
                                />
                            </a>
                           
                            <a href="https://eenote.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={enote}
                                    className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 w-full h-auto object-cover hover:scale-105 transform origin-bottom"
                                    alt="Project 4"
                                />
                            </a>
                            <a href="https://graceful-pastelito-01b3d7.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={watch}
                                    className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 w-full h-auto object-cover hover:scale-105 transform origin-bottom"
                                    alt="Project 5"
                                />
                            </a>
                            <a href="https://liveclgstream.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={live}
                                    className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 w-full h-auto object-cover hover:scale-105 transform origin-bottom"
                                    alt="Project 6"
                                />
                            </a>
                            <a href="http://gdpmcvns.com/" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={gyandeep}
                                    className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 w-full h-auto object-cover hover:scale-105 transform origin-bottom"
                                    alt="Project 7"
                                />
                            </a>
                            <a href="https://bookbuyme.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={book}
                                    className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 w-full h-auto object-cover hover:scale-105 transform origin-bottom"
                                    alt="Project 8"
                                />
                            </a>
                        </div>



                    </div>
                </section>
            </div>

        </>
    )
}

export default Project