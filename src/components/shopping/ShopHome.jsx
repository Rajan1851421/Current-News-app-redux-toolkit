import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ViewProduct, fetchProduct } from '../../features/productSlice'
import Loading from '/src/components/Loading'
import StarRating from './StarRating'
import ShopNav from './ShopNav'


function ShopHome() {
    window.scrollTo(0, 0)
    const { loading, products, error } = useSelector((state) => state.product)
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchProduct())
    }, [])
    if (loading) {
        return (
            <Loading />
        )
    }


    return (
        <>        
            <div className="container mx-auto mt-20">
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
                                        onClick={() => {dispatch(ViewProduct(product.id))}}
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
