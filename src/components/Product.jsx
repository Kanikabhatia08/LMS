import React from 'react'
import { addToCart, removeFromCart } from '../redux/slices/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'


const Product = ({post}) => {

    const dispatch = useDispatch();
    const {cart} = useSelector((state) => state);

    const addCart = ()=>{
        dispatch(addToCart(post))
        toast.success("Item added to Cart")
    }
    const removeCart = () =>{
        dispatch(removeFromCart(post.id))
        toast.success("Item removed from Cart")

    }

    return (
        <div>
            <div className='bg-lightgray py-3'>
                <img className='shadow-lg w-[90%] my-4 ml-7' src={post.image} alt="course" />
                <h1 className='text-2xl font-semibold '>{post.name}</h1>
                <p className='leading-2 tracking-wider text-xl'>${post.price}</p>
                {
                    cart.some((cartItem) => cartItem.id == post.id) ?
                    (
                        <button 
                            onClick={removeCart}
                            className='bg-[#FF782D] text-white px-3 py-2 my-2'>
                            Remove from Cart
                        </button>
                    )
                    :
                    (
                        <button 
                            onClick={addCart}
                            className='bg-[#FF782D] text-white px-3 py-2 my-2'>
                            Add to Cart
                        </button>
                    )
                }
                
            </div>
        </div>
    )
}

export default Product