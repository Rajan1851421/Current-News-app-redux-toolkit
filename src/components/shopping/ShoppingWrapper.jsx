import React, { useEffect } from 'react'
import ShopNav from './ShopNav'


function ShoppingWrapper() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <ShopNav />
        </div>
    )
}

export default ShoppingWrapper
