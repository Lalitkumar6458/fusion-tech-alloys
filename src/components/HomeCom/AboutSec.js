import Image from 'next/image'
import React from 'react'

const AboutSec = () => {
  return (
    <div className='px-[5%] my-[60px]'>
    
    <div className='grid grid-cols-1 gap-3 lg:grid-cols-2'>
    <div className=''>
     <h3 className='text-[1rem] font-inter text-thmBase'>Welcome to the fusion tech alloys</h3>
     <h2 className=' text-[2.4rem] leading-[2.5rem] md:text-[3rem]  md:leading-[3.1rem] font-thmFont font-semibold text-thmText mt-2'>Delivering Trusted and Optimal Services for Your Business</h2>

     <p className='text-[1.2rem] font-inter font-medium text-gray-700'>We recognize that maintaining high quality necessitates upholding excellence at every stage of the process, and we remain steadfast in this commitment.</p>

     <p className=' font-oswald text-[0.9rem] text-[#333333] mt-2 font-medium'>
     
Fusion tech alloys was established by a team of highly experienced specialists proficient in product development, design, production management, and quality control. Our organization is ISO 9001:2015 certified, ensuring the supply of only top-tier quality products with traceable inspections and reliable deliveries, backed by excellent customer service. We are professionals specializing in manufacturing, stocking, importing, and exporting a wide range of Pipe Fittings, Flanges, Fasteners, Instrumentation Fittings, Hammer Union, Valves, Gaskets, Pipes and Tubes, Sheets, Plates, Coils, Bars, and Structural Steel Products, tailored to meet customers' projects, drawings, standards, and specifications.
     </p>
     <button className=' bg-thmBase text-thmBlack rounded-md py-2 px-3 mt-3 font-inter font-medium'>Read More...</button>
    </div>
    <div className='lg:p-2'>
    <div className='w-full'>
    <Image className='w-full rounded-md' src={"/Images/Base/aboutImg1.jpg"} alt="about Img" width={1313} height={876}/>
    </div>
    </div>
    </div>
    
    </div>
  )
}

export default AboutSec