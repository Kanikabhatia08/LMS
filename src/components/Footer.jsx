import React from 'react'
import Flogo from '../images/logoFooter.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
        <section className="bg-footer">
            <div className="row max-w-[73%] mx-auto py-20">
            
                <div className="col-lg-4">
                    <img src={Flogo} className="w-[50%]"/>
                    <p className="py-10 text-gray font-jost lg:text-base 2xl:text-lg">
                    Empowering learners worldwide, EduPress is your gateway to a world of knowledge. With cutting-edge technology and comprehensive resources, we pave the path to educational excellence. Join us in redefining learning experiences, one click at a time. Unlock your potential with EduPress today.
                    </p>
                </div>

                <div className="col ml-9">
                    <h5 className="text-uppercase text-2xl font-semibold">Get help</h5>
                    <ul className="py-7 text-gray font-jost lg:text-base 2xl:text-xl leading-10">
                        <li>
                            <Link to="/contactUs" className="hover:text-orange hover:no-underline">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/blogs" className="hover:text-orange hover:no-underline">Latest Articles</Link>
                        </li>
                        <li>
                            <Link to="/faqs" className="hover:text-orange hover:no-underline">FAQ</Link>
                        </li>
                        
                    </ul>

                </div>

                <div className="col">
                    <h5 className="text-uppercase text-2xl font-semibold">Programs</h5>
                    <ul className="py-7 text-gray font-jost lg:text-base 2xl:text-lg leading-10">
                        <li>
                            <a href="#!" className="hover:text-orange hover:no-underline">Art & Design</a>
                        </li>
                        <li>
                            <a href="#!" className="hover:text-orange hover:no-underline">Business</a>
                        </li>
                        <li>
                            <a href="#!" className="hover:text-orange hover:no-underline">IT & Software</a>
                        </li>
                        <li>
                            <a href="#!" className="hover:text-orange hover:no-underline">Languages</a>
                        </li>
                        <li>
                            <a href="#!" className="hover:text-orange hover:no-underline">Programming</a>
                        </li>
                        
                    </ul>

                </div>

                <div className="col-lg-3">
                    <h5 className="text-uppercase text-2xl font-semibold">Contact us</h5>
                    <div className="text-gray font-jost lg:text-base 2xl:text-lg py-7 ">
                        <p>Address: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA</p>
                    </div>
                    <div className="text-gray font-jost lg:text-base 2xl:text-lg">
                        <p>Tel: + (123) 2500-567-8988</p>
                        <p>Mail: supportlms@gmail.com</p>
                    </div>

                    <div>
                        <ul className="flex gap-5 py-4 text-xl text-gray">
                            <li><i className="fa-brands fa-facebook-f hover:text-orange"></i></li>
                            <li><i className="fa-brands fa-pinterest-p hover:text-orange"></i></li>
                            <li><i className="fa-brands fa-x-twitter hover:text-orange"></i></li>
                            <li><i className="fa-brands fa-square-instagram hover:text-orange"></i></li>
                            <li><i className="fa-brands fa-youtube hover:text-orange"></i></li>
                        </ul>
                    </div>

                </div>

            </div>

            {/*  copyright  */}
            <div className="mx-auto justify-center pb-3 text-center text-xl text-gray">
                <p>Copyright © 2024 LearnPress LMS | Powered by LearnPress LMS</p>

            </div>

        </section>

        </div>
    )
}

export default Footer