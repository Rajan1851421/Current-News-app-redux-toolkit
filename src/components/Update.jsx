import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../features/userDetailSlice';

function Update() {
    window.scrollTo(0, 0)
    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch()

    const [updateData, setUpdateData] = useState();
    const { users, loading } = useSelector((state) => state.app)



    useEffect(() => {
        if (id && users) {
            const singleUser = users.filter((ele) => ele.id == id);
            if (singleUser.length > 0) {
                setUpdateData(singleUser[0]);
            }
        }
    }, [id, users]);

    const newData = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    };

    const handleUpdate = (e) => {
        e.preventDefault(); // Correcting the typo here
        dispatch(updateUser({ id: updateData.id, updateData: updateData }));
        // Optionally, navigate to another page after updating
        navigate('/registeredUser');
    };


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2  mt-[-40px] bg-white">
                {/* First part */}
                <div className="col-span-1 md:col-span-1 p-2">
                    <img
                        className="max-w-full h-auto bg-block sm:hidden md:block lg:block"
                        src="https://img.freepik.com/free-vector/woman-using-software-cartoon-character-working-process-workflow-analysis-internet-platform-testing-female-programmer-professional-financial-analyst-vector-isolated-concept-metaphor-illustration_335657-2722.jpg?size=626&ext=jpg&ga=GA1.1.108132751.1702923772&semt=ais"
                        alt=""
                    />
                </div>


                {/* Second part */}
                <div className="col-span-1 md:col-span-1 p-2 ">
                    {/* <!-- component --> */}
                    <form className="bg-grey-lighter min-h-screen flex flex-col mt-15" onSubmit={handleUpdate}  >
                        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                            <div className="bg-[#bfdbfe] px-10 py-8 rounded shadow-md text-black w-full">
                                <h1 className="mb-8 text-3xl text-center">Update</h1>
                                <input
                                    type="text"
                                    className="block border border-grey-light w-full p-3 rounded mb-4 capitalize"
                                    name="name"
                                    placeholder="Full Name"
                                    required
                                    value={updateData && updateData.name}
                                    onChange={newData}
                                />

                                <input
                                    type="email"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    value={updateData && updateData.email}
                                    onChange={newData}
                                />

                                <input
                                    type="number"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="age"
                                    placeholder="Age"
                                    required
                                    value={updateData && updateData.age}
                                    onChange={newData}
                                />
                                <label> Gender :</label>

                                <input
                                    type="radio"
                                    value="male"
                                    name="gender"
                                    className="gender mx-2"
                                    checked={updateData && updateData.gender === 'male'}
                                    onChange={newData}
                                />
                                Male &nbsp;
                                <input
                                    type="radio"
                                    value="female"
                                    name="gender"
                                    className="gender mx-1"
                                    checked={updateData && updateData.gender === 'female'}
                                    onChange={newData}
                                />

                                Female

                                <button
                                    type='submit'
                                    className="w-full text-center mt-2 py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                                >Update</button>


                            </div>


                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Update;
