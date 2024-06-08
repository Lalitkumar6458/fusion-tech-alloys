'use client'
import React from 'react'
import {FaPhone,FaEnvelope,FaWhatsapp, FaFacebook, FaInstagram} from "react-icons/fa"

const TopInfo = () => {
  const handleEmailClick = () => {
    let email='sales@fusiontechalloys.com'
    const url = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`;
    window.open(url);
  };
  const handlePhoneClick = () => {
  let  phoneNumber="+91"+'9137130839'
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
    const url = `tel:${formattedPhoneNumber}`;
    window.location.href = url;
  };
  const handleWhatsAppClick = () => {
    let  phoneNumber="+91"+'9137130839'
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
    const url = `https://wa.me/${formattedPhoneNumber}`;
    window.open(url, '_blank');
  };
  const handleInsta=(url)=>{
    window.open(url, '_blank');
  }
const socialData=[{
  name:'',
  icon: <FaFacebook  />,
  link:'https://www.instagram.com/fusion_tech_alloys?igsh=MXE5d3J2dTVqcjlzMA=='
},
{
  name:'',
  icon:<FaInstagram />,
  link:'https://www.instagram.com/fusion_tech_alloys?igsh=MXE5d3J2dTVqcjlzMA=='
},
{
  name:'',
  icon:<FaWhatsapp />,
  link: ''
}

]
  return (
    <div className="h-[50px] max-[767px]:h-[50px] w-full bg-thmBlack text-white ">
     <div className='grid grid-cols-6 h-full '>
     <div className=' col-span-2 bg-thmBase h-full  items-center justify-center hidden min-[880px]:flex'>
    <h3 className='text-[1.4rem] font-oswald font-semibold text-thmBlack '>Welcome to Fusion Tech Alloys</h3>
     </div>
     <div className='col-span-6 min-[880px]:col-span-4 px-[5px] md:px-[20px] flex items-center justify-between'>
     <div className='flex items-center gap-2  md:gap-3 h-full'>

     {
      socialData.map((item)=>{
        return  <div className='h-[30px] w-[30px] md:w-[35px] md:h-[35px] rounded-full cursor-pointer hover:bg-thmBase text-[1.2rem] hover:text-white bg-white flex items-center justify-center text-thmBase md:text-[1.4rem] transition-all duration-700 hover:scale-125'  onClick={() =>
          handleInsta(
           item.link
          )
        }>
        {item.icon}
        </div>
      })
     }
    
     </div>

     <div className='flex items-start md:items-center flex-col gap-0  md:gap-4 md:flex-row'>
 
     <span
     className="flex items-center gap-3 font-poppins min-[320px]:text-[0.9rem] xl:text-[1.06rem]  lg:text-[0.9rem] cursor-pointer "
     onClick={handlePhoneClick}
   >
     <FaPhone className="text-mainRed" /> +91:
     {'9137130839'}
   </span>
<div className='h-[30px] w-[3px] bg-thmBase rounded hidden md:flex'></div>
   <span
          className="flex items-center gap-3 font-poppins min-[320px]:text-[0.9rem] xl:text-[1.06rem] lg:text-[0.9rem]  cursor-pointer "
          onClick={handleEmailClick}
        >
          <FaEnvelope className="text-mainRed" />{" "}
          {'sales@fusiontechalloys.com'}{" "}
        </span>

     </div>
     </div>

     </div>
    </div>
  );
}

export default TopInfo