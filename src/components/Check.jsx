import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Success from './Success'

function Check() {
    const [user, setUser] = useState([])
    const [msg, setMsg] = useState(false)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                setLoading(false)
                console.log(response);
                setUser(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    // const handleDel = () => {     
    //     axios.delete(`https://jsonplaceholder.typicode.com/posts/1`)
    //         .then(response => {
    //             console.log(response);
    //             console.log("Status:", response.status);
    //             if (response.status == 200) {
    //                setMsg(true)
    //                setTimeout(handleClose, 5000);
    //             }
    //         }).catch(error => {
    //             console.log(error);
    //         })
    // }
    const handleClose = () => {
        setMsg(false);

    };

    const handleDelete = (id) => {
        setLoading(true)
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                console.log(response);
                setLoading(false)
                console.log("Status:", response.status);
                if (response.status == 200) {
                    setMsg(true)
                    setTimeout(handleClose, 5000);
                }
            }).catch(error => {
                console.log(error);
            })
    }


    return (
        <div>
            {loading && <p className='text-center mt-4'>Loading</p>}
            {msg && <Success onClose={handleClose} />}

            {/* <button className='bg-red-600 p-6 ' onClick={handleDel}>Delete</button> */}
            {
                user && user.map((ele) => {
                    return (
                        <div key={ele.id}>
                            <p className='mx-6 my-4'>{ele.title}
                                <span className=' cursor-pointer mx-6 bg-red-500 p-1 rounded-lg' onClick={() => handleDelete(ele.id)}>Delete</span>
                            </p>
                            {/* <p>{ele.id} </p> */}

                        </div>
                    )
                })
            }

        </div>
    )
}

export default Check
