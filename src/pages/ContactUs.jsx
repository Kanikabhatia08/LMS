import React from 'react'
import phone from "../images/phone.png"
import email from "../images/email.png"

function ContactUs() {
    return (
    <div className='max-w-[80%] my-10 mx-auto flex flex-col'>
        <div className='flex justify-between'>
            <div className='w-[35%]'>
                <h1 className='text-4xl mb-4'>Need A Direct Line?</h1>
                <p className='text-gray'>Want to get in touch? We'd love to hear from you. Here's how you can reach us...</p>
                <div className='flex gap-4 my-4'>
                    <img src={phone} alt="phone"/>
                    <div className='gap-y-2 flex flex-col'>
                        <h3 className='text-base text-gray'>Phone</h3>
                        <p className='font-semibold'>(123) 456 789</p>
                    </div>
                </div>

                <div className='flex gap-4 my-4'>
                    <img src={email} alt="email"/>
                    <div className='gap-y-2 flex flex-col'>
                        <h3 className='text-base text-gray'>Email</h3>
                        <p className='font-semibold'>Kanika08sep@gmail.com</p>
                    </div>
                </div>
            </div>

            {/* Google mapp */}
            <div className='w-[70%]'>

            </div>

        </div>
        <div className='w-full my-10'>
            <h1 className='text-4xl'>Contact Us</h1>
            <p className='text-gray'>Your email address will not be published. Required fields are marked *</p>
            <form className='flex flex-col my-3 gap-3'>
                <div className='flex justify-between gap-2'>
                    <input 
                        type='text'
                        placeholder='Name*'
                        className='border border-gray w-full rounded-md p-2'
                    />

                    <input 
                        type="email" 
                        placeholder='Email*'
                        className='border border-gray w-full rounded-md p-2'
                    />
                </div>
                
                <textarea
                    placeholder='Comment'
                    className='border border-gray w-full rounded-md p-2 pb-5'
                />

                <div className='gap-2 flex text-gray'>
                    <input 
                        type='checkbox' 
                    />
                    <label>Save my name, email in this brower for the next time I comment</label>
                </div>
                
                <button className='rounded-full w-[15%] lg:text-base 2xl:text-lg px-3 py-[9px] text-white bg-orange border-none"'>Post Comment</button>
            </form>        
        </div>
        
    </div>
    )
}

export default ContactUs