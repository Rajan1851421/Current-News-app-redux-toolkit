import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <div className='-z-20'>

      <div class="relative h-screen overflow-hidden bg-indigo-900">
        <img src="https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="absolute object-cover w-full h-full" />
        <div class="absolute inset-0 bg-black opacity-25">
        </div>
        <header class="absolute top-0 left-0 right-0 z-20">
          <nav class="container px-6 py-4 mx-auto md:px-12">
            <div class="items-center justify-center md:flex">
              <div class="flex items-center justify-between">
                <div class="md:hidden">
                  <button class="text-white focus:outline-none">
                    <svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      </path>
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          </nav>
        </header>
        <div class="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
          <div class="relative z-10 flex flex-col items-center w-full">
            <h1 class="mt-4 font-extrabold leading-tight text-center text-white lg:text-7xl md:text-7xl sm:text-xs">
              Web-Devlopment
            </h1>
            <Link to="#" class="block px-4 py-3 mt-10 text-lg font-bold text-white uppercase bg-gray-800 hover:bg-gray-900 ">
              Start Now
            </Link>
          </div>
        </div>
      </div>


      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
          {/* Card 1 */}
          <Link to='/' className="bg-[#fecdd3] p-6 rounded-lg shadow-md cursor-pointer hover:scale-90 hover:ease-in hover:duration-200  hover:rotate-2">
            <img className='sm:rounded-full md:rounded-sm lg:rounded-full' src="https://avatars.githubusercontent.com/u/105105537?v=4" alt="" />
            <p className="text-gray-600 text-center">
              Rajan Prajapati is a talented front-end developer
              with a passion for crafting engaging and user-friendly web experiences.
            </p>
          </Link>

          {/* Card 2 */}
          <Link to='/' className="bg-[#e879f9] p-6 rounded-lg shadow-md cursor-pointer hover:scale-90 hover:duration-200 hover:ease-in  hover:rotate-2">
            <img className='sm:rounded-full md:rounded-sm lg:rounded-full' src="https://avatars.githubusercontent.com/u/105105537?v=4" alt="" />
            <p className="text-gray-600 text-center">
              Rajan Prajapati is a talented front-end developer
              with a passion for crafting engaging and user-friendly web experiences.
            </p>
          </Link>

          {/* Card 3 */}
          <Link to='/' className="bg-[#bae6fd] p-6 rounded-lg shadow-md cursor-pointer hover:scale-90 hover:duration-200 hover:ease-in  hover:rotate-2">
            <img className='sm:rounded-full md:rounded-sm lg:rounded-full' src="https://avatars.githubusercontent.com/u/105105537?v=4" alt="" />
            <p className="text-gray-600 text-center">
              Rajan Prajapati is a talented front-end developer
              with a passion for crafting engaging and user-friendly web experiences.
            </p>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default AboutUs
