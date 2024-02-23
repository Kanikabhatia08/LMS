import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/LOGO.jpg"
import toast from 'react-hot-toast';
import search from '../images/Search.png'
import { IoMdArrowDropdown } from "react-icons/io";


function Navbar({isLoggedIn, setIsLoggedIn}) {
    const [drop, setDrop] = useState(false);
    console.log(drop,"dropppppppp")
    return (
        <div>
            
            <nav className="flex lg:flex-row lg:justify-between lg:items-center max-w-[80%] mx-auto text-lg py-2">
                
                <Link to="/">
                    <img src={logo} className="img-fluid" alt="Logo"/>
                </Link>
            

                <div className="sm:hidden xl:flex xl:text-lg">
                    <ul className="flex gap-8">

                        <li className="hover:no-underline hover:text-orange cursor-pointer">
                            <Link to="/">Home</Link></li>

                        <li className="hover:text-orange hover:no-underline cursor-pointer">
                            <Link to="/Courses">Courses</Link></li>

                        <li className="hover:text-orange hover:no-underline cursor-pointer">
                            <Link to="/Blog">Blog</Link></li>

                            <button type="button" className="hover:text-orange flex hover:no-underline cursor-pointerring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Options
                                <IoMdArrowDropdown className='mt-2'/>
                            </button>

                            <div className=" right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                <div className="py-1" role="none">
                                <Link to="/Faqs" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">FAQ's</Link>
                                <Link to="/ContactUs" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Contact Us</Link>
                                
                                </div>
                            </div>

                        <li><a href="#" className="hover:text-orange hover:no-underline cursor-pointer">LearnPress Add-On</a></li>
                        <li><a href="#" className="hover:text-orange hover:no-underline cursor-pointer">Premium Theme</a></li> 
                    </ul>
                </div>  

                {/* Buttons */}
                <div className="sm:hidden xl:flex gap-2">
                    {
                        !isLoggedIn &&
                        <Link to="/login">
                            <button className="py-[13px] hover:text-orange hover:no-underline cursor-pointer">
                                Login <span className='text-black'>/</span>
                            </button>
                        </Link>
                    }
                    {
                        !isLoggedIn &&
                        <Link to="/signup">
                            <button className="py-[13px] hover:text-orange hover:no-underline cursor-pointer">
                                Sign Up
                            </button>
                        </Link>
                    }
                    {
                        isLoggedIn &&
                        <Link>
                            <button className="py-[13px] hover:text-orange hover:no-underline cursor-pointer"
                                onClick={() => {setIsLoggedIn(false);
                                toast.success("Logged Out")}}>
                                Log Out
                            </button>
                        </Link>
                    }
                    <img src={search} alt="Search Icon"/>
                </div>


            </nav>
        </div>
    )
}

export default Navbar