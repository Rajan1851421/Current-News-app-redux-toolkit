import React from 'react'

function ReduxToolkit() {
    return (
        <>
            <div className="flex flex-col lg:flex-row md:mx-7 my-3 mx-3 w-full">
                <div className="hidden lg:block w-1/3">
                    <img
                        className="object-cover w-full h-full rounded-l "
                        src="https://img.freepik.com/free-vector/cloud-computing-concept_24908-55292.jpg?size=626&ext=jpg&ga=GA1.1.108132751.1702923772&semt=ais"
                        alt="Image"
                    />
                </div>
                {/* Content on the left side */}
                <div className="w-full lg:w-2/3  container bg-gradient-to-l from-orange-400 p-5 rounded-md">
                    <h2 className="text-2xl font-semibold mb-2">Redux-toolkit</h2>
                    <div className="lg:hidden w-full mb-4">
                        <img
                            className="object-cover w-full h-full rounded-md"
                            src="https://img.freepik.com/free-vector/cloud-computing-concept_24908-55292.jpg?size=626&ext=jpg&ga=GA1.1.108132751.1702923772&semt=ais"
                            alt="Image"
                        />
                    </div>
                    <p className="text-center text-white md:text-white md:inline-block bg-black p-5">
                        npm install @reduxjs/toolkit <br />
                        npm install react-redux

                    </p>

                    <ul>
                        <li><span className='px-2 font-medium '>configureStore(): </span>
                            <span className='text-left pr-6 text-gray-600'>
                                wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.
                            </span>

                        </li>
                        <li><span className='px-2 font-medium '>createReducer():</span>
                            <span className='text-left pr-6 text-gray-600'>
                                that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the immer library to let you write simpler immutable updates with normal mutative code, like state.todos[3].completed = true.                            </span>
                        </li>
                        <li><span className='px-2 font-medium '>createAction(): </span>
                            <span className='text-left pr-6 text-gray-600'>
                                generates an action creator function for the given action type string.                            </span>
                        </li>
                        <li><span className='px-2 font-medium '>createSlice()</span>
                            <span className='text-left pr-6 text-gray-600'>
                                accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.   React uses a declarative approach to define how the UI should look based on the application state. Developers describe the desired outcome, and React takes care of updating the DOM to match that state.
                            </span>
                        </li>
                        <li><span className='px-2 font-medium '>createAsyncThunk:  </span>
                            <span className='text-left pr-6 text-gray-600'>
                                accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise                            </span>
                        </li>
                    </ul>
                </div>

                {/* Image on the right side */}

            </div>

        </>
    )
}

export default ReduxToolkit
