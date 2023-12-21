import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showNews } from '../features/userDetailSlice';


function General() {

    const dispatch = useDispatch()

    const { users, loading } = useSelector((state) => state.app)

    useEffect(() => {
        window.scrollTo(0, 0);

        dispatch(showNews())
        console.log("general page");
    }, [dispatch])


    if (loading) {
        return (<h2 className="text-2xl flex items-center justify-center h-screen font-bold">Loading</h2>
        )
    }



    return (
        <>
            {users.articles && users.articles.map((ele) => (
                <>
                    <div className="mx-auto relative flex bg-clip-border rounded-xl bg-blue-400 text-gray-700 shadow-md w-full mt-5 mb-3 max-w-[70rem] flex-row">
                        <div
                            className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                            <img
                                src={ele.urlToImage}
                                alt="card-image" className="object-cover w-full h-full" />
                        </div>
                        <div className="p-6">
                            <h6
                                className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                                {ele.title}
                            </h6>
                            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">

                            </h4>
                            <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                                {ele.description}
                            </p>
                            <p className="text-white-900 ">{ele.content} </p>
                            <p className="text-gray-600">{ele.publishedAt}</p>
                        </div>
                    </div>
                </>
            ))
            }
        </>
    );
}

export default General;
