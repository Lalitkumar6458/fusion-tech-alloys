
"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ContactProduct = () => {  
    const router=useRouter()
  return (
    <div className='bg-thmBlack'>
      <div className='bg-ContactImg w-full bg-no-repeat bg-cover bg-center lg:h-[400px] mb-7 flex items-center justify-center flex-col py-6'>
        <div className='w-[90%] md:w-[70%] lg:w-[70%] flex items-center flex-col gap-3'>
          <h2 className='text-[2rem] md:text-[2.4rem] lg:text-[2.6rem] font-Rubik font-semibold text-thmBase text-center'>Contact Fusion Tech Alloys Today</h2>
          <p className='text-[1rem] md:text-[1.3rem] font-inter font-medium text-white text-center'>Choose Fusion Tech Alloys for your bolt needs and experience the difference quality, expertise, and commitment can make in your projects. Contact us today to discuss your requirements, request a quote, or place an order. Join countless satisfied customers who rely on Fusion Tech Alloys for premium bolts and exceptional service.</p>
          <button onClick={()=>router.push("/contact")} className='py-2 mt-6 px-5 bg-thmBase text-white text-[1.2rem] font-Poppins font-medium rounded-md flex items-center gap-2 hover:scale-125 transition-scale duration-700 ease-in-out'>
            Let's Contact Us <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactProduct;
