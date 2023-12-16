import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>

            <footer class="relative bg-blueGray-200 pt-8 pb-6">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap text-left lg:text-left">
                        <div class="w-full lg:w-6/12 px-4">
                            <h4 class="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
                            <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
                                Find us on any of these platforms, we respond 1-2 business days.
                            </h5>
                            <div class="mt-6 lg:mb-0 mb-6">
                                <button class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i class="fab fa-twitter"></i></button><button class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i class="fab fa-facebook-square"></i></button><button class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i class="fab fa-dribbble"></i></button><button class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                   
                                   <Link to='https://github.com/Rajan1851421' target='_blank' rel="noopener noreferrer"><i class="fab fa-github"></i></Link>
                                </button>
                            </div>
                        </div>
                        <div class="w-full lg:w-6/12 px-4">
                            <div class="flex flex-wrap items-top mb-6">
                                <div class="w-full lg:w-4/12 px-4 ml-auto">
                                    <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                    <ul class="list-unstyled">
                                        <li>
                                            <Link
                                                class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                to="https://graceful-pastelito-01b3d7.netlify.app/"
                                                target="_blank"
                                                rel="noopener noreferrer">Clock
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                to="https://lambent-squirrel-ba4262.netlify.app/"
                                                target="_blank"
                                                rel="noopener noreferrer">BG Changer
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                to="https://github.com/Rajan1851421"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Github
                                            </Link>

                                        </li>
                                        <li>
                                            <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/general">General</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="w-full lg:w-4/12 px-4">
                                    <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                                    <ul class="list-unstyled">
                                        <li>
                                            <Link
                                                class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                to="https://www.linkedin.com/in/rajan-prajapati-717337192/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                LinkedIn
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                to="https://cricktick.netlify.app/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                CrickTick
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                to="https://loghtmddark.netlify.app/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Light mode & Dark moed
                                            </Link>
                                        </li>
                                        <li>
                                            <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/about">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="my-6 border-blueGray-300" />
                    <div class="flex flex-wrap items-center md:justify-between justify-center">
                        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div class="text-sm text-blueGray-500 font-semibold py-1">
                                Copyright ©2021 Notus JS by
                                <Link to="https://www.creative-tim.com?ref=njs-profile" class="text-blueGray-500 hover:text-blueGray-800">Creative Tim</Link>.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
