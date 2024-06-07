'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import {AiOutlineGoogle} from "react-icons/ai"
import {FaRss,FaFacebookF,FaTwitter,FaLinkedinIn,FaEnvelope,FaPhone,FaAngleDoubleRight, FaWhatsapp} from "react-icons/fa"
const Footer = () => {
  <Link href="/" className='hover:text-thmBase'>Home</Link>
  |
    <Link href="/about" className='hover:text-thmBase'>About Us</Link>
   |
 
    <Link href="/product" className='hover:text-thmBase'>Products</Link>|
    <Link href="/quality" className='hover:text-thmBase'>Quality</Link>|
    <Link href="/contact" className='hover:text-thmBase'>Contact Us</Link>
 
  const list1=[
    {
        name:"Home",
        link:'/'
    },
    {
        name:"About Us",
        link:'/about'
    },
    {
        name:"Products",
        link:'/products'
    },
    {
        name:"Quality",
        link:'/quality'
    },
    {
        name:"Alloys",
        link:'/alloys/Inconel_600'
    },
    {
        name:"Contact Us",
        link:'/contact'
    }
   
]
const list2=[
  {
    name:"Pipe Fittings",
    link:"/products/pipeFettings"
  },
  {
    name:"Flanges",
    link:"/products/flanges"
  },
  {
    name:"Fasteners",
    link:"/products/fasteners"
  },
  {
    name:"Pipe",
    link:"/products/pipe"
  },
  {
    name:"Tubes",
    link:"/products/tubes"
  },
  {
    name:"Bars & Rods ",
    link:"/products/bars_rods_wires"
  },
  {
    name:"Sheet,Plate & Coil",
    link:"/products/sheet_plate_colis"
  },
  {
    name:"Welding Consumables",
    link:"/products/welding_consumables"
  }
]
const list3=[
  {
    name:"Inconel Alloys",
    link:"/alloys/Inconel_600",
  },
  {
    name:"Incoloy Alloys",
    link:"/alloys/Incoloy_800",
  },
  {
    name:"Hastelloy",
    link:"/alloys/Hastelloy_C276",
  },
  {
    name:"Titanium",
    link:"/alloys/Titanium_Gr_1",
  },
  {
    name:"Zirconium",
    link:"/alloys/Zirconium_702",
  },
  {
    name:"Cupro Nickel Alloys",
    link:"/alloys/Cupro_Nickel_70_30",
  },
  {
    name:"Duplex steel",
    link:"/alloys/Duplex_steel_31803_2205",
  },
  {
    name:"Super Duplex steel",
    link:"/alloys/Duplex_steel_32750_32760",
  },
]
const handleEmailClick = () => {

  let email='info@fusiontechalloys.com'
  const url = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`;
  window.open(url);
};
const handlePhoneClick = () => {
let  phoneNumber=`+91 9137130839`
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
  const url = `tel:${formattedPhoneNumber}`;
  window.location.href = url;
};
const handleWhatsAppClick = () => {
  let  phoneNumber=`+91 9137130839`
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
  const url = `https://wa.me/${formattedPhoneNumber}`;
  window.open(url, '_blank');
};
const handleInsta = (url) => {
  window.open(url, "_blank");
};
  return (
    <div className='bg-thmBlack px-[5%] pt-[5%] pb-4 rounded-t-[30px] relative'>
    
    <div className='  w-full'>
      <Image className='w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover' src={"/Images/footer-bg.png"} width={1000} height={500} alt='' />

      <div className='grid grid-cols-1 max-[767px]:gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 md:gap-y-4 text-white gap-3 relative z-40'>
      <div className='pr-5'>
      <div className='mb-3'>
      <h1 className='text-[1.4rem] font-exo uppercase'>About Us</h1>
      <div className='h-1 rounded bg-thmBase w-20'></div>
      </div>
      <p className="font-Oswald text-[0.8rem]">
      {'Fusion Tech Alloys is rapidly establishing itself as a prominent frontrunner within the Pipes and Tubes industry. With a specialization in Stainless Steel Pipes, Stainless Steel Tubes, Pipe Fittings, Flanges, Socketweld Fittings, Screwed Fittings, Fasteners, and Valves, Fusion Tech Alloys stands out as a premier stockist and supplier in India.'}
      </p>
      <div className='mt-3'>
      <span className='flex items-center gap-2 cursor-pointer' onClick={handleEmailClick}><FaEnvelope className='text-thmBase' /> <strong>{'info@fusiontechalloys.com'}</strong> </span>
      <span className='flex items-center gap-2 cursor-pointer' onClick={handleEmailClick}><FaEnvelope className='text-thmBase' /> <strong>{'sales@fusiontechalloys.com'}</strong> </span>
      <span className='flex items-center gap-2 mt-1 cursor-pointer'  onClick={handlePhoneClick} ><FaPhone className='text-thmBase'/> <strong>+91 9137130839 </strong></span>
   
      </div>
      <div className="mt-5">
      <ul className='flex items-center gap-2'>
      <li className='p-2 bg-white text-thmBase rounded-full mr-2 hover:bg-thmBase hover:text-white cursor-pointer transition-all duration-700 hover:scale-125' onClick={handleEmailClick}><Link href="/" className="fa-brands fa-google"><AiOutlineGoogle/></Link></li>
      <li  className='p-2 bg-white text-thmBase rounded-full mr-2 hover:bg-thmBase  hover:text-white cursor-pointer transition-all duration-700 hover:scale-125'   onClick={() =>
               handleInsta(
                 "https://www.instagram.com/fusion_tech_alloys?igsh=MXE5d3J2dTVqcjlzMA=="
               )
             }><Link  href="https://www.instagram.com/fusion_tech_alloys?igsh=MXE5d3J2dTVqcjlzMA==" className="fa-solid fa-rss"><FaRss/></Link></li>
      <li  className='p-2 bg-white text-thmBase rounded-full mr-2 hover:bg-thmBase hover:text-white cursor-pointer transition-all duration-700 hover:scale-125'   onClick={() =>
               handleInsta(
                 "https://www.instagram.com/fusion_tech_alloys?igsh=MXE5d3J2dTVqcjlzMA=="
               )
             }><Link href="https://www.instagram.com/fusion_tech_alloys?igsh=MXE5d3J2dTVqcjlzMA==" className="fa fa-facebook"><FaFacebookF/></Link></li>
      <li  className='p-2 bg-white text-thmBase rounded-full mr-2 hover:bg-thmBase hover:text-white cursor-pointer transition-all duration-700 hover:scale-125' onClick={handleWhatsAppClick}><Link href="/" className="fa fa-twitter"><FaWhatsapp/></Link></li>
      <li  className='p-2 bg-white text-thmBase rounded-full mr-2 hover:bg-thmBase hover:text-white cursor-pointer transition-all duration-700 hover:scale-125'   onClick={() =>
               handleInsta(
                 "https://www.instagram.com/fusion_tech_alloys?igsh=MXE5d3J2dTVqcjlzMA=="
               )
             }><Link href="/" className="fa fa-linkedin"><FaLinkedinIn/></Link></li>
   </ul>  
      </div>
    
      </div>
   
      <div className=''>
      <div className='mb-3'>
      <h1 className='text-[1.4rem] font-exo uppercase'>Our Products</h1>
      <div className='h-1 rounded bg-thmBase w-20'></div>
      </div>
      <ul>
      {
       list2.map((item)=>{
         return(
           <li className=' hover:translate-x-5 transition-all duration-700 hover:text-thmBase'><Link href={item.link} className='flex items-center gap-2 font-Oswald mb-1'><FaAngleDoubleRight/> {item.name}</Link></li>
         )
       })
      }
    
      </ul>
      </div>
      <div className=''>
      <div className='mb-3'>
      <h1 className='text-[1.4rem] font-exo uppercase'>Special Alloys</h1>
      <div className='h-1 rounded bg-thmBase w-20'></div>
      </div>
      <ul>
      {
       list3.map((item)=>{
         return(
           <li className=' hover:translate-x-5 transition-all duration-700 hover:text-thmBase'><Link href={item.link} className='flex items-center gap-2 font-Oswald mb-1'><FaAngleDoubleRight/> {item.name}</Link></li>
         )
       })
      }
    
      </ul>
      </div>
      <div className=''>
      <div className='mb-3'>
      <h1 className='text-[1.4rem] font-exo uppercase'>Quick Links</h1>
      <div className='h-1 rounded bg-thmBase w-20'></div>
      </div>
      <ul>
      {
       list1.map((item)=>{
         return(
           <li className=' hover:translate-x-5 transition-all duration-700 hover:text-thmBase'><Link href={item.link} className='flex items-center gap-2 font-Oswald mb-1'><FaAngleDoubleRight/> {item.name}</Link></li>
         )
       })
      }
    
      </ul>
   
      </div>
      </div>
      <div className='h-[1px] w-full bg-thmBase mt-5'>
   
      </div>
      <div  className=' hidden font-Oswald  items-start justify-center text-white gap-2 mt-3'>
      <Link href="/" className='hover:text-thmBase'>Home</Link>
    |
      <Link href="/about" className='hover:text-thmBase'>About Us</Link>
     |
   
      <Link href="/product" className='hover:text-thmBase'>Products</Link>|
      <Link href="/quality" className='hover:text-thmBase'>Quality</Link>|
      <Link href="/contact" className='hover:text-thmBase'>Contact Us</Link>
   
      </div>
   
      <div className=''>
      <p className='text-center text-white font-poppins mt-5'>{"Manufacturer, Fabricator, Stockholder, Suppliers, Traders, Wholesaler, Dealer, Distributor, Importer, Exporter, Stockist of Alloy Steel Tubes & Carbon Steel Pipe Nickel - Monel® - Inconel® - Incoloy® - Hastelloy® - Alloy 20 - Duplex - Olets® are the registered trademarks of their respective owners."}</p>
      </div>
      <div className='text-white font-Oswald text-center mt-5'>
      © {new Date().getFullYear()}  {''}. All Right Reserved,  Design And Developed By <Link className='text-blue-400 text-[1.4rem]' href="https://www.linkedin.com/in/lalit-kumar-845a2123a"
                       target="_blank">Lalit Kumar</Link>
      </div>
    </div>
    </div>
  )
}

export default Footer