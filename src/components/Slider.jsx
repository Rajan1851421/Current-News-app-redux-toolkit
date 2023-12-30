import React, { useState, useEffect } from 'react';

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            url: "https://plus.unsplash.com/premium_photo-1663075847012-c781e0d194ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1lcnxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            url: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1tZXJ8ZW58MHx8MHx8fDA%3D",
        },
        {
            url: "https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2dyYW1tZXJ8ZW58MHx8MHx8fDA%3D",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            );
        }, 3000);

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [currentSlide, slides.length]);


    return (
        <>
            <div className="flex flex-col items-center  w-full mt-4">
                <div className="max-w-5xl w-full">
                    {/* Slides */}
                    {slides.map((slide, index) => (
                        <div
                            className={`${index === currentSlide ? 'block' : 'hidden'
                                } h-screen/2 bg-transparent relative`}
                            key={index}
                        >
                            <img
                                src={slide.url}
                                alt={`Slide ${index + 1}`}
                                className="w-full px-3 h-64 sm:h-80 md:h-96 lg:h-[400px] object-cover mx-auto transition duration-2000 ease-out"
                            />


                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full mt-4 flex justify-center items-end">
                <div
                    className="text-2xl p-2 bg-transparent text-white cursor-pointer "
                    onClick={() =>
                        setCurrentSlide(
                            currentSlide === 0 ? slides.length - 1 : currentSlide - 1
                        )
                    }
                >
                    <i class="fa-solid fa-ellipsis bg-transparent"></i>
                </div>
                <div
                    className="text-2xl p-2 bg-transparent text-white cursor-pointer"
                    onClick={() =>
                        setCurrentSlide(
                            currentSlide === slides.length - 1 ? 0 : currentSlide + 1
                        )
                    }
                >

                </div>
            </div>
        </>

    );
}

export default Slider;
