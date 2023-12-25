import React from 'react'

function ExtraAchievement() {
    return (
        <>

            <div className="flex flex-wrap mx-7 ">
                {/* First Div - Takes 2/3 of the row on larger screens, full width on smaller screens */}
                <div className="w-full md:w-1/2 lg:w-1/2 bg-yellow-300 p-4 sm:mx-2 my-2 rounded-lg">
                   <img className='  ' src="/src/image/htmlcss.jpg" alt="" />
                </div>

                {/* Second Div - Takes 1/3 of the row on larger screens, full width on smaller screens */}
                <div className="w-full md:w-1/3 lg:w-1/3 bg-green-300 p-4 sm:mx-2 sm:my-2 rounded-lg ">
                <img className='h-full  ' src="/src/image/intern.jpg" alt="" />
                </div>
            </div>
        </>

    )
}

export default ExtraAchievement
