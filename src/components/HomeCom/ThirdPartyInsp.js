import Image from 'next/image'
import React from 'react'
import Marquee from "react-fast-marquee";
function ThirdPartyInsp() {
    const Data=[
      "/Images/thirdParty/page-1_img18.jpg",
      "/Images/thirdParty/page-1_img19.jpg",
      "/Images/thirdParty/page-1_img20.jpg",
      "/Images/thirdParty/page-1_img21.jpg",
      "/Images/thirdParty/page-1_img22.jpg",
      "/Images/thirdParty/page-1_img23.jpg",
      "/Images/thirdParty/page-1_img24.jpg",
      "/Images/thirdParty/page-1_img25.jpg",
      "/Images/thirdParty/page-1_img26.jpg",
      "/Images/thirdParty/page-1_img27.jpg",
      "/Images/thirdParty/page-1_img28.jpg",
      "/Images/thirdParty/page-1_img29.jpg"
    ]
  return (
    <div className='h-[300px] w-full relative px-[5%] flex items-center justify-center flex-col' >
    <div className='flex items-center justify-center flex-col gap-2 relative'>
    <h1 className=' font-thmFont text-[2.3rem] font-semibold text-thmBlack capitalize'>
    Third Party Inspection
    </h1>
    <div className='w-[70px] h-[4px] bg-thmBase rounded-md'></div>
    </div>
    <Image className='w-full h-full absolute top-0 right-0 left-0' src={"/Images/Base/inspection.png"} alt='' width={1920} height={638}/>
    <Marquee>
    <div className='flex items-center gap-4 relative z-30 mt-7'>
      {
        Data.map((item,i)=>{
            return <div className='bg-[#fff] p-2 shadow-sm border last:mr-4'>
            <Image className='h-[84px] w-[184px]' src={item} alt='' width={185} height={84}/>
            </div>
        })
      }
    </div>
    </Marquee>
    </div>
  )
}

export default ThirdPartyInsp