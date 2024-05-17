import Image from 'next/image'
import React from 'react'

const ApplicationSec = () => {
    const Data=[{
        heading:"Power Plants Industries",
        img:"/Images/Industries/Img1.jpg"
    },
    {
        heading:"Aerospace Industries",
        img:"/Images/Industries/Img2.jpg"
    },{
        heading:"Refineries Industries",
        img:"/Images/Industries/Img3.jpg"
    },{
        heading:"Construction",
        img:"/Images/Industries/Img4.jpg"
    },{
        heading:"Oil & Gas",
        img:"/Images/Industries/Img5.jpg"
    },{
        heading:"Sugar Industries",
        img:"/Images/Industries/Img6.jpg"
    },{
        heading:"Chemical Industries",
        img:"/Images/Industries/Img7.jpg"
    },{
        heading:"Petrochemical Industries",
        img:"/Images/Industries/Img8.jpg"
    },
]
  return (
    <div className='px-[5%] mb-[50px] relative  lg:h-screen py-5 flex flex-col justify-center items-center'>
    <div className='flex items-center justify-center flex-col gap-2 relative'>
    <h1 className=' font-thmFont text-[2.3rem] font-semibold text-thmBlack capitalize'>Industry We Served</h1>
    <div className='w-[70px] h-[4px] bg-thmBase rounded-md'></div>

    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px] mt-[50px]'>
    {
        Data.map((item,i)=>{
            return <div className=' shadow-md border rounded-md group' key={i}>
            <div className=' overflow-hidden h-[200px]'>
            <Image className='w-full h-full group-hover:scale-125 transition-all duration-700 ease-in-out' src={item.img} alt={item.heading} width={420} height={280} />
            </div>
              <h2 className='h-[35px] flex items-center justify-center font-oswald text-gray-800 font-medium border-t-2 border-thmBase '>{item.heading}</h2>
            </div>
        })
    }
    </div>
    
    </div>
  )
}

export default ApplicationSec