import React, { useState } from 'react';

const FAQs = () => {
    const [openIndicesLeft, setOpenIndicesLeft] = useState([]);
    const [openIndicesRight, setOpenIndicesRight] = useState([]);

    const toggleAccordionLeft = (index) => {
        if (openIndicesLeft.includes(index)) {
            setOpenIndicesLeft(openIndicesLeft.filter(i => i !== index));
        } else {
            setOpenIndicesLeft([...openIndicesLeft, index]);
        }
    };

    const toggleAccordionRight = (index) => {
      if (openIndicesRight.includes(index)) {
          setOpenIndicesRight(openIndicesRight.filter(i => i !== index));
      } else {
          setOpenIndicesRight([...openIndicesRight, index]);
      }
  };

    return (
        <div className="flex w-full min-h-screen lg:flex-col flex-col  py-12 px-4">
          <div className="flex lg:flex-col sm: flex-col justify-center py-12 px-4">
            <div className='text-center  text-2xl mt-5'>Asked Questions</div>
            <h2 className='text-center font-bold text-5xl mt-1'>FREQUENTLY ASKED QUESTIONS</h2>
          </div>
          <div className="flex flex-col lg:flex-row">
            {/* Left section */}
            <div className='lg:w-1/2 w-full flex flex-col justify-center mt-10 text-left items-center p-5'>
                {[
                    {
                        question: "How long does a typical flooring or tile installation take?",
                        answer: "The time depends on the size and complexity of the project, but most installations are completed within a few days."
                    },
                    {
                        question: "Do you offer free consultations or estimates?",
                        answer: "Yes, we provide free consultations to assess your project and offer personalized solutions."
                    },
                    {
                      question: "What area do you serve?",
                      answer: "We proudly serve the entire Greater Toronto Area (GTA)."
                    },
                    {
                      question: "What type of flooring do you install?",
                      answer: "We install hardwood, laminate, vinyl, and tile flooring to suit your preferences and needs.."
                    },
                    {
                      question: "How do you ensure new stairs integrate seamlessly with my existing flooring?",
                      answer: "Our team is skilled in matching new stair installations with your existing flooring, this includes precise color matching, material selection, and expert installation techniques."
                    } 
                ].map((faq, index) => (
                    <div key={index} className='w-full'>
                        <button 
                            onClick={() => toggleAccordionLeft(index)}
                            className='flex flex-col text-left mb-1 mt-2 w-full border-b-2  border-n-2'>
                            
                            <div className='flex justify-between items-center w-full mt-10  mb-10'> 
                            <span className='font-bold text-1xl text-n-7'>{faq.question}</span>
                            {openIndicesLeft.includes(index) ? <span>^</span> : <span>v</span>}
                            </div>
                        
                            <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                                openIndicesLeft.includes(index) ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                            <div className=' mb-6 text-n-2'>{faq.answer}</div>
                        </div>
                        </button>
                        
                    </div>
                ))}
            </div>



            {/* Right section */}
            <div className='lg:w-1/2 w-full flex flex-col justify-center mt-10 text-left items-center p-5'>
                    {[
                        {
                            question: "What is the best flooring option for high-traffic areas?",
                            answer: "For high-traffic areas, we recommend vinyl plank or hardwood. Both options are durable, resistant to wear, and easy to maintain."
                        },
                        {
                            question: "What types of stair renovations do you offer?",
                            answer: "We offer a wide range of stair renovation services including full staircase replacement, re-treading (replacing just the step surfaces), and custom railing installations. Whether you're looking to modernize your staircase or simply enhance safety features, we have solutions tailored to your needs."
                        },
                        {
                          question: "Can you install tiles in area other than bathrooms?",
                          answer: "Absolutely, we also install tiles in entryways, kitchens, laundry rooms, and even as decorative accents in living rooms. We can help you choose the right tile for any area of your home, ensuring durability and visual appeal."
                        },
                        {
                          question: "How should I prepare my home beforer the installation?",
                          answer: "Before installation, we recommend clearing the area of furniture and personal items. Our team will provide additional guidance during your consultation."
                        },
                        {
                          question: "Do you offer maintenance or repair services after installation?",
                          answer: "Yes, we offer maintenance and repair services to ensure the longevity of your floors, stairs, and tiles. Regular maintenance can extend the life of your installation."
                        } 
                    ].map((faq, index) => (
                        <div key={index} className='w-full'>
                            <button 
                                onClick={() => toggleAccordionRight(index)}
                                className='flex flex-col text-left mb-1 mt-2 w-full border-b-2  border-n-2'>
                                
                                <div className='flex justify-between items-center w-full mt-10  mb-10'> 
                                <span className='font-bold text-1xl text-n-7'>{faq.question}</span>
                                {openIndicesRight.includes(index) ? <span>^</span> : <span>v</span>}
                                </div>
                            
                                <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                                    openIndicesRight.includes(index) ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className=' mb-6 text-n-2'>{faq.answer}</div>
                            </div>
                            </button>
                            
                        </div>
                    ))}
                </div>
                </div>  


        </div>
    );
};

export default FAQs;
