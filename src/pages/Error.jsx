import React from 'react'
import error from "../images/Error.png"

function Error() {
  return (
    <div className='my-10 max-w-[55%] flex flex-col mx-auto justify-center '>
        <h1 className='text-5xl font-bold'>Error</h1>
        <img src={error} alt='error' className='w-[95%] mr-28'/>
    </div>
  )
}

export default Error