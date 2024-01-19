import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteJSON, showUser1 } from '../features/userDetailSlice2'
import Loading from './Loading'
import Success from './Success'
function JSON() {

  const [id, setId] = useState()
  const dispatch = useDispatch()
  const { users, loading } = useSelector((state) => state.app2)
  // const { users, loading } = useSelector((state) => state.app)

  // // console.log("F:",showUser1);
  useEffect(() => {
    dispatch(showUser1())
  }, [dispatch])



  if (loading) {
    return (
      <Loading />
    )
  }



  return (
    <div className=' my-2 sm:w-full md:container lg:container lg:w-[50%] md:w-[50%] bg-sky-300 px-10 pt-5'>

      {
        users && users.map((ele) =>
          <>
            <p className='my-1 px-3 py-2 text-center bg-yellow-600 '><span>{ele.id} :</span> {ele.title}</p>
            <button key={ele.id} onClick={() => { dispatch(DeleteJSON(ele.id)) }}
              className='mx-auto p-2 bg-red-600 pointer flex justify-center rounded-lg'>Remove</button>
          </>
        )
      }
    </div>
  )
}

export default JSON
