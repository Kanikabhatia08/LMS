import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/LOGO.jpg"
import toast from 'react-hot-toast';
import search from '../images/Search.png'

function Navbar({isLoggedIn, setIsLoggedIn}) {
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

                        {/* <li><a href="#" className="hover:text-orange hover:no-underline cursor-pointer">Page</a></li>
                        <li><a href="#" className="hover:text-orange hover:no-underline cursor-pointer">LearnPress Add-On</a></li>
                        <li><a href="#" className="hover:text-orange hover:no-underline cursor-pointer">Premium Theme</a></li> */}
                    </ul>
                </div>
            
                {/* <div class="sm:hidden xl:flex gap-2">
                    <a href="login.html" class="py-[13px] hover:text-orange hover:no-underline cursor-pointer">Login / Register</a>
                    <img src="./images/Search.png" alt="Search Icon"/>
                </div> */}

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