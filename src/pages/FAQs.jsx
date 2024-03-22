import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";

import faq from '../images/Faq.png'

function FAQs() {
    const faqs = [
        {
            question: 'What Does Royalty Free Mean?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.'
        },
        {
            question: 'What Does Royalty Free Mean?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.'
        },
        {
            question: 'What Does Royalty Free Mean?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.'
        },
        {
            question: 'What Does Royalty Free Mean?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.'
        },
        {
            question: 'What Does Royalty Free Mean?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.'
        },
        {
            question: 'What Does Royalty Free Mean?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.'
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
                        className="relative hover:text-orange"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className='flex relative'>
                            <h2 className="cursor-pointer bg-footer w-full rounded-md p-3 ">{faq.question}</h2>
                            <p><FaAngleDown className='absolute right-[2%] mt-3 text-gray'/></p>
                        </div>
                    {activeIndex === index && (
                        <div className="absolute transition-shadow -mt-1 rounded-b-md duration-300 top-full left-0 bg-footer z-1 text-gray p-4">
                        <p>{faq.answer}</p>
                        </div>
                    )}
                    </div>
                ))}
                </div>
            <img src={faq} />
        </div>
    )
}

export default FAQs