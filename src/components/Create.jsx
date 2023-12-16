import React from 'react'
import './create.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../features/userDetailSlice'
import { useNavigate } from 'react-router-dom'

function Create() {

    const [users, setUsers] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
        console.log(users);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("users...", users);
        dispatch(createUser(users))
        navigate("/registeredUser")
    }


    return (
        <>
            <div className="container mx-auto my-2">
                <form className='form' onSubmit={handleSubmit} >
                    <center><h2 className='font-bold my-3'>Register form</h2></center>
                    <hr />
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="name">Name:</label></td>
                                <td><input type="text" className='input' placeholder='Name' name='name' required onChange={getUserData} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="email">Email:</label></td>
                                <td><input type="email" className='input' placeholder='Email' name='email' required onChange={getUserData} /></td>
                            </tr>
                            <tr>
                                <td>Age:</td>
                                <td><input type="text" className='input' placeholder='age' name='age' required onChange={getUserData} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="gender">Gender:</label></td>
                                <td>
                                    <input type="radio" value='male' name='gender' className='gender' onChange={getUserData} />Male
                                    <input type="radio" value='female' name='gender' className='gender' onChange={getUserData} />Female
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><button className='submitBtn' type='submit'>Submit</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>

        </>
    )
}

export default Create;
