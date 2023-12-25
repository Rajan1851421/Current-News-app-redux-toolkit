import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom';

function FullNews() {
  window.scrollTo(0, 0);
  const navigate = useNavigate()
  const [url, seturl] = useState('https://backend-ekms.onrender.com/')
  const id = useParams()
  const allNews = useSelector((state) => state)

  const singleNews = allNews.app.users.filter((ele) => ele.id == id.id)

  const handleGoBack = () => {
    navigate('/news')
  }

  return (
    <div className="container my-24 mx-auto md:px-6 ">

      {/* <!-- Section: Design Block --> */}
      <section className="flex justify-center items-center text-center md:text-left rounded-lg bg-gray-300 border pt-7 h-auto mt-3">
        <div className="mb-6 flex flex-wrap">
          <div className="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
            <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init data-te-ripple-color="light">
              <img src={`${url}${singleNews[0].upload_photo}`} className="w-full" alt="Louvre" />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                </div>
              </a>
            </div>
          </div>

          <div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
            <h5 className="mb-3 text-lg font-bold">{singleNews[0].title}</h5>

            <p className="text-black-500 black:text-neutral-300">{singleNews[0].description}</p>



            <p className="mb-6 text-gray-500 ">
              <small>Published <u>{singleNews[0].date}</u> </small>
            </p>
            <button onClick={handleGoBack} type="button" className="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
              <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
              <span>Go back</span>

            </button>
          </div>
        </div>


      </section>
      {/* <!-- Section: Design Block --> */}
    </div>
  )
}

export default FullNews
