import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../images/login.jpg'
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { authenticate } from '../redux/slices/LoginSlice';


function Login() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email:"",
    password:"",
  });

  function submitHandler(event){
    event.preventDefault();
    dispatch(authenticate())
    let storedUsers = JSON.parse(localStorage.getItem('formData'))
    console.log(storedUsers,"userssssssssss")
    if(storedUsers){
      storedUsers.forEach((users) =>{
        if(formData.email == users.email && formData.password == users.password){
          localStorage.setItem("setIsLoggedIn", JSON.stringify(true));
          // setIsLoggedIn(true);
          toast.success("You are logged in");
        }
      })
      
    }
    else{
      toast.error("Valid email & password required")
    }

    if(storedUsers){
      if(formData.email.length === 0 || formData.password.length === 0){
        toast.error("Enter Email & Password");
      }
      else if(formData.password.length < 6){
        toast.error("Password should be more than 6 characters")
      }
      else{
        // setIsLoggedIn(true);
        dispatch(authenticate())
        navigate("/courses")
      }
    }
    else{
      toast.error("Please signup to create an account")
    } 
  }

  function changeHandler(event){
    setFormData( (prevData) => (
        {
            ...prevData, 
            [event.target.name] : event.target.value
        }
    ))
  }



    return (
    <div>
      <section className='flex justify-center mx-auto max-w-[80%]'>
        <div className="sm:hidden lg:block lg:max-w-[50%] xl:max-w-[45%] sm:my-[20%] lg:my-0">
          <img src={loginImg} alt='login' loading='lazy'/>
        </div>
        <form onSubmit={submitHandler}>
          <div className='border-[1px] my-[20%] border-lightgray rounded-2xl p-9 shadow-lg'>
            <h1 className="text-3xl font-semibold">Login</h1>
            <div>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={changeHandler} 
                placeholder="Enter Email Id*"  
                className="w-full my-4 border-[1px] border-lightgray rounded-lg p-2 text-lg max-w-full"
              />

              <input  
                name="password" 
                type={showPassword ? ("text") : ("password")}
                value={formData.password} 
                onChange={changeHandler} 
                placeholder="Enter Password* "  
                className="w-full mb-4 border-[1px] border-lightgray rounded-lg p-2 relative z-0 text-lg max-w-full"
              />

              <span 
                className='absolute mt-[9px] cursor-pointer z-10 right-[17%]'
                onClick={()=>{setShowPassword((prev) => !prev)}}>
                    {
                        showPassword ? 
                        (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) : 
                        (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>)
                    }
                </span>

              <input type="checkbox" id="rememberMe"/> Remember Me                        
            </div>
            
            <button value="Login" className="button rounded-full py-2 text-center text-xl my-4 text-white bg-orange border-none w-full">Login</button>
            <p>Don't have an account? <button><Link to="/signup" className='text-orange hover:underline'> Sign Up</Link></button></p>
          </div>
        </form>

      </section>
      
    </div>
  )
}

export default Login