import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddProduct as AddProductAction } from '../../../features/productSlice';

function AddProduct() {
  const { successMessage } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [message, setMessage] = useState(false);  // Fix here

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: null,
  });
  window.scrollTo(0, 0)
  const handleInputChange = (e) => {
    window.scrollTo(0, 0)
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'image' ? files[0] : value,
    }));
  };
  const handleClose = () => {
    setMessage(false)
  }
  const handleSubmit = (e) => {
    window.scrollTo(0, 0)
    e.preventDefault();
    setMessage(true);
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    dispatch(AddProductAction(formDataToSend));

  };

  return (
    <div>
      {message &&
        <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 sticky top-0 left-0" role="alert">
          <span class="font-medium">Success alert!</span> {successMessage}
          <span className='flex justify-end items-end cursor-pointer' onClick={handleClose}>close</span></div>
      }
      <div className='h-screen w-full'>
        <div class="w-full sm:w-[90%] md:w-[75%] lg:w-[80%] mx-auto bg-white p-6 rounded-md shadow-md">

          <h1 class="text-2xl font-bold mb-4">Product Information</h1>
          <form action="#" method="post" class="space-y-4" onSubmit={handleSubmit}>
            {/* <!-- Product Title --> */}
            <div>
              <label for="title" class="block text-sm font-medium text-gray-600">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* <!-- Product Price --> */}
            <div>
              <label for="price" class="block text-sm font-medium text-gray-600">Price</label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            {/* <!-- Product Category --> */}
            <div>
              <label for="category" class="block text-sm font-medium text-gray-600">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
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
              <label for="description" class="block text-sm font-medium text-gray-600">Description</label>
              <textarea id="description" name="description" rows="4"
                value={formData.description}
                onChange={handleInputChange}
                class="mt-1 p-2 w-full border rounded-md resize-none">lorem ipsum set</textarea>
            </div>

            {/* <!-- Product Image URL --> */}
            <div>
              <label for="image" class="block text-sm font-medium text-gray-600">Upload Image</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>





            {/* <!-- Submit Button --> */}
            <div>
              {/* <button type="submit"
                class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                Save Product
              </button> */}
              <button type='submit' class="w-full text-center mx-auto relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span class="relative">Upload Product</span>
              </button>
            </div>

          </form>

        </div>


      </div>
    </div>
  )
}

export default AddProduct
