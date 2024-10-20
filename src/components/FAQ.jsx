import React, { useState } from 'react';
import Banner from './Banner';
import { faq } from "../constants";
import Quote from './Quote';

const FAQs = ({showBanner}) => {
    const [openIndicesLeft, setOpenIndicesLeft] = useState([]);


    const toggleAccordionLeft = (index) => {
        if (openIndicesLeft.includes(index)) {
            setOpenIndicesLeft(openIndicesLeft.filter(i => i !== index));
        } else {
            setOpenIndicesLeft([...openIndicesLeft, index]);
        }
    };


    return (
    <>
        <div>
            {showBanner && <Banner title="FAQ" />}
        </div>
            <div className="flex w-full min-h-screen lg:flex-col flex-col  py-12 px-4">
            <div className="flex lg:flex-col sm: flex-col justify-center py-12 px-4">
                <div className='text-center  text-2xl mt-5'>Asked Questions</div>
                <h2 className='text-center font-bold text-5xl mt-1'>FREQUENTLY ASKED QUESTIONS</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 px-[10%]">               
                {faq.map((faq, index) => (
                    <div key={index} className=' pl-5 lg:pl-10'>
                        <button 
                            onClick={() => toggleAccordionLeft(index)}
                            className='flex flex-col text-left mb-1 mt-2 w-full border-b-2  border-n-2'>
                            
                            <div className='flex justify-between items-center w-full mt-10  mb-10'> 
                            <span className='font-bold text-1xl text-n-7'>{faq.question}</span>
                            {openIndicesLeft.includes(index) ? <span>^</span> : <span>v</span>}
                            </div>
                        
                            <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out text-n-2/80  ${
                                openIndicesLeft.includes(index) ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                            <div className=' mb-6 text-n-2'>{faq.answer}</div>
                        </div>
                        </button>
                        
                    </div>
                ))}
            </div>
        </div>
        <Quote />
    </>
    );
};

export default FAQs;
