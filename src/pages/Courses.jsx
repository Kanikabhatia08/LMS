import React from 'react'
import Product from '../components/Product'
import { products } from '../data'


function Courses() {

  return (

    <div class="max-w-[73%] mx-auto justify-center">
      <header className='flex justify-between items-center '>
          <div className="text-3xl font-semibold p-4">COURSE LIST</div>
      </header>

      <div className='grid grid-cols-3 text-center gap-4  my-10'>
      {
        products.map((post) =>(
        <Product key={post.id} post={post}/>

        ))
      }
      </div>
    </div>

  )
}

export default Courses