import React from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4">
                    {/* Your content for the frist part */}
                    <img className='rounded-full' src="https://avatars.githubusercontent.com/u/105105537?v=4" alt="" />
                </div>
                {/* second Part */}
                <div className="p-4">
                    {/* Your content for the first part */}
                    <div className='text-center my-6'>
                        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold  text-blue-700 uppercase">Rajan Prajapati</h2>
                        <h2 className="text-sm   text-blue-700 mb-4 capitalize">Web Developer | Frontend Engineer</h2>
                    </div>

                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-2">
                            <ul className="list-disc list-inside">
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                        <div className="p-2">
                            <ul className="list-disc list-inside">
                                <li>React JS</li>
                                <li>Redux Toolkit</li>
                                <li>Tailwind CSS, Bootstrap</li>
                            </ul>
                        </div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Contact</h2>

                    </div>
                    <span className="text-red-600"><i class="fa-regular fa-envelope fa-beat"></i> </span><Link to='https://mail.google.com/mail/u/0/#inbox'
                        target='_blank'
                        rel='no'> &nbsp;rajanprajapati743@gmail.com</Link>
                    <br /> <Link to='https://www.linkedin.com/in/rajan-prajapati-717337192/'
                        target='_blank'
                        rel='linkedIN'
                        className="text-gray-600"><i class="fa-brands fa-linkedin" style={{ color: ' #125fe2' }}></i> &nbsp;https://www.linkedin.com/in/rajan-prajapati-717337192/</Link>
                    <br /><Link
                        to='https://web.whatsapp.com/'
                        target='_blank'
                        rel='no'
                        className="text-gray-600"><i class="fa-brands fa-whatsapp" style={{ color: "#34da07" }}></i> &nbsp;
                        <i class="fa-solid fa-mobile" style={{ color: "#f0059a" }}></i>+91-7460033731</Link>
                        <br />
                        <Link 
                        to='https://github.com/Rajan1851421' 
                        target='_blank'
                        rel='No github'
                        className='text-gray-600'>
                            <i class="fa-brands fa-square-github fa-shake" style={{color: "#0c0d0d"}}></i> &nbsp;Github Profile 
                            
                        </Link>
                </div>

                {/* Second Part */}

            </div>
        </div>
    );
}

export default Portfolio;
