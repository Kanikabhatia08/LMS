import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'

function Cart() {

    const {cart} = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);
    var sum = 0;

    useEffect(()=>{
        cart.forEach((element) => {
            // totalAmount = totalAmount + (element.count*element.price)
            sum =sum + (element.count*element.price);
            setTotalAmount(sum)
            
        });
        
    },[cart])


    return (
        <div>
            {
                cart.length > 0 ?
                (
                    <div className='flex max-w-[73%] justify-between mx-auto my-10'>
                        <div className='w-[60%]'>
                            {
                                cart.map((item, index) => {
                                    return <CartItem key={item.id} item={item} itemIndex={index} />
                                })
                            }
                        </div>
                        <div className='w-[30%] space-y-[114%]'>
                            <div>
                                <div className="text-orange font-semibold text-2xl">YOUR CART</div>
                                <div className="text-orange font-bold text-5xl">SUMMARY</div>
                                <p>Total Items: {cart.length}</p>
                            </div>

                            <div>
                                <p className="text-lg font-semibold">Total Amount: <span className='text-green-600'> ${totalAmount}</span> </p>
                                <button className="bg-orange my-2 text-white text-xl font-semibold py-2 w-full rounded-md">
                                    CheckOut Now
                                </button>
                            </div>
                        </div>

                    </div>
                )
                :
                (
                    <div className='text-2xl my-[15%] mx-auto text-center w-screen '>
                        <h1>Cart Empty</h1>
                        <Link to={"/courses"}>
                            <button>
                            Shop Now
                            </button>
                        </Link>
                    </div>
                )
            }
            
        </div>
    )
}

export default Cart