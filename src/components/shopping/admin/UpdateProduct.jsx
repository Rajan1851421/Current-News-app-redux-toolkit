import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { HandleEdit, fetchProduct } from '../../../features/productSlice';
import { useParams, Link } from 'react-router-dom';


function UpdateProduct() {

  const [updateData, setUpdateData] = useState();
  const { id } = useParams()
  const [alert, setAlert] = useState(false)
  const dispatch = useDispatch();
  const { products, loading, EditProductData } = useSelector((state) => state.product)

  console.log("Update:", updateData);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(fetchProduct());
    if (id && products) {
      const singleProduct = products.filter((ele) => ele.id == id);
      if (singleProduct.length > 0) {
        setUpdateData(singleProduct[0]);
      }
    }
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault(); // Correcting the typo here
    dispatch(HandleEdit({ id: updateData.id, updateData: updateData }));
    console.log("U::", updateData);
    if (EditProductData.id > 0) {
      window.scrollTo(0, 0)
      setAlert(true)
    }
  };



  return (
    <div>

      <div className='my-5 w-full'>
        {alert && <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 sticky top-0 left-0" role="alert">
          <span class="font-medium">Success alert!</span> Updated {EditProductData.title}
          <span className='flex justify-end items-end cursor-pointer' onClick={() => { setAlert(false) }}>close</span></div>}
        <div class="w-full sm:w-[90%] md:w-[75%] lg:w-[80%] mx-auto bg-white p-6 rounded-md shadow-md">
          <Link to=''>Back</Link>
          <h1 class="text-2xl font-bold mb-4">Update Information</h1>
          <form action="#" method="post" class="space-y-4" onSubmit={handleUpdate}>
            {/* <!-- Product Title --> */}
            <div>
              <label for="title" class="block text-sm font-medium text-gray-600">Title</label>
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
              <label for="price" class="block text-sm font-medium text-gray-600">Price</label>
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
              <label for="category" class="block text-sm font-medium text-gray-600">Category</label>
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
              <label for="description" class="block text-sm font-medium text-gray-600">Description</label>
              <textarea id="description" name="description" rows="4"
                value={updateData && updateData.description}
                onChange={newData}
                class="mt-1 p-2 w-full border rounded-md resize-none">lorem ipsum set</textarea>
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

export default UpdateProduct;
