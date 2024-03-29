import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";

import faq from '../images/Faq.png'

function FAQs() {
    const faqs = [
        {
            question: 'What does LMS mean for an organization?',
            answer: 'An LMS means you have an online tool to efficiently manage employee training, development, and engagement—your modern learning solution. An LMS is a website where your organization can put its training materials, frequently used documents, and communicate directly with your people.'
        },
        {
            question: 'What are the benefits of an LMS?',
            answer: 'The primary benefits of using an LMS are in training and communication in one easily accessible platform. Content creation tools within the LMS power up course authoring for you to build learning paths, for things like onboarding and career development.  '
        },
        {
            question: 'Why should I use an LMS?',
            answer: 'You should use an LMS simply because it improves your people operations. The best LMS platforms fit the workflow of you and your people, making it easy to train, onboard new employees, and communicate consistently across the country in different locations.'
        },
        {
            question: 'What are assessments and testing?',
            answer: 'Assessments and testing are key because they help track learners’ progress and development. You should check with the vendor to see what types of assessments their LMS offers. Multiple choice quizzes are great, but sometimes there is a need    to show someone in person that they’ve mastered a new skill.'
        },
        {
            question: 'What is instructor-led training?',
            answer: 'Instructor-led training is the classic, traditional way of training and learning. You’ve got a teacher and a bunch of students, and the instructor teaches those students through formal means in real time.'
        },
        {
            question: 'Why do I need social learning?',
            answer: 'The ability to share content with your colleagues brings people together and gives learners a feel for the big-picture direction of an organization. Conversational threads boost efficiency since learners find exactly what they need to know and refer back to the answer as needed.'
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null)
    
    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };
    
    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    return (
        <div className='max-w-[73%] mx-auto mt-10'>
            <h1 className='text-4xl font-semibold'>FAQ's</h1>
            <div className="grid grid-cols-2 gap-4 my-10">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="relative hover:text-orange hover:mb-32 "
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className='flex relative'>
                            <h2 className="cursor-pointer bg-footer w-full font-semibold rounded-md p-3 ">{faq.question}</h2>
                            <p><FaAngleDown className='absolute right-[2%] mt-3 text-gray'/></p>
                        </div>
                    {activeIndex === index && (
                        <div className="absolute duration-300 top-full left-0 bg-footer text-gray px-3 py-2">
                            <p>{faq.answer}</p>
                        </div>
                    )}
                    </div>
                ))}
                </div>
            <img src={faq} alt='faqs' />
        </div>
    )
}

export default FAQs