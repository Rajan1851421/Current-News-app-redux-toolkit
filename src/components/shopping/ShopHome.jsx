import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ViewProduct, fetchProduct } from '../../features/productSlice'
import Loading from '/src/components/Loading'
import StarRating from './StarRating'

function ShopHome() {
    const [category, setCategory] = useState('')
    const [filter, setFilter] = useState('')
    const { loading, products } = useSelector((state) => state.product)
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchProduct(category))
    }, [category, dispatch])

    useEffect(() => {
        if (filter) {
            handleFilterChange(filter)
        }
    }, [filter, products])

    const handleFilterChange = (filter) => {
        let sortedProducts = [...products]
        if (filter === '2') {
            sortedProducts.sort((a, b) => a.price - b.price)
        } else if (filter === '3') {
            sortedProducts.sort((a, b) => b.price - a.price)
        } else if (filter === '4') {
            sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate)
        }
        setFilteredProducts(sortedProducts)
    }
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        setFilteredProducts(products)
    }, [products])

    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <>
            <div className="container mx-auto mt-20 no-select ">
                <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 sm:w-[90%] mx-auto w-full mt-2 no-select">
                    <label className="block text-sm font-medium text-gray-600 mt-2 no-select"> <br /> </label>
                    <div className="flex justify-center">
                        <select
                            id="category"
                            name="category"
                            value={category}
                            onChange={(e) => { setCategory(e.target.value) }}
                            className="mt-1 p-2 w-full border rounded-md"
                        >
                            <option value="">Select a category for Search</option>
                            <option value="category/electronics">Electronic</option>
                            <option value="category/jewelery">Jewelry</option>
                            <option value="/category/men's clothing">Men's Clothes</option>
                            <option value="/category/women's clothing">Women's Clothes</option>
                        </select>
                        <select
                            id="filter"
                            name="filter"
                            onChange={(e) => { setFilter(e.target.value) }}
                            className="mt-1 p-2 w-[25%] border rounded-md mx-1"
                        >
                            <option value="1">Filter By</option>
                            <option value="2">Low to High</option>
                            <option value="3">High to Low</option>
                            <option value="4">Relevance</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-3">
                    {filteredProducts && filteredProducts.map((product) => (
                        <div key={product.id} className="bg-[#CCFBF1] rounded-lg shadow-lg p-8">
                            <div className="relative overflow-hidden">
                                <img className="object-cover w-full h-40 md:h-48 lg:h-56 xl:h-64" src={product.image} alt="shopping image" />


                            </div>
                            <h3 className="text-md font-bold text-gray-900 mt-2">{product.title}</h3>
                            <p className="text-gray-500 text-sm mt-2">{`Price: ${product.price}`}</p>
                            <p className="text-gray-500 text-sm mt-2">{product.category}</p>
                            <span>
                                <StarRating stars={product.rating.rate} count={product.rating.count} />
                            </span>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-gray-900 font-bold text-lg">${product.price}</span>
                                <button
                                    onClick={() => { dispatch(ViewProduct(product.id)) }}
                                    type="button"
                                    className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
                                >
                                    Add to Cart
                                </button>
                            </div>
                            {/* <p className="text-sm md:text-base text-gray-500 dark:text-gray-300 mt-2">
                                {`Description: ${product.description.slice(0, 50)}`}
                            </p> */}
                        </div>
                    ))}


                </div>
            </div>
        </>
    )
}

export default ShopHome
