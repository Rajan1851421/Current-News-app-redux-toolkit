import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pixelimageapi } from '../../../features/pixelImageSlice'
import Loading from '/src/components/Loading'


function PixelImage() {
    const dispatch = useDispatch()
    const { loading, users, error } = useSelector((state) => state.imageStore)
    const [search, setSearch] = useState('natural')

    const [errormsg, setErrorMsg] = useState(false)


    console.log(error);
    useEffect(() => {
        dispatch(pixelimageapi(search))
    }, []);
    if (loading) {
        return (
            <Loading />
        )
    }
    const handleSearchSubmit = () => {
        dispatch(pixelimageapi(search))
        console.log("Search:::", search);
    }


    return (
        <div className='container'>
            <div className='' >
                <form className='lg:w-1/2 md:w-1/2 xl:w-1/2 sm:w-[90%] mx-auto my-4 fixed left-0 right-0 top-20 ' onSubmit={handleSearchSubmit}>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            value={search}
                            type="search"
                            id="default-search"
                            onChange={(e) => { setSearch(e.target.value); }}
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg
                                        bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Mockups, Logos..."
                            required
                        />
                        <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </form>


            </div>


            <div className='mb-5'>

                <div className='mx-auto '>
                    <h2 className='text-center mt-40 text-6xl'>All  <span className='font-bold text-blue-800 text-10xl'>Pixel</span>  image Search here..</h2>
                </div>


                {users && users.photos && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20">
                        {users.photos.map(photo => (
                            <>

                                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img
                                            class="rounded-t-md object-cover w-full  max-h-100 auto"
                                            src={photo.src.original}
                                            alt={` ${photo.id}`}
                                        />
                                    </a>
                                    <div class="p-5">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {photo.photographer}
                                        </h5>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{photo.alt}</p>
                                    </div>
                                </div>




                            </>
                        ))}
                    </div>
                )}
            </div>


        </div>
    )
}

export default PixelImage
