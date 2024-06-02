import React from 'react'

import Image from 'next/image'

import { FaBalanceScale } from "react-icons/fa"
import { RiStarFill, RiRocketFill, RiHandHeartFill, RiTestTubeFill, RiToolsFill, RiCheckDoubleFill, RiEyeFill } from 'react-icons/ri';
import SubHeader from '@/components/Base/SubHeader';

const Quality = () => {
  const principles = [
    {
      icon: <RiStarFill />,
      heading: "Customer Satisfaction is Paramount",
      text: "Our utmost priority is to ensure the complete satisfaction of our customers."
    },
    {
      icon: <RiRocketFill />,
      heading: "Pioneering Excellence in Our Field",
      text: "Within our industry, we relentlessly pursue leadership, aiming to set the benchmark for excellence."
    },
    {
      icon: <RiHandHeartFill />,
      heading: "Unwavering Commitment to Honoring Commitments",
      text: "We are resolute in fulfilling our commitments to the best of our capabilities."
    },
    {
      icon: <FaBalanceScale />,
      heading: "Integrity and Fairness in All Endeavors",
      text: "As an organization, we are unwaveringly dedicated to upholding integrity and fairness in every facet of our operations."
    }
  ];

  const steps = [
    {
      icon: <RiTestTubeFill />,
      heading: "Comprehensive Material Testing",
      text: "Our process begins with rigorous testing of raw materials to ensure their integrity and suitability for our products."
    },
    {
      icon: <RiToolsFill />,
      heading: "Real-time Application Assessment",
      text: "Our adept technical team conducts thorough on-line assessments, scrutinizing every facet of the application process."
    },
    {
      icon: <RiCheckDoubleFill />,
      heading: "Rigorous Component Inspection",
      text: "Each finished component undergoes a rigorous inspection process. This encompasses both written and approved protocols as part of our Quality Management System."
    },
    {
      icon: <RiEyeFill />,
      heading: "Visual Inspection",
      text: "We emphasize visual scrutiny to ensure that every component meets our exacting standards."
    }
  ];

  return (
    <div>
    <SubHeader data={{heading:'Quality',bredcrum:[{name:"Home",link:'/'},{name:"quality",link:"/quality"}],img:'/Images/Base/qualityImg.jpg'}}/>
  
      <div className='mt-10 mb-10 px-6 md:px-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <h2 className='w-full text-2xl font-exo border-b pb-2 relative'>
              Quality - Fusion Tech Alloys
              <div className='w-24 bg-mainRed h-1 mt-1'></div>
            </h2>
            <p className='mt-4 text-lg font-poppins'>
              Renowned for their exceptional quality and lasting endurance, our offerings have garnered widespread acclaim. Our production methodology is underpinned by a rigorous quality control framework aligned with global standards. This dedication to quality serves as a significant draw for our discerning clientele, resulting in a high level of consumer endorsement. 
            </p>
            <p className='mt-4 text-lg font-poppins'>
              Our team of adept quality control specialists diligently oversees the entire manufacturing continuum, commencing with the sourcing of raw materials and culminating with the dispatch of the finalized products. Furthermore, in accordance with the ethos of "Meeting our customers' needs and expectations, safeguarding the environment, and ensuring the well-being of our workforce," the General Director of Steel Builder has formulated a policy firmly grounded in the tenets of "Quality – Safety – Health – Environment." This policy is deeply rooted in the values of "Pride, Thoughtfulness, and Accountability."
            </p>
          </div>
          <div className='overflow-hidden p-1 border rounded-md'>
            <Image className="w-full h-full hover:scale-125 rounded-md transition-all duration-700 ease-in-out" src={"/Images/Base/qualityhome.jpg"} alt="Quality Image" height={600} width={700} />
          </div>
        </div>

        <div className='mt-10'>
        <div className='flex items-center justify-center flex-col gap-2 relative'>
        <h1 className=' font-thmFont text-[2.3rem] font-semibold text-thmBlack capitalize'>Our Principles</h1>
        <div className='w-[70px] h-[4px] bg-thmBase rounded-md'></div>
    
        </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
    
            {principles.map((point, index) => (

                <div key={index} className='flex items-center justify-center flex-col shadow-md p-4 gap-2 border rounded-md' >
            <span className='text-[2.5rem] text-thmBase'>{point.icon}</span>
              <h1 className='text-[1.1rem] font-medium font-oswald text-thmText text-center'>{point.heading}</h1>
              <p className='text-center text-[0.8rem] h-[80px] font-inter font-medium'>{point.text}</p>
            </div>
              
            ))}
          </div>
        </div>

        <div className='mt-12'>
        <div className='flex items-center justify-center flex-col gap-2 relative'>
        <h1 className=' font-thmFont text-[2.3rem] font-semibold text-thmBlack capitalize'>Quality Testing and Inspection Process</h1>
        <div className='w-[70px] h-[4px] bg-thmBase rounded-md'></div>
    
        </div>
       
          <p className='mt-4 text-center text-lg font-roboto text-gray-700'>
            Our meticulous testing and inspection procedures uphold the highest standards of quality assurance. These steps are executed under the purview of accredited and approved laboratories.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
            {steps.map((point, index) => (
                <div key={index} className='flex items-center justify-center flex-col shadow-md p-4 gap-2 border rounded-md' >
                <span className='text-[2.5rem] text-thmBase'>{point.icon}</span>
                  <h1 className='text-[1.1rem] font-medium font-oswald text-thmText text-center'>{point.heading}</h1>
                  <p className='text-center h-[90px] font-inter font-medium text-[0.8rem] '>{point.text}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quality
