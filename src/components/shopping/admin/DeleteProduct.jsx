import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HandleEdit, RemoveProduct } from '../../../features/productSlice';

import Loading from '../../Loading'
import { fetchProduct } from '../../../features/productSlice';
import { useNavigate, useParams } from 'react-router-dom';

function DeleteProduct() {
  const [updateData, setUpdateData] = useState();
  const [category, setCategory] = useState('');
  const [id, setId] = useState()
  const [alert, setAlert] = useState(false)
  const [modal, setModal] = useState(false)
  const [editModal, setEditModal] = useState(true)
  const dispatch = useDispatch();
  const { products, loading, EditProductData } = useSelector((state) => state.product)
  // console.log("Update:", updateData);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    window.scrollTo(0, 14)
    dispatch(fetchProduct(category));
    if (id && products) {
      const singleProduct = products.filter((ele) => ele.id == id);
      if (singleProduct.length > 0) {
        setUpdateData(singleProduct[0]);
      }
    }
  }, [id, dispatch]);

  const handleUpdate = (e) => {
    e.preventDefault(); // Correcting the typo here
    window.scrollTo(0, 0)
    dispatch(HandleEdit({ id: updateData.id, updateData: updateData }));
    // console.log("U::", updateData);
    if (EditProductData.id > 0) {
      window.scrollTo(0, 14)
      setAlert(true)
      setTimeout(() => {
        setAlert(false) // Clear the uplaod message after 3 seconds
      }, 6000)

      setEditModal(true)
      setModal(false)
    }
  };
  const handleClose = () => {
    setModal(false)
    setEditModal(true)
  }
  // delete productk  
  if (loading) {
    return (
      <div className='mt-5'>
        <Loading />
      </div>

    )
  }

  const handleEdit = (id) => {
    setModal(true)
    setId(id)
    setEditModal(false)
  }
  return (
    <div className='h-screen bg-white overflow-auto'>
      {/* update Item */}
      {alert && (
        <div className="flex items-center justify-center mt-3 ">
          <div className="p-4 md:w-[75%] w-full sm:w-[90%] lg:w-[90%] text-sm text-green-800 rounded-lg
               bg-green-50 dark:bg-gray-800 dark:text-green-400">
            <span className="font-medium">Success alert!</span> Updated {EditProductData.title}
            <span className='flex justify-end items-end cursor-pointer' onClick={() => { setAlert(false) }}>close</span>
          </div>
        </div>
      )}

      <div>
        {modal && <div className='my-5 w-full'>
          <div className="w-full sm:w-[90%] md:w-[75%] lg:w-[80%] mx-auto bg-white p-6 rounded-md shadow-md">
            <div className='flex justify-end'>
              <button className='bg-red-500 rounded-lg px-2 text-white ' onClick={handleClose}>Close </button>
            </div>
            <h1 className="text-2xl font-bold mb-4">Update Information</h1>
            <form action="#" method="post" className="space-y-4" onSubmit={handleUpdate}>
              {/* <!-- Product Title --> */}
              <div>
                <label for="title" className="block text-sm font-medium text-gray-600">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={updateData && updateData.title}
                  onChange={newData}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              {/* <!-- Product Price --> */}
              <div>
                <label for="price" className="block text-sm font-medium text-gray-600">Price</label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={updateData && updateData.price}
                  onChange={newData}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              {/* <!-- Product Category --> */}
              <div>
                <label for="category" className="block text-sm font-medium text-gray-600">Category</label>
                <select
                  id="category"
                  name="category"
                  value={updateData && updateData.category}
                  onChange={newData}
                  className="mt-1 p-2 w-full border rounded-md"
                >
                  {/* Add your category options here */}
                  <option value="" disabled>Select a category</option>
                  <option value="electronic">Electronic</option>
                  <option value="jewelry">Jewelry</option>
                  <option value="clothes">Clothes</option>
                  {/* Add other categories as needed */}
                </select>
              </div>

              {/* <!-- Product Description --> */}
              <div>
                <label for="description" className="block text-sm font-medium text-gray-600">Description</label>
                <textarea id="description" name="description" rows="4"
                  value={updateData && updateData.description}
                  onChange={newData}
                  className="mt-1 p-2 w-full border rounded-md resize-none">lorem ipsum set</textarea>
              </div>

              {/* <!-- Product Image URL --> */}
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-600">
                  Upload Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"

                  // value={dataForUpadte && dataForUpadte.image}
                  //  onChange={newData}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              {/* <!-- Submit Button --> */}
              <div>

                <button type='submit' className="w-full text-center mx-auto relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                  <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="relative">Upload Product</span>
                </button>
              </div>
            </form>
          </div>
        </div>}
      </div>

      {editModal && <div>
        {products && products.map((item) => (
          <div className='grid grid-cols-2 shadow-md py-2'>
            <div className='flex justify-center items-center mt-2 bg-transparent'>
              <img src={item.image} alt="" className='h-20 ' />
            </div>
            <div>
              <p>{`Title: ${item.title}`}</p>
              <p>{`Price: ${item.price}`}</p>
              <button className='bg-red-500 px-3 py-1 hover:bg-red-600 ' onClick={() => dispatch(RemoveProduct(item.id))} >Remove</button>
              <button onClick={() => handleEdit(item.id)} className='bg-yellow-500 px-7 py-1 mx-1 hover:bg-yellow-600' >Edit</button>
            </div>
          </div>
        ))}
      </div>}


    </div>
  )
}

export default DeleteProduct
