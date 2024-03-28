import React, { useEffect, useState } from 'react'
import signupImg from '../images/signup.jpg'
import { Link, useNavigate} from 'react-router-dom';
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast';
import 'react-phone-number-input/style.css'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/slices/authSlice';
import { getUsers } from '../redux/slices/authSlice';
import { authenticate } from '../redux/slices/LoginSlice';
import PhoneInput from 'react-phone-number-input';
import { signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../Firebase/config';



function Signup() {

  const state = useSelector((state) => state)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phone: ""
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //password checkk
  const checkPassword =(pass) =>{
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
  if (!isContainsLowercase.test(pass)) {
    toast.error("Password must have at least one Lowercase Character.") ;
  }

  const isContainsNumber = /^(?=.*[0-9]).*$/;
  if (!isContainsNumber.test(pass)) {
    toast.error("Password must contain at least one Digit.");
  }

  const isContainsSymbol =
    /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
  if (!isContainsSymbol.test(pass)) {
    toast.error( "Password must contain at least one Special Symbol.");
  }

  const isValidLength = /^.{8,20}$/;
  if (!isValidLength.test(pass)) {
    toast.error ("Password must be 8-20 Characters Long.");
  }
  return;
  }
  
  function changeHandler(event){
    setFormData( (prevData) => (
        {
            ...prevData, 
            [event.target.name] : event.target.value
        }
    ))
}
useEffect(()=>{
  dispatch(getUsers())
},[])
// useEffect(()=>{
//   console.log(formData,"dataa stored")
//   localStorage.setItem("formData", JSON.stringify(formData))
// },[formData])

function submitHandler(event){
  event.preventDefault();

    if(formData.email.length === 0 && formData.password.length === 0){
      toast.error("Enter Email & Password");
      return;

    }
    if(formData.password !== formData.confirmPassword){
        toast.error("Passwords do not Match!")

    }
    if(formData.phone.length < 10 || formData.phone.length > 10){
      toast.error("Phone number should be of 10 numbers")

    }
    if(formData.password){
      checkPassword(formData.password); 
    }
    
    if(state?.users.length >=1){
      // console.log(formData,"formmmmmmmm")

      state?.users?.data?.map((user) =>{
        if(user.email === formData.email){
          toast.error("User already exists")
        }
      })
      return;
    }

    else{
      localStorage.setItem("setIsLoggedIn", JSON.stringify(true));
      dispatch(registerUser(formData))
      dispatch(authenticate(true));
      navigate("/Courses")
      toast.success("Account Created")
    }

      // let stored_users = JSON.parse(localStorage.getItem('users'));
      // console.log(stored_users, "hi", localStorage.getItem('users'))
      // if(stored_users) {
      //     stored_users.push({mail: mail.value, password: pass1.value});
      //     localStorage.setItem('users', JSON.stringify(stored_users));
      // } 
      // else {
      //     localStorage.setItem('users', JSON.stringify([{mail: mail.value, password: pass1.value}]));
      // }
      // alert('Your account has been created');  

      // let storedUsers = JSON.parse(localStorage.getItem('formData'));
      // if(storedUsers){
      //   storedUsers.push(formData);
      //   localStorage.setItem("formData", JSON.stringify(storedUsers))
      // }
      // else{
      //   localStorage.setItem("formData", JSON.stringify([formData]))
      // }
      // setIsLoggedIn(true)
      // if(state?.users){
      //   // console.log(state.users)
      //   state?.users?.data?.map((user) =>{
      //     if(user.email == formData.email){
      //       toast.error("User already exists")
      //     }
      //     else{
      //       localStorage.setItem("setIsLoggedIn", JSON.stringify(true));
      //       dispatch(registerUser(formData))
      //       dispatch(authenticate(true));
      //       navigate("/Courses")
      //       // console.log(formData)
      //       toast.success("Account Created")
      //     }
      //   })
        
      // }
}

  return (
    <div>
      <section className="max-w-[80%] mx-auto justify-center gap-10 flex">
        <div className="max-w-[40%] my-16 order-2">
            <img src={signupImg} alt='Signup' laoding='lazy' className="rounded-[80px]"/>
        </div>

        <form onSubmit={submitHandler}>
          <div className=" border-[1px] order-1 my-[12%] border-lightgray rounded-2xl shadow-lg p-9 ">
            <h1 className="text-3xl font-semibold">Register</h1>
            <div className="flex-col ">
                <input 
                  type="email"
                  placeholder="Email*" 
                  name="email" 
                  value={formData.email}
                  onChange={changeHandler}
                  className="w-full my-4 border-[1px] border-lightgray rounded-lg p-2 text-lg max-w-full"
                />
                <input 
                  type={showPassword ? ("text") : ("password")}
                  value={formData.password}
                  name='password'
                  onChange={changeHandler} 
                  placeholder="Password*"  
                  className="w-full mb-4 border-[1px] relative border-lightgray rounded-lg p-2 text-lg max-w-full"
                />
                <span 
                  className='absolute mt-2 right-[47%] cursor-pointer'
                  onClick={()=>{setShowPassword((prev) => !prev)}}>
                      {
                          showPassword ? 
                          (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) : 
                          (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>)
                      }
                </span>
                <input 
                  type={showConfirmPassword ? ("text") : ("password")}
                  value={formData.confirmPassword}
                  name='confirmPassword'
                  onChange={changeHandler} 
                  placeholder="Confirm Password*"  
                  className="w-full mb-4 border-[1px] border-lightgray relative z-0 rounded-lg p-2 text-lg max-w-full"
                />
                <span 
                  className='absolute mt-2 right-[47%] cursor-pointer'
                  onClick={()=>{setShowConfirmPassword((prev) => !prev)}}>
                      {
                          showConfirmPassword ? 
                          (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) : 
                          (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>)
                      }
                </span>

              <input 
                defaultCountry='IN'
                name='phone'
                value={formData.phone}
                onChange={changeHandler}
                placeholder="Phone No.*"
                className="w-full mb-4 border-[1px] border-lightgray rounded-lg p-2 text-lg max-w-full"
              />

            </div>
            <button type="submit" className="rounded-full py-2 text-xl my-4 text-white bg-orange border-none w-full">Register</button>
            <p>Have an account? <button><Link to="/login" className="text-orange hover:underline"> Log In</Link> </button> </p>
          </div>
        </form>
        </section>
    </div>
  )
}

export default Signup