import React from 'react'

function OtherKnow() {
    return (
        <>
            <div className="flex flex-col lg:flex-row mx-7 my-5">               
                {/* Content on the left side */}
                <div className="w-full lg:w-2/3  container bg-gradient-to-r from-indigo-400 p-5 rounded-md">
                    <h2 className="text-2xl font-semibold mb-2">React Js</h2>
                    <div className="lg:hidden w-full mb-4">
                    <img
                        className="object-cover w-full h-full "
                        src="https://img.freepik.com/free-vector/atom-illustration-model-with-electrons-neutron-isolated_1284-53084.jpg?w=740&t=st=1703191684~exp=1703192284~hmac=47d75d77dd1c4325fa20f19eaf5b5fa64d5a287c5a0174adc3484a863ca3655f"
                        alt="Image"
                    />
                </div>
                    <p className="text-gray-600">
                        React is a JavaScript library for building user interfaces.
                        It was developed and is maintained by Facebook. React is often used for building single-page
                        applications where the user interacts with the page,
                        and the UI updates in response to those interactions without requiring a full page reload.
                    </p>
                    <span className='my-2 font-bold underline '>Key features of React include:</span>
                    <ul>
                        <li><span className='px-2 font-medium '>1. Component-Based Architecture:</span>
                            <span className='text-left pr-6 text-gray-600'>
                                React applications are built using components. Components are reusable,
                                self-contained pieces of code that define a part of a user interface.
                                These components can be composed together to build complex UIs.
                            </span>

                        </li>
                        <li><span className='px-2 font-medium '>2. Virtual DOM: </span>
                            <span className='text-left pr-6 text-gray-600'>
                                React uses a virtual DOM to improve performance. Instead of directly manipulating the browser's DOM, React creates a virtual representation of the DOM in memory. When changes occur, React calculates the most efficient way to update the actual DOM, minimizing the number of manipulations and improving performance.
                            </span>
                        </li>
                        <li><span className='px-2 font-medium '>3. JSX: </span>
                            <span className='text-left pr-6 text-gray-600'>
                                React introduces JSX (JavaScript XML), a syntax extension that allows you to write HTML-like code in your JavaScript files. JSX makes it more readable and easy to express UI components in a syntax that closely resembles HTML.
                            </span>
                        </li>
                        <li><span className='px-2 font-medium '>4.Declarative Syntax:</span>
                            <span className='text-left pr-6 text-gray-600'>
                                React uses a declarative approach to define how the UI should look based on the application state. Developers describe the desired outcome, and React takes care of updating the DOM to match that state.
                            </span>
                        </li>
                        <li><span className='px-2 font-medium '>5.React Hooks: </span>
                            <span className='text-left pr-6 text-gray-600'>
                                Introduced in React 16.8, hooks are functions that allow developers to use state and lifecycle features in functional components, rather than class components. This simplifies the syntax and makes it easier to manage component logic.
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Image on the right side */}
                <div className="hidden lg:block w-1/3">
                    <img
                        className="object-cover w-full h-full rounded-r-md"
                        src="https://img.freepik.com/free-vector/react-native-mobile-app-abstract-concept-illustration-cross-platform-native-mobile-app-development-framework-javascript-library-user-interface-operating-system_335657-3350.jpg?w=740&t=st=1703189047~exp=1703189647~hmac=35970e9bfb7485903180948540d5ac6e3b0607d118f74d239d443aa947f82d96"
                        alt="Image"
                    />
                </div>
            </div>

        </>
    )
}

export default OtherKnow
