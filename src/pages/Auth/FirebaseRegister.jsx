import React, { useEffect, useState } from "react";
import signupImg from "../../images/signup.jpg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import "react-phone-number-input/style.css";
import { useAuth } from "../../contexts/authContext";
import { doCreateUserWithEmailAndPassword } from "../../Firebase/auth";


function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const { userLoggedIn } = useAuth()
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  //password checkk
    const checkPassword = (pass) => {
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(pass)) {
        toast.error("Password must have at least one Lowercase Character.");
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(pass)) {
        toast.error("Password must contain at least one Digit.");
    }

    const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if (!isContainsSymbol.test(pass)) {
        toast.error("Password must contain at least one Special Symbol.");
    }

    const isValidLength = /^.{8,20}$/;
    if (!isValidLength.test(pass)) {
        toast.error("Password must be 8-20 Characters Long.");
    }
    return;
};

const submitHandler = async(event) => {
    event.preventDefault();
    try{
        if (email.length === 0 && password.length === 0) {
            toast.error("Enter Email & Password");
            return;
        }
        if ( password !==  confirmPassword) {
            toast.error("Passwords do not Match!");
        }
        if ( phone.length < 10 ||  phone.length > 10) {
            toast.error("Phone number should be of 10 numbers");
        }
        if ( password) {
            checkPassword( password);
        }
        if(!isRegistering) {
                setIsRegistering(true)
                await doCreateUserWithEmailAndPassword(email, password)
        }   
    }

    catch(error){
        toast.error(error.message)
        setIsRegistering(false)
    }


}

    return (
        
        <div>
            {userLoggedIn && (<Navigate to={'/'} replace={true} />)}
        <section className="max-w-[80%] mx-auto justify-center gap-10 flex">
            <div className="max-w-[40%] my-16 order-2">
            <img
                src={signupImg}
                alt="Signup"
                laoding="lazy"
                className="rounded-[80px]"
            />
            </div>

            <form onSubmit={submitHandler}>
            <div className=" border-[1px] order-1 my-[12%] border-lightgray rounded-2xl shadow-lg p-9 ">
                <h1 className="text-3xl font-semibold">Register</h1>
                <div className="flex-col ">
                <input
                    type="email"
                    placeholder="Email*"
                    name="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    className="w-full my-4 border-[1px] border-lightgray rounded-lg p-2 text-lg max-w-full focus:outline-none
                    focus:border-none focus:ring-orange focus:ring-2 invalid:border-red-500 invalid:border-2 focus:invalid:ring-red-500"
                    
                />
                <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    name="password"
                    onChange={(e) => { setPassword(e.target.value) }}
                    placeholder="Password*"
                    className="w-full mb-4 border-[1px] relative border-lightgray rounded-lg p-2 text-lg max-w-full focus:outline-none
                    focus:border-none focus:ring-orange focus:ring-2 invalid:border-red-500 invalid:border-2  focus:invalid:ring-red-500"
                />
                <span
                    className="absolute mt-2 right-[48%] cursor-pointer"
                    onClick={() => {
                    setShowPassword((prev) => !prev);
                    }}
                >
                    {showPassword ? (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                    ) : (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                    )}
                </span>
                <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    name="confirmPassword"
                    onChange={(e) => { setconfirmPassword(e.target.value) }}
                    placeholder="Confirm Password*"
                    className="w-full mb-4 border-[1px] border-lightgray relative z-0 rounded-lg p-2 text-lg max-w-full focus:outline-none
                        focus:border-none focus:ring-orange focus:ring-2 invalid:border-red-500 invalid:border-2  focus:invalid:ring-red-500"
                />
                <span
                    className="absolute mt-2 right-[48%] cursor-pointer"
                    onClick={() => {
                    setShowConfirmPassword((prev) => !prev);
                    }}
                >
                    {showConfirmPassword ? (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                    ) : (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                    )}
                </span>

                <input
                    name="phone"
                    type='tel'
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value) }}
                    placeholder="Phone No.*"
                    className="w-full mb-4 border-[1px] border-lightgray rounded-lg p-2 text-lg max-w-full focus:outline-none
                        focus:border-none focus:ring-orange focus:ring-2 invalid:border-red-500 invalid:border-2 focus:invalid:ring-red-500"
                        
                />
                </div>
                {errorMessage && (
                                <span className='text-red-600 font-bold'>{errorMessage}</span>
                            )}
                <button
                    type="submit"
                    className={`rounded-full py-2 text-xl my-4 border-none w-full ${isRegistering ? 'bg-gray-300 cursor-not-allowed' : ' text-white bg-orange'}`}
                > 
                    {isRegistering ? 'Signing Up...' : 'Sign Up'}

                </button>
                <p>
                Have an account?{" "}
                <button>
                    <Link to="/login" className="text-orange hover:underline">
                    {" "}
                    Log In
                    </Link>{" "}
                </button>{" "}
                </p>
            </div>
            </form>
        </section>
        </div>
    );
}

export default Signup;
