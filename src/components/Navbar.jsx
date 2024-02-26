import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/LOGO.jpg"
import toast from 'react-hot-toast';
import search from '../images/Search.png'
import { IoMdArrowDropdown } from "react-icons/io";


function Navbar({isLoggedIn, setIsLoggedIn}) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=''>
            
            <nav className="flex lg:flex-row lg:justify-between lg:items-center max-w-[80%] mx-auto text-lg py-2">
                
                <Link to="/">
                    <img src={logo} className="img-fluid" alt="Logo"/>
                </Link>
            

                <div className="sm:hidden xl:flex xl:text-lg">
                    <ul className="flex gap-8">

                        <li className="hover:no-underline hover:text-orange cursor-pointer">
                            <Link to="/">Home</Link></li>

                        <li className="hover:text-orange hover:no-underline cursor-pointer">
                            <Link to="/courses">Courses</Link></li>

                        <li className="hover:text-orange hover:no-underline cursor-pointer">
                            <Link to="/blogs">Blogs</Link></li>

                            <button type="button" onClick={() => setIsOpen(!isOpen)} className="relative hover:text-orange flex hover:no-underline cursor-pointer">
                                Page
                                <IoMdArrowDropdown className='mt-2'/>
                            </button>
                            {
                                isOpen && (
                                    <div className="absolute py-1 mt-10 bg-white border right-[48.5%] shadow-lg z-10" role="none">
                                        <Link to="/faqs" className=" block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">FAQ's</Link>
                                        <Link to="/contactUs" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Contact Us</Link>
                                    </div>
                                )
                            }

                            

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
            {/* path  */}
            <div className='bg-footer py-4'>
                {
                    
                }
            </div>
        </div>
    )
}

export default Navbar