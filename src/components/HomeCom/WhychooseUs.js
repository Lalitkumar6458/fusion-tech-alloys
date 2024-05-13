import React from 'react'
import { FaGlobe, FaThumbsUp, FaClock, FaCertificate } from 'react-icons/fa';
const WhychooseUs = () => {
const Data=[ {
    heading: "Global Reach",
    desc: "We supply our products to various parts of the world, ensuring widespread accessibility.",
    icon: <FaGlobe />
  },
  {
    heading: "Customer Satisfaction",
    desc: "Our commitment ensures to provide utmost satisfaction to our clients.",
    icon: <FaThumbsUp />
  },
  {
    heading: "On-time Deliveries",
    desc: "We guarantee timely deliveries to meet your unique demands.",
    icon: <FaClock />
  },
  {
    heading: "Quality Assurance",
    desc: "Our quality assurance plans are meticulously prepared to meet the highest standards.",
    icon: <FaCertificate />
  }
]

  return (
    <div className='px-[5%] relative  lg:h-screen py-5 flex flex-col justify-center items-center'>
    <div className='flex items-center justify-center flex-col gap-2 relative'>
    <h1 className=' font-thmFont text-[2.3rem] font-semibold text-thmBlack'>Why Choose Us</h1>
    <div className='w-[70px] h-[4px] bg-thmBase rounded-md'></div>
    <p className=' font-oswald font-medium text-[1.4rem] text-thmText'>We deliver superior quality products and uphold exceptional customer service standards.
    </p>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px] mt-[60px]'>
    {
        Data.map((item,i)=>{
            return <div className='flex items-center justify-center flex-col shadow-md p-4 gap-2 border rounded-md' key={i}>
            <span className='text-[2.5rem] text-thmBase'>{item.icon}</span>
              <h1 className='text-[1.4rem] font-medium font-oswald text-thmText'>{item.heading}</h1>
              <p className='text-center h-[80px] font-inter font-medium'>{item.desc}</p>
            </div>
        })
    }
    </div>
    </div>
  )
}

export default WhychooseUs