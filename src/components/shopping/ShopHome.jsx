import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ViewProduct, fetchProduct } from '../../features/productSlice'
import Loading from '/src/components/Loading'
import StarRating from './StarRating'



function ShopHome() {
    const [category, setCategory] = useState('')
    window.scrollTo(0, 0)
    const { loading, products, error } = useSelector((state) => state.product)
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchProduct(category))
    }, [category, dispatch])
    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <>
            <div className="container mx-auto mt-20">
                <div className='w-1/2 mx-auto'>
                    <label for="category" class="block text-sm font-medium text-gray-600">Select for Search</label>
                    <select
                        id="category"
                        name="category"
                        value={category}
                        onChange={(e) => { setCategory(e.target.value) }}
                        className="mt-1 p-2 w-full border rounded-md"
                    >
                        {/* Add your category options here */}
                        <option value="" >Select a category for Search</option>
                        <option value="category/electronics">Electronic</option>
                        <option value="category/jewelery">Jewelry</option>
                        <option value="/category/men's clothing">Men's Clothes</option>
                        <option value="/category/women's clothing">Women's Clothes</option>
                        {/* Add other categories as needed */}
                    </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-3">

                    {products && products.map((product) => (
                        <div key={product.id} className="flex bg-transparent rounded-lg shadow dark:bg-gray-600 p-6">
                            <div className="relative flex-none w-20 md:w-48 p-3">
                                <img src={product.image} alt="shopping image" className="absolute inset-0 object-cover w-full h-full rounded-lg" />
                            </div>
                            <form className="flex-auto pl-2">
                                <h1 className="text-[15px] font-semibold dark:text-gray-50">{product.title}</h1>
                                <p className="text-[12px] font-semibold text-gray-500 dark:text-gray-300">{`Price: ${product.price}`}</p>
                                <span>{product.category}</span>
                                <span>
                                    <StarRating stars={product.rating.rate} count={product.rating.count} />
                                </span>
                                <div className="flex mb-4 text-sm font-medium">
                                    <button key={product.id}
                                        onClick={() => { dispatch(ViewProduct(product.id)) }}
                                        type="button"
                                        className=" rounded-lg bg-blue-600 p-3 hover:bg-blue-800 hover:text-white"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-300 ">
                                    {`Discription:  ${product.description.slice(0, 50)}`}
                                </p>
                            </form>
                        </div>
                    ))}

                </div>
            </div>
        </>

    )
}

export default ShopHome
