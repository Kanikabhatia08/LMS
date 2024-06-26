import React, { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import logo from "../images/LOGO.jpg"
import search from '../images/Search.png'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../contexts/authContext';
import { doSignOut } from '../Firebase/auth';



function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    //close dropdown on outside click
    const menuRef = useRef();
    const dropRef = useRef();
    window.addEventListener('click', (e)=>{
        if(e.target !== menuRef.current && e.target !== dropRef.current){
            setIsOpen(false);
        }
    })

    const { userLoggedIn } = useAuth()
    let location = useLocation();
    let loc = window.location.pathname.split("/").splice(-1)[0]

    // const {loggedInUser:isLoggedIn} = useSelector((state) => state)
    // console.log(loc);
    // const dispatch = useDispatch()
    const [count, setCount] = useState(0)
    var c = 0;
    const {cart} = useSelector((state) => state)

    useEffect(()=>{
        cart.forEach((element) =>{
            c = c+ element.count
            setCount(c);
        })
    },[cart])

    return (
        <div className=''>
            
            <nav className="flex lg:flex-row justify-between lg:items-center max-w-[80%] mx-auto text-lg py-2">
                
                <Link to="/">
                    <img src={logo} className="img-fluid mt-3" alt="Logo"/>
                </Link>
            

                <div className="hidden xl:flex xl:text-lg">
                    <ul className="flex gap-8">

                        <li className="hover:no-underline hover:text-orange cursor-pointer">
                            <Link to="/">Home</Link></li>

                        <li className="hover:text-orange hover:no-underline cursor-pointer">
                            <Link to="/courses">Courses</Link></li>

                        <li className="hover:text-orange hover:no-underline cursor-pointer">
                            <Link to="/blogs">Blogs</Link></li>

                            <button type="button" ref={dropRef} onClick={() => setIsOpen((prev) => !prev)} className="relative select-none hover:text-orange flex hover:no-underline cursor-pointer">
                                Page
                                
                                {!isOpen ? (<IoMdArrowDropdown className='mt-2' />) : (<IoMdArrowDropup className='mt-2'/>)}
                            </button>
                            {
                                isOpen && (
                                    <div ref={menuRef} className="absolute py-1 mt-10 bg-white border right-[48.5%] shadow-lg z-10" role="none">
                                        <Link to="/faqs" onClick={() =>{setIsOpen(false)}} className=" block px-4 py-2 text-sm hover:text-orange">FAQ's</Link>
                                        <Link to="/contactUs" onClick={() =>{setIsOpen(false)}}  className="text-gray-700 block px-4 py-2 text-sm hover:text-orange">Contact Us</Link>
                                    </div>
                                )
                            }

                            

                        <li><a href="#" className="hover:text-orange hover:no-underline cursor-pointer">LearnPress Add-On</a></li>
                        <li><a href="#" className="hover:text-orange hover:no-underline cursor-pointer">Premium Theme</a></li> 
                    </ul>
                </div>  

                {/* Buttons */}
                <div className="flex gap-2">
                    {
                        !userLoggedIn &&
                        <Link to="/login">
                            <button className="py-[13px] hover:text-orange hover:no-underline cursor-pointer">
                                Login <span className='text-black'>/</span>
                            </button>
                        </Link>
                    }
                    {
                        !userLoggedIn &&
                        <Link to="/signup">
                            <button className="py-[13px] hover:text-orange hover:no-underline cursor-pointer">
                                Sign Up
                            </button>
                        </Link>
                    }
                    {
                        userLoggedIn &&
                        <Link>
                            <button className="py-[13px] hover:text-orange hover:no-underline cursor-pointer"
                                onClick={() => { doSignOut().then(() => { 
                                    Navigate('/login') ;
                                    // console.log(doSignOut,"signout");
                                }) }}>
                                Log Out
                            </button>
                        </Link>
                    }
                    {
                        !userLoggedIn &&
                        <img src={search} alt="Search Icon"/> 
                    }
                    {
                        userLoggedIn &&
                        <Link to="/cart" className="relative ">
                            <GiShoppingCart className='text-black text-4xl  mt-2'/>
                            <span className='absolute bg-red-600 w-6 h-6 flex justify-center items-center text-center mx-auto rounded-full text-white top-[50%] -right-3'>{count}</span>
                        </Link>
                    }
                </div>


            </nav>
            {/* path  */}
            {
                (loc) ?
                (<div className='bg-footer py-3'>
                    {
                        <span className='max-w-[80%] text-xl text-gray flex mx-auto'>Home <MdOutlineKeyboardArrowRight  className='m-[5px]'/> { loc}</span>
                    }
                </div>) 
                :
                (
                    <div>

                    </div>
                )
            }
            
        </div>
    )
}

export default Navbar