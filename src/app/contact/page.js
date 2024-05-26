import SubHeader from '@/components/Base/SubHeader'
import ContactSec from '@/components/HomeCom/ContactSec'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  const bredcrum=[{name:"Home",link:'/'},{name:"Contact",link:"/contact"}]
  return (
    <div>

    <SubHeader data={{img:"/Images/Base/ContactImg.png",heading:"Contact Us",bredcrum:bredcrum}}/>
   



    <ContactSec />

    <div className='flex items-center justify-center flex-col gap-2 relative my-[40px]'>
    <h1 className=' font-thmFont text-[2.3rem] font-semibold text-thmBlack'>Get Location</h1>
    <div className='w-[70px] h-[4px] bg-thmBase rounded-md'></div>
    </div>
    <div className='rounded-md h-[500px] px-[5%] mb-[40px]'>
<iframe className='w-full h-full rounded-md' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.435595870351!2d72.8251559!3d18.9563605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf255faad00b%3A0x75969f08fec3e9c4!2sFusion%20Tech%20Alloys!5e0!3m2!1sen!2sin!4v1716719237193!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>


    </div>
  )
}

export default page