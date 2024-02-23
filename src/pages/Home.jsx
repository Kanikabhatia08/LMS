import React from 'react'
import hero from '../images/Hero.png'
import {categories, featured} from '../data'
import Categories from '../components/Categories'
import Featured from '../components/Featured'
import AddOn1 from '../images/Maskgroup.png'
import AddOn2 from '../images/Maskgroup2.png'
import AddOn3 from '../images/Maskgroup3.png'
import grow from '../images/Grow.png'
import tick from '../images/Tick.png'
import student from '../images/student.png'


function Home() {
  
  return (
    <div>
      {/* Hero Section */}
      <section className="flex">
        <div className="relative">
            <img src={hero} className="w-screen" alt="banner"/>
        </div>

        <div className="absolute md:max-w-[30%] xl:max-w-[35%] left-[12%] md:top-[28%] xl:top-[32%] text-left" >
            
            <h1 className="font-medium md:text-3xl xl:text-6xl">
              Build Skills With Online Course</h1>
            
            <p className="text-gray md:py-6 xl:py-9 lg:text-base xl:text-xl">
              We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.</p>
              
            <button className="text-white bg-orange rounded-full md:text-base xl:text-xl py-3 px-4">
              Posts Comment</button>
              
        </div>
      </section>

    <div className='max-w-[73%] justify-center mx-auto my-10'>

    {/* Top Categories */}
      <section className='my-10'>
        <div className='flex justify-between '>
          <div>
            <h2 className="lg:text-3xl">Top Categories</h2>
            <p className="text-gray py-2">Explore our Popular Categories</p>
          </div>

          <div>
            <button className="rounded-full border-[#9D9D9D] border-2 px-4 py-3 hover:text-white hover:bg-orange hover:border-none">All Categories</button>
          </div>
        </div>
        <Categories categories={categories} />
      </section>

      {/* Featured Courses */}
      <section>
      <div className="flex justify-between mx-auto ">
        <div>
            <h2 className="lg:text-3xl">Featured Courses</h2>
            <p className="text-gray py-2">Explore our Popular Courses</p>
        </div>
        <div>
            <button className="rounded-full border-[#9D9D9D] border-2 px-4 py-3 hover:text-white hover:bg-orange hover:border-none">
              All Courses</button>
        </div>
      </div>
      <Featured featured={featured}/>

      </section>

      {/* add On 1 */}

      <div className="flex mx-auto justify-center my-10">
        <div className="relative">
            <img src={AddOn1}/>
        </div>
        <div className="absolute max-w-[25%] left-[14%] m-[3%]">
            <h3 className="text-gray text-xl">GET MORE POWER FROM</h3>
            <h1 className="text-3xl font-[590] py-2">LearnPress Add-Ons</h1>
            <p className="sm:hidden 2xl:block text-gray py-2 ">The next level of LearnPress - LMS WordPress Plugin. More Powerful, Flexible and Magical Inside.</p>
            <button className="rounded-full sm:mt-8 2xl-mt-0 px-4 py-3 text-white bg-orange border-none">Explore Course</button>
            
        </div>
      </div>

      {/* Status Grid */}
      <div className="justify-center mx-auto my-20">
        <div className=" row gap-3">
            <div className="col bg-[#F5F5F5] rounded-2xl text-center py-14 p-9">
                <h1  className="text-4xl font-bold text-orange"><span id="counter" data-value="30"></span>K+</h1>
                <p className="py-3 text-xl font-semibold">Active Students</p>
            </div>

            <div  className="col bg-[#F5F5F5] rounded-2xl text-center py-14 p-9">
                <h1 id="counter" data-value="500" className="text-4xl font-bold text-orange">0</h1>
                <p className="py-3 text-xl font-semibold">Total Courses</p>
            </div>

            <div className="col bg-[#F5F5F5] rounded-2xl text-center py-14 p-9">
                <h1 id="counter" data-value="158" className="text-4xl font-bold text-orange">0</h1>
                <p className="py-3 text-xl font-semibold">Instructors</p>
            </div>

            <div className="col bg-[#F5F5F5] rounded-2xl text-center py-14 p-9">
                <h1 className="text-4xl font-bold text-orange"><span id="counter" data-value="100" ></span>%</h1>
                <p className="py-3 text-xl font-semibold">Satisfaction Rate</p>
            </div>
        </div>

      </div>

      {/* Grow SKill */}
      <div className="flex scale-110 gap-20 mx-auto justify-center my-32">
        <div className="max-w-[85%]">
            <img src={grow} className='max-w-[110%]'/>
        </div>
        <div className="max-w-[40%]">
            <h1 className=" font-semibold lg:text-2xl 2xl:text-4xl">Grow Us Your Skill With LearnPress LMS</h1>
            <p className="py-3 text-gray 2xl:text-xl font-jost">We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.</p>
            <ul className="font-jost 2xl:text-lg">
                <li className="flex gap-2 m-3"><img src={tick}/>Certification</li>
                <li className="flex gap-2 m-3"><img src={tick}/>Certification</li>
                <li className="flex gap-2 m-3"><img src={tick}/>Certification</li>
                <li className="flex gap-2 m-3"><img src={tick}/>Certification</li>
            </ul>
            <button className="rounded-full mt-4 text-xl px-4 py-3 text-white bg-orange border-none">Explore Courses</button>
        </div>
      </div>

      {/* Add on 2 */}
      <div className="flex mx-auto justify-center m-20">
        <div className="relative">
            <img src={AddOn2}/>
        </div>
        <div className="absolute max-w-[45%] text-center lg:mt-8 2xl:mt-14">
            <h3 className=" text-lg font-semibold">PROVIDING AMAZING</h3>
            <h1 className="text-3xl font-[590] py-2">Education Wordpress Theme</h1>
            <p className=" text-gray lg:text-base 2xl:text-lg py-2 ">The next level of LMS WordPress Theme. Learn anytime and anywhere.</p>
            <button className="rounded-full lg:text-base 2xl:text-xl px-4 py-3 text-white bg-orange border-none">Explore Course</button>
            
        </div>
      </div>

      {/* Feedbacks */}
      

      {/* Add On 3 */}
      <div class="flex rounded-3xl mx-auto justify-center bg-gradient-to-r mt-20 from-[#C7E6F9] to-[#E8D1FE]">
        <div class="relative ">
            <img src={AddOn3}/>
        </div>
        <div class="absolute flex lg:mt-12 xl:mt-20 xl:gap-40">
            <div class="flex">
                <img src={student} class="lg:w-[19%]"/>
                <h1 class="lg:text-lg 2xl:text-2xl lg:mt-7 mx-3">Let's Start With Academy LMS</h1>
            </div>
            <div class="lg:mt-5 ">
                <button class="rounded-full lg:text-sm 2xl:text-xl border-orange text-orange border-2 px-4 py-3 ">I'm A Student</button>
                <button class="rounded-full lg:text-sm 2xl:text-xl ml-4 px-4 py-3 text-white bg-orange border-none">Become An Instructor</button>
            </div>
        </div>
      </div>


    </div>

    </div>
  )
}

export default Home