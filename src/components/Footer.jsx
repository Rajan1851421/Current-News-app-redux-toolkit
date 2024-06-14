
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <>
            
            <footer className="absolute bg-[#34d399] pt-8 pb-6 -z-10 w-full">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                     
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl fonat-semibold text-blueGray-700">Its my Simple Portfolio</h4>
                            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                                Please Email us
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6">
                                <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-twitter"></i></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-facebook-square"></i></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-dribbble"></i></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <Link to='https://github.com/Rajan1851421' target='_blank' rel="noopener noreferrer"><i className="fab fa-github"></i></Link>
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                to="https://graceful-pastelito-01b3d7.netlify.app/"
                                                target="_blank"
                                                rel="noopener noreferrer">Clock
                                            </Link>
                                            
                                        </li>
                                        <li>
                                            <Link
                                                to="https://uttamtravels.netlify.app/"
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                target="_blank"
                                                rel="noopener noreferrer">Uttam Travels <span className='text-red-600'>(Under Construction)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                to="https://github.com/Rajan1851421"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Github
                                            </Link>

                                        </li>
                                        <li>
                                            <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/">Home</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                to="https://www.linkedin.com/in/rajan-prajapati-717337192/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                LinkedIn
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                to="https://cricktick.netlify.app/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                CrickTick
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                to="https://loghtmddark.netlify.app/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Light mode & Dark moed
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/about">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blueGray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                                Copyright @2023 Rajan Prajapati
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
