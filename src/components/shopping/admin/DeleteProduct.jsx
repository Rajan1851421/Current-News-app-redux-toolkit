import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HandleEdit, RemoveProduct } from '../../../features/productSlice';
import Loading from '../../Loading'
import UpdateProduct from './UpdateProduct';
import { Link, useNavigate, useParams } from 'react-router-dom';

function DeleteProduct({ setProductView }) {
  const navigate = useNavigate()
  const dispatch= useDispatch()
  const [showedit,setShowEdit] = useState(false)
  
  const { loading, products } = useSelector((state) => state.product)
  console.log(products);
  if(loading){
    return(
    <Loading/>
    )
  }

  // const handleEdit = (id)=>{    
  //   navigate(`/editPro/${id}`)  
  // }

  const handleEdit = (id) => {
    setProductView('EditProduct');  
    navigate(`/editPro/${id}`) 
    
   
  }




  return (
    <div className='h-screen bg-white overflow-auto'>
      {/* <div>
       {showedit && <UpdateProduct/>}
      </div> */}
    
      {products && products.map((item) => (

        <div className='grid grid-cols-2 shadow-md py-2'>
          <div className='flex justify-center items-center mt-2 bg-transparent'>
            <img src={item.image} alt="" className='h-20 ' />
          </div>
          <div>
            <p>{`Title: ${item.title}`}</p>
            <p>{`Price: ${item.price}`}</p>
            <button className='bg-red-500 px-3 py-1' onClick={()=>dispatch(RemoveProduct(item.id))} >Remove</button>
            <button onClick={() => handleEdit(item.id)} className='bg-yellow-500 px-3 py-1 mx-1' >Edit</button>

            
          </div>

        </div>
      ))}
    </div>
  )
}

export default DeleteProduct
