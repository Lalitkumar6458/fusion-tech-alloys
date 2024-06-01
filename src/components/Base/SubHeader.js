import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SubHeader = ({data}) => {
    const {heading,img,bredcrum,imgWidth,imgHeight}=data

  return (
    <div>
    <div className='h-[260px] w-full relative'>
    <div className='w-full h-full bg-[#00000067] absolute top-0 left-0 z-[10]'></div>
    <Image className='w-full h-full object-fill absolute top-0 left-0' src={img?img:'/Images/Base/subheader.jpg'} alt='' width={imgWidth?imgWidth:1000} height={imgHeight?imgHeight:500}/>
    <div className=' relative w-full h-full z-20 flex items-center justify-center'>
    <div className=''>
    <h1 className='text-[2.1rem] md:text-[3.4rem] font-thmFont font-semibold text-white border-b-2 border-thmBase rounded leading-[3rem] text-center'>{heading}</h1>
    <div className='flex items-center gap-2 justify-center text-white text-[1rem] md:text-[1.2rem] font-medium font-inter mt-2'>
{
    bredcrum.map((item,i)=>{
        return <Link className=' flex items-center gap-2' key={i} href={item.link}><h3 className={` ${i==0?' text-thmBase':''}`}>{item.name}</h3> {i == bredcrum.length-1?'':'/'} </Link> 
    })
}

    
    </div>
    </div>
    
    </div>
    </div>
    </div>
  )
}

export default SubHeader