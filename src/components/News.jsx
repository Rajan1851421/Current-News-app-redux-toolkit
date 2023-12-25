import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showNews } from '../features/userDetailSlice'
import { Link } from 'react-router-dom'
import Loading from './Loading'



function News() {
  const [id, setId] = useState();
  const dispatch = useDispatch()
  const { users, loading } = useSelector((state) => state.app)
  const [url, setUrl] = useState('https://backend-ekms.onrender.com/')

  useState(() => {
    window.scrollTo(0, 0);
    dispatch(showNews())
    // dispatch(showTechnologyNews())
  }, [dispatch])





  if (loading) {
    return (
      <Loading/>
    )
  }

  return (
    <>
      <h3 className='text-center lg:text-4xl md:text-3xl sm:text-4xl '>Latest News</h3>
      {users && users.map((ele) => (



        // <!-- Container for demo purpose -->
        <div className="container my-24 mx-auto md:px-6 ">
          {/* <!-- Section: Design Block --> */}
          <section className="flex justify-center items-center text-center md:text-left rounded-lg bg-gray-300 border pt-7 h-auto mt-3">
            <div className="mb-6 flex flex-wrap">
              <div className="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init data-te-ripple-color="light">
                  <img src={`${url}${ele.upload_photo}`} className="w-full" alt="Louvre" />
                  <a href="#!">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                    </div>
                  </a>
                </div>
              </div>

              <div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                <h5 className="mb-3 text-lg font-bold">{ele.title}</h5>

                <p className="text-black-500 black:text-neutral-300">
                  {ele.description.length > 100
                    ? `${ele.description.substring(0, 100)}...`
                    : ele.description}
                  {ele.description.length > 100 && (
                    <Link
                      className="text-blue-500 cursor-pointer"
                      onClick={() => setId(ele.id)}
                      to={`/detail/${ele.id}`}
                    >
                      Read More
                    </Link>
                  )}
                </p>


                <p className="mb-6 text-gray-500 ">
                  <small>Published <u>{ele.date}</u> </small>
                </p>
              </div>
            </div>


          </section>
          {/* <!-- Section: Design Block --> */}
        </div>
        // <!-- Container for demo purpose -->





      ))}

    </>
  )
}

export default News
