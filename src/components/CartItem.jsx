import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaTrash } from "react-icons/fa";
import toast from 'react-hot-toast';
import { increment, decrement, removeFromCart } from '../redux/slices/CartSlice';

function CartItem({item}) {

    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();
    const [total, setTotal] = useState();

    const incrementHandler = ()=>{
        dispatch(increment(item.id))
    }

    useEffect( () => {
        setTotal( item.count*item.price );
        console.log([total])
    }, [cart])

    const decrementHandler = () =>{
        dispatch(decrement(item.id))
    }
    const remove = () =>{
        dispatch(removeFromCart(item.id))
        toast.success("Item removed from Cart")
    }   

    return (
        <div>
            <div className='flex gap-4 py-3'>
                <div className='w-[30%]'>
                    <img src={item.image} />
                </div>

                <div className='w-full'>
                    <h1 className='text-2xl text-black'>{item.name}</h1>
                    <div className='flex justify-between items-center text-xl'>
                        <div>
                            <p>${item.price}</p>
                            <p>Total: <span className='text-green-600' name="itemTotal"> ${total}</span></p>
                        </div>
                        
                        <div className='flex gap-3 border-1 border-footer'>
                            <button
                                className='px-2 bg-green-500'
                                onClick={decrementHandler}> - </button>
                            <span> {item.count}</span>
                            <button 
                                className='px-2 bg-green-500'
                                onClick={incrementHandler}> + </button>
                        </div>
                    </div>

                    <div
                        onClick={remove}>
                        <FaTrash />
                    </div>
                </div>
            </div>
            <hr className='p-2 w-full'/>
        </div>
    )
}

export default CartItem