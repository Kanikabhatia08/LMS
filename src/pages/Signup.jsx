import React, { useState } from 'react'
import signupImg from '../images/signup.jpg'
import { Link, useNavigate} from 'react-router-dom';
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast';

function Signup({setIsLoggedIn}) {


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phone: ""
  });

  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  function changeHandler(event){
    setFormData( (prevData) => (
        {
            ...prevData, 
            [event.target.name] : event.target.value
        }
    ))

}

function submitHandler(event){
    event.preventDefault();
    if(formData.password != formData.confirmPassword){
        toast.error("Passwords do not Match!")
        return;
    }
    if(formData.password.length < 6 && formData.confirmPassword.length < 6 ){
        toast.error("Password should contain 6 digits")
    }
    setIsLoggedIn(true)
    toast.success("Account Created")
    navigate("/Courses")
}

  return (
    <div>
      <section className="max-w-[80%] mx-auto justify-center gap-6 flex">
            <div className="max-w-[45%] mt-16 order-2">
                <img src={signupImg} className="rounded-[80px]"/>
            </div>
            <form onsubmit="return false">
                <div className=" border-[1px] order-1 mt-28 border-lightgray py-16 rounded-2xl shadow-lg p-9 ">
                    <h1 className="text-3xl font-semibold">Register</h1>
                    <div className="flex-col ">
                        <input 
                          type="email" 
                          placeholder="Email*" 
                          name="mail" 
                          value={formData.email}
                          onChange={changeHandler}
                          className="w-full my-4 border-[1px] border-lightgray rounded-lg p-2 text-lg max-w-full"
                        />
                        <input 
                          type={showPassword ? ("text") : ("password")}
                          value={formData.password}
                          onChange={changeHandler} 
                          placeholder="Password*"  
                          className="w-full mb-4 border-[1px] relative border-lightgray rounded-lg p-2 text-lg max-w-full"
                        />
                        <span 
                          className='absolute mt-2 right-[50%] cursor-pointer'
                          onClick={()=>{setShowPassword((prev) => !prev)}}>
                              {
                                  showPassword ? 
                                  (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) : 
                                  (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>)
                              }
                        </span>
                        <input 
                          type="password" 
                          id="pass2" 
                          placeholder="Confirm Password*"  
                          className="w-full mb-4 border-[1px] border-lightgray relative z-0 rounded-lg p-2 text-lg max-w-full"
                        />
                        <span 
                          className='absolute mt-2 right-[50%] cursor-pointer'
                          onClick={()=>{setShowPassword((prev) => !prev)}}>
                              {
                                  showConfirmPassword ? 
                                  (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) : 
                                  (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>)
                              }
                        </span>

                        <input type="tel" id="phone" placeholder="Phone No.*" className="w-full mb-4 border-[1px] border-lightgray rounded-lg p-2 text-lg max-w-full"/>

                    </div>
                    <input type="submit" onclick="store()" id="submit" value="Register" className="rounded-full py-2 text-xl my-4 text-white bg-orange border-none w-full"/>
                    <p>Have an account? <Link to="/login" className="text-orange hover:text-red-600">Log In</Link> </p>
                    </div>

            </form>
        </section>
    </div>
  )
}

export default Signup