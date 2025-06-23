
"use client"
import Image from 'next/image'
import React from 'react'

const Whatsappbtn = () => {
      const handleWhatsAppClick = () => {
        let phoneNumber = "9137130839"
        const formattedPhoneNumber = phoneNumber.replace(/\D/g, ""); // Remove non-numeric characters
        const url = `https://wa.me/${formattedPhoneNumber}`;
        window.open(url, "_blank");
      };
  return (
    <div
      className="fixed bottom-4 left-4 hover:scale-110 transition-all duration-700 ease-in-out cursor-pointer p-1 bg-white shadow-iconShadow rounded-full z-50"
      onClick={handleWhatsAppClick}
    >
      <Image
        className="w-[50px] h-[50px]"
        src={"/Images/Base/whatsapp.png"}
        alt=""
        width={60}
        height={70}
      />
    </div>
  );
}

export default Whatsappbtn