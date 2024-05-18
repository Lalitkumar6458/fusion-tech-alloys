'use client'
import React from 'react'
import {FaPhone,FaEnvelope,FaWhatsapp, FaFacebook, FaInstagram} from "react-icons/fa"

const TopInfo = () => {
  const handleEmailClick = () => {
    let email='fusiontechalloys@gmail.com'
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

  return (
    <div className="h-[50px] max-[767px]:h-[50px] w-full bg-thmBlack text-white flex items-center justify-between px-[5%] text-[1.3rem]">
      <div className="flex md:items-center justify-between md:w-[60%] max-[767px]:flex-col">
        <span
          className="flex items-center gap-3 font-poppins min-[320px]:text-[0.9rem] xl:text-[1.2rem]  lg:text-[1rem] cursor-pointer "
          onClick={handlePhoneClick}
        >
          <FaPhone className="text-mainRed" /> +91:
          {'9137130839'}
        </span>
        <span
          className="flex items-center gap-3 font-poppins min-[320px]:text-[0.9rem] xl:text-[1.2rem]  lg:text-[1rem] cursor-pointer "
          onClick={handleEmailClick}
        >
          <FaEnvelope className="text-mainRed" />{" "}
          {'fusiontechalloys@gmail.com'}{" "}
        </span>
      </div>
      <div className="flex items-center gap-2 max-[767px]:text-[1.2rem] lg:text-[1.2rem]  xl:text-[1.2rem]">
        <span
          className="p-2 rounded-full text-thmBase bg-white hover:bg-thmBase hover:text-white cursor-pointer"
          onClick={() => handleWhatsAppClick()}
        >
          <FaWhatsapp />
        </span>
        <span
          className="p-2 rounded-full text-thmBase bg-white hover:bg-thmBase hover:text-white cursor-pointer"
          onClick={() =>
            handleInsta(
              ""
            )
          }
        >
          <FaFacebook />
        </span>
        <span
          className="p-2 rounded-full text-thmBase bg-white hover:bg-thmBase hover:text-white cursor-pointer"
          onClick={() =>
            handleInsta(
              ""
            )
          }
        >
          <FaInstagram />
        </span>
      </div>
    </div>
  );
}

export default TopInfo