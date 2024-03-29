import React, { Suspense, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, Navigate } from 'react-router-dom';
import loginImg from '../../images/login.jpg'
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from '../../contexts/authContext';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../Firebase/auth';
import Loader from '../../components/Loader';


function Login() {

    const { userLoggedIn } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')


    const submitHandler = async (event) => {
        event.preventDefault();
        try{
            if(!isSigningIn){
                setIsSigningIn(true)
                await doSignInWithEmailAndPassword(email,password)
            }
        }
        catch(error){
            setErrorMessage(error.message)
            toast.error(errorMessage)
            setIsSigningIn(false)
        }

    }
    const onGoogleSignIn = (e) => {
        e.preventDefault()
        try{
            if (!isSigningIn) {
                setIsSigningIn(true)
                doSignInWithGoogle().catch(err => {
                    setIsSigningIn(false)
                })
            }
        }
        catch(error){
            toast.error(error.message)
            
        }
    }

    return (
        <div>
        {userLoggedIn && (<Navigate to={'/courses'} replace={true} />)}

        <section className='flex justify-center mx-auto max-w-[80%]'>
            <div className="sm:hidden lg:block lg:max-w-[50%] xl:max-w-[50%] sm:my-[20%] lg:my-0">
            <img src={loginImg} alt='login' loading='lazy'/>
            </div>
            <form onSubmit={submitHandler}>
            <div className='border-[1px] border-lightgray rounded-2xl mt-10 p-9 shadow-lg'>
                <h1 className="text-3xl font-semibold">Login</h1>
                <div>
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={(e) => { setEmail(e.target.value) }} 
                    placeholder="Enter Email Id*"  
                    className="w-full my-4 border-[1px] border-lightgray rounded-lg p-2 text-lg max-w-full focus:outline-none
                        focus:border-none focus:ring-orange focus:ring-2 invalid:border-red-500 invalid:border-2  focus:invalid:ring-red-500"
                />

                <input  
                    name="password" 
                    type={showPassword ? ("text") : ("password")}
                    value={password} 
                    onChange={(e) => { setPassword(e.target.value) }} 
                    placeholder="Enter Password* "  
                    className="w-full mb-4 border-[1px] border-lightgray rounded-lg p-2 relative text-lg max-w-full focus:outline-none
                    focus:border-none focus:ring-orange focus:ring-2 invalid:border-red-500 invalid:border-2  focus:invalid:ring-red-500"
                />

                <span 
                    className='absolute mt-[9px] cursor-pointer z-10 right-[13%]'
                    onClick={()=>{setShowPassword((prev) => !prev)}}>
                        {
                            showPassword ? 
                            (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) : 
                            (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>)
                        }
                    </span>

                <input type="checkbox" id="rememberMe"/> Remember Me                        
                </div>
                
                <button value="Login" className="button rounded-full py-2 text-center text-xl mt-4 mb-2 text-white bg-orange border-none w-full">Login</button>
                <div className='flex mx-auto justify-center'>
                    <hr className='border-gray border-1 w-[50%] mt-[11px] mx-2'/>
                    <p className='text-gray'>OR</p>
                    <hr className='border-gray border-1 w-[50%] mt-[11px] mx-2'/>
                    
                </div>
                <button className='rounded-full mx-auto text-gray justify-center mb-4 mt-2 text-center py-1 gap-2 font-semibold text-xl border-gray border-1 w-full flex' 
                    onClick={(e) => { onGoogleSignIn(e) }}><FcGoogle className='m-1 text-2xl'/>Sign in with Google</button>
                <p>Don't have an account? <button><Link to="/signup" className='text-orange hover:underline'> Sign Up</Link></button></p>
            </div>
            </form>

        </section>
        
        </div>
    )
}

export default Login;