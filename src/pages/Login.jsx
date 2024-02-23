import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../images/login.jpg'
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";


function Login({setIsLoggedIn}) {

  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email:"",
    password:""
  });
  
  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/courses")
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
        <div className="max-w-[50%]">
          <img src={loginImg}/>
        </div>
        <form onSubmit={submitHandler}>
          <div className='border-[1px] mt-36 border-lightgray rounded-2xl p-9 shadow-lg"'>
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
                className='absolute mt-[9px] cursor-pointer z-10 right-[15%]'
                onClick={()=>{setShowPassword((prev) => !prev)}}>
                    {
                        showPassword ? 
                        (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) : 
                        (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>)
                    }
                </span>

              <input type="checkbox" id="rememberMe"/> Remember Me                        
            </div>
            
            <input value="Login" className="button rounded-full py-2 text-center text-xl my-4 text-white bg-orange border-none w-full"/>
            <p>Don't have an account?<Link to="/signup" className='text-orange hover:text-red-600"'>Sign Up</Link></p>
          </div>
        </form>

      </section>
      
    </div>
  )
}

export default Login