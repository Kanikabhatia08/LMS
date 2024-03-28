import React, { useState } from 'react'
import hero from '../images/Hero.png'
import {categories, featured} from '../data'
import Categories from '../components/Home/Categories'
import Featured from '../components/Home/Featured'
import AddOn1 from '../images/Maskgroup.png'
import AddOn2 from '../images/Maskgroup2.png'
import AddOn3 from '../images/Maskgroup3.png'
import grow from '../images/Grow.png'
import tick from '../images/Tick.png'
import student from '../images/student.png'
import CountUp from 'react-countup'
import quotes from "../images/Quotes.png"
import ScrollTrigger from 'react-scroll-trigger'



function Home() {

  const [counter, setCounter] = useState(false);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="flex">
        <div className="relative">
            <img src={hero} className="w-screen" alt="banner"/>
        </div>

        <div className="absolute md:max-w-[30%] xl:max-w-[35%] left-[12%] md:top-[28%] xl:top-[32%] text-left" >
            
            <h1 className="font-medium md:text-3xl xl:text-6xl animate-fadeLeft">
              Build Skills With Online Course</h1>
            
            <p className="text-gray md:py-6 xl:py-9 lg:text-base xl:text-xl">
              We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.</p>
              
            <button className="text-white bg-orange rounded-full md:text-base xl:text-xl py-3 px-4 animate-slideUp">
              Posts Comment</button>
              
        </div>
      </section>

    <div className='max-w-[73%] flex-col flex gap-14 justify-center mx-auto my-14 '>

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

      <div className="flex mx-auto justify-center ">
        <div className="relative">
            <img src={AddOn1} alt='addOn1'/>
        </div>
        <div className="absolute max-w-[25%] left-[14%] m-[3%]">
            <h3 className="text-gray text-xl">GET MORE POWER FROM</h3>
            <h1 className="text-3xl font-[590] py-2">LearnPress Add-Ons</h1>
            <p className="sm:hidden 2xl:block text-gray py-2 ">The next level of LearnPress - LMS WordPress Plugin. More Powerful, Flexible and Magical Inside.</p>
            <button className="rounded-full sm:mt-8 2xl-mt-0 px-4 py-3 text-white bg-orange border-none">Explore Course</button>
            
        </div>
      </div>

      {/* Status Grid */}
      <div className="justify-center counter">
        <ScrollTrigger onEnter={()=>{setCounter(true)}} onExit={() =>{setCounter(false)}}>
        <div className=" row gap-3">
            <div className="col bg-[#F5F5F5] rounded-2xl text-center py-14 p-9">
                <h1  className="text-4xl font-bold text-orange">{counter && <CountUp  start={0} end={38} duration={10} suffix="K+"/> }</h1>
                <p className="py-3 text-xl font-semibold">Active Students</p>
            </div>

            <div  className="col bg-[#F5F5F5] rounded-2xl text-center py-14 p-9">
                <h1 className="text-4xl font-bold text-orange">{counter && <CountUp start={0} end={448} duration={2} />}</h1>
                <p className="py-3 text-xl font-semibold">Total Courses</p>
            </div>

            <div className="col bg-[#F5F5F5] rounded-2xl text-center py-14 p-9">
                <h1 className="text-4xl font-bold text-orange">{counter && <CountUp start={0} end={169} duration={4}/>}</h1>
                <p className="py-3 text-xl font-semibold">Instructors</p>
            </div>

            <div className="col bg-[#F5F5F5] rounded-2xl text-center py-14 p-9">
                <h1 className="text-4xl font-bold text-orange">{counter && <CountUp start={0} end={100} duration={8} suffix="%"/>}</h1>
                <p className="py-3 text-xl font-semibold">Satisfaction Rate</p>
            </div>
        </div>
        </ScrollTrigger>
        

      </div>

      {/* Grow SKill */}
      <div className="flex gap-20 mx-auto justify-between ">
        <div>
            <img src={grow} alt='grow'/>
        </div>
        <div className="max-w-[40%]">
            <h1 className=" font-semibold lg:text-2xl 2xl:text-4xl">Grow Us Your Skill With LearnPress LMS</h1>
            <p className="py-3 text-gray 2xl:text-xl font-jost">We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.</p>
            <ul className="font-jost 2xl:text-lg">
                <li className="flex gap-2 m-3"><img src={tick} alt='tick'/>Certification</li>
                <li className="flex gap-2 m-3"><img src={tick} alt='tick'/>Certification</li>
                <li className="flex gap-2 m-3"><img src={tick} alt='tick'/>Certification</li>
                <li className="flex gap-2 m-3"><img src={tick} alt='tick'/>Certification</li>
            </ul>
            <button className="rounded-full mt-4 text-xl px-4 py-3 text-white bg-orange border-none">Explore Courses</button>
        </div>
      </div>

      {/* Add on 2 */}
      <div className="flex mx-auto my-20 justify-center ">
        <div className="relative">
            <img src={AddOn2}  alt='AddOn2'/>
        </div>
        <div className="absolute max-w-[45%] text-center lg:mt-8 2xl:mt-14">
            <h3 className=" text-lg font-semibold">PROVIDING AMAZING</h3>
            <h1 className="text-3xl font-[590] py-2">Education Wordpress Theme</h1>
            <p className=" text-gray lg:text-base 2xl:text-lg py-2 ">The next level of LMS WordPress Theme. Learn anytime and anywhere.</p>
            <button className="rounded-full lg:text-base 2xl:text-xl px-4 py-3 text-white bg-orange border-none">Explore Course</button>
            
        </div>
      </div>

      {/* Feedbacks */}
      <div className="mx-auto justify-center text-center">
                <div>
                    <h1 className="text-3xl font-semibold py-2">Student feedbacks</h1>
                    <h3 className="text-gray font-jost text-xl">What Students Say About Academy LMS</h3>
                </div>
                <div>
                    <div className="row gap-4 mt-10 justify-center mx-auto text-left">
                        <div className="col border-lightgray border-2 rounded-2xl p-8">
                            <img src={quotes} alt='quotes'/>
                            <p className="text-lg py-3">I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound</p>
                            <h2 className="text-xl font-semibold">Taylor Swift</h2>
                            <p className="text-gray">Designer</p>
                        </div>

                        <div className="col border-lightgray border-2 rounded-2xl p-8">
                            <img src={quotes} alt='quotes'/>
                            <p className="text-lg py-3">I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound</p>
                            <h2 className="text-xl font-semibold">Selena Gomez</h2>
                            <p className="text-gray">Developer</p>
                        </div>

                        <div className="col border-lightgray border-2 rounded-2xl p-8">
                            <img src={quotes} alt='quotes'/>
                            <p className="text-lg py-3">I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound</p>
                            <h2 className="text-xl font-semibold">Harry Styles</h2>
                            <p className="text-gray">Designer</p>
                        </div>

                        <div className="col border-lightgray border-2 rounded-2xl p-8">
                            <img src={quotes} alt='quotes'/>
                            <p className="text-lg py-3">I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound</p>
                            <h2 className="text-xl font-semibold">Justin Bieber</h2>
                            <p className="text-gray">Java Instructor</p>   
                        </div>

                    </div>
                </div>
            </div>

      {/* Add On 3 */}
      <div className="flex rounded-3xl mx-auto justify-center bg-gradient-to-r  from-[#C7E6F9] to-[#E8D1FE]">
        <div className="relative ">
            <img src={AddOn3} alt='AddOn3'/>
        </div>
        <div className="absolute flex lg:mt-16 gap-40 lg:justify-between  ">
            <div className="flex">
                <img src={student} alt='student' className="lg:w-[19%]"/>
                <h1 className="lg:text-lg 2xl:text-2xl lg:mt-7 mx-3">Let's Start With Academy LMS</h1>
            </div>
            <div className="lg:mt-4 gap-3 flex">
                <button className="rounded-full lg:text-sm 2xl:text-xl border-orange text-orange border-2 px-4 py-3 
                                  transform transition duration-500 hover:scale-110 hover:font-semibold">I'm A Student</button>
                <button className="rounded-full lg:text-sm 2xl:text-xl px-4 py-3 text-white bg-orange border-none
                                  transform transition duration-500 hover:scale-110 hover:font-semibold">Become An Instructor</button>
            </div>
        </div>
      </div>

    </div>

    </div>

  )
}

export default Home;