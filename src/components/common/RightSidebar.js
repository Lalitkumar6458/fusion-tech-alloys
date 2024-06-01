"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { MdDoubleArrow, MdOutlineMailOutline } from "react-icons/md";

// import { websiteData } from '@/public/constantData';
import {LiaPhoneVolumeSolid} from "react-icons/lia"
import { useRouter,usePathname  } from 'next/navigation';
import CollapseGrade from './CollapseGrade';
const RigthSideBox = ({ pathname }) => {
    
  // const router = useRouter();
  const pathName=usePathname()
  const currentPathname = pathName

  const product = [


    {
        name:'Pipes',

        link:'/products/pipe',
        desc:''
    },
    {
        name:'Tubes',

        link:'/products/tubes',
        desc:''
    },
    {
        name:'Flanges',

        link:'/products/flanges',
        desc:''
    },
    {
        name:'Fasteners',

        link:'/products/fasteners',
        desc:''
    },
    {
        name:'Sheet,Plate & Coil',

        link:'/products/sheet_plate_colis',
        desc:''
    },
    {
        name:'Bars & Rods ',

        link:'/products/bars_rods_wires',
        desc:''
    },
    {
        name: "Buttweld Pipe Fittings",
        img: "/Images/Products/PipeFitting/Img1.webp",
        link: "/products/pipeFettings/Buttweld_Pipe_Fittings",
        desc: "",
      },
      {
        name: "Threaded Pipe Fittings",
        img: "/Images/Products/PipeFitting/Bgimg2.jpg",
        link: "/products/pipeFettings/Threaded_Pipe_Fittings",
        desc: "",
      },
      {
        name: "Socket Weld Fittings",
        img: "/Images/Products/PipeFitting/Bgimg1.jpg",
        link: "/products/pipeFettings/Socket_Pipe_Fittings",
        desc: "",
      },
    {
        name:'Welding Consumables',
        link:'/products/welding_consumables',
        desc:''
    }
  

  ];
  const Material = [
    {
      name: "Stainless Steel",
      link: "/material/StainlessSteel",
    },
    {
      name: "Duplex Steel",
      link: "/material/duplexsteel",
    },
    {
      name: "Super Duplex Steel",
      link: "/material/superduplexsteel",
    },
    {
      name: "Mild Steel (MS) Alloys",
      link: "/material/mildsteel",
    },
    // {
    //   name: "Die & Tool Steel",
    //   link: "/material/alloys/SMO254",
    // },
   
  ];

  const alloysData=[
    {
        name:"INCONEL",
        grades:[
            {
                name:"Inconel 600",
                link:"/alloys/Inconel_600",
              },
              {
                name:"Inconel 617",
                link:"/alloys/Inconel_617",
              },
              {
                name:"Inconel 625",
                link:"/alloys/Inconel_625",
              },
              {
                name:"Inconel 718",
                link:"/alloys/Inconel_718",
              },
        ]
    },
  
      {
        name:"INCOLOY",
        link:"#",
        grades:[
          {
            name:"Incoloy 800",
            link:"/alloys/Incoloy_800",
          },
          {
            name:"Incoloy 825",
            link:"/alloys/Incoloy_825",
          },
        ]

      },
      {
        name:"HASTELLOY",
        link:"#",
        grades:[
          {
            name:"Hastelloy C276",
            link:"/alloys/Hastelloy_C276",
          },
          {
            name:"Hastelloy C22",
            link:"/alloys/Hastelloy_C22",
          },
          {
            name:"Hastelloy B2",
            link:"/alloys/Hastelloy_B2",
          },     {
            name:"Hastelloy B3",
            link:"/alloys/Hastelloy_B3",
          },     {
            name:"Hastelloy X",
            link:"/alloys/Hastelloy_X",
          },     {
            name:"Hastelloy C2000",
            link:"/alloys/Hastelloy_C2000",
          },
        ]
      }, {
        name:"TITANIUM",
        link:"#",
        grades:[ 
          {
            name:"Titanium Gr 1",
            link:"/alloys/Titanium_Gr_1",
          },
          {
            name:"Titanium Gr 2",
            link:"/alloys/Titanium_Gr_2",
          },
          {
            name:"Titanium Gr 5",
            link:"/alloys/Titanium_Gr_5",
          },     {
            name:"Titanium Gr 9",
            link:"/alloys/Titanium_Gr_9",
          }
        ]
      },
      {
        name:"ZIRCONIUM",
        link:"#",
        grades:[ 
          {
            name:"Zirconium 702",
            link:"/alloys/Zirconium_702",
          },
          {
            name:"Zirconium 705",
            link:"/alloys/Zirconium_705",
          },
         
        ]
      }, {
        name:"CUPRO NICKEL",
        link:"#",
        grades:[ 
          {
            name:"Cupro Nickel 70/30",
            link:"/alloys/Cupro_Nickel_70_30",
          },
          {
            name:"Cupro Nickel 90/10",
            link:"/alloys/Cupro_Nickel_90_10",
          },
         
        ]
      }, {
        name:"DUPLEX & SUPER DUPLEX STEEL",
        link:"#",
        grades:[ 
          {
            name:"Duplex steel 31803 / 2205",
            link:"/alloys/Duplex_steel_31803_2205",
          },
          {
            name:"Duplex steel 32750 / 32760",
            link:"/alloys/Duplex_steel_32750_32760",
          },    {
            name:"Zeron 100",
            link:"/alloys/Zeron_100",
          },
         
        ]
      },
  ]

  return (
    <div className="px-3 py-2">
      <div className="">
        <div className="border-b">
          <h2 className="w-fit text-[1.6rem] font-exo font-medium border-b-[2px]  border-goldLight">
            Our Products
          </h2>
        </div>
        <div className="mt-4">
          {product.map((item) => {
            return (
              <Link href={item.link} key={item.name}>
                <div
                  className={`w-full h-[50px]  border-l-[3px] ${
                    pathname == item.link
                      ? "bg-thmBlack text-white"
                      : "bg-[#f6f6f6]"
                  } border-goldLight  flex items-center justify-between px-3 text-[1.2rem] font-Oswald mb-2 hover:bg-thmBlack hover:text-white transition-all duration-300 ease-in-out
                  `}
                >
                  <h3>{item.name}</h3>
                  <MdDoubleArrow />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-5">
        <div className="border-b">
          <h2 className="w-fit text-[1.6rem] font-exo font-medium border-b-[2px] border-goldLight">
            Alloys
          </h2>
        </div>
        <div className="mt-4">
       <CollapseGrade data={alloysData} DefaultKey={1} isSingle={true} pathname={pathname} />
        </div>
      </div>

      <div className="mt-5 hidden">
        <div className="border-b">
          <h2 className="w-fit text-[1.6rem] font-exo font-medium border-b-[2px] border-mainRed">
            Get A Quote
          </h2>
        </div>

  

       {/*
    
       <div className="mt-5">
             <div className="border-b">
               <h2 className="w-fit text-[1.6rem] font-exo font-medium border-b-[2px] border-mainRed">
                 Contact Us
               </h2>
             </div>
             <div className="mt-5">
               <h2 className="text-[1.5rem] font-poppins text-thmBlack font-medium">
                 Phone Number
               </h2>
               <div className="mt-3">
                 <h5 className="text-[1.2rem] font-Roboto text-gray-800">
                   {websiteData.contactInfo.contactPerson}
                 </h5>
                 <p className="flex gap-2 items-center mt-1 font-poppins text-[1rem] font-normal">
                   <LiaPhoneVolumeSolid />
                   +91 {websiteData.contactInfo.mobileNo[0]}
                 </p>
                 <p className="flex gap-2 items-center mt-1 font-poppins text-[1rem] font-normal">
                   <LiaPhoneVolumeSolid />
                   +91 {websiteData.contactInfo.mobileNo[1]}
                 </p>
   
                 <h5 className="text-[1.2rem] font-Roboto text-gray-800 mt-5">
                   Office No
                 </h5>
                 <p className="flex gap-2 items-center mt-1 font-poppins text-[1rem] font-normal">
                   <LiaPhoneVolumeSolid />
                   +91 {websiteData.contactInfo.officeNo[0]}
                 </p>
               </div>
             </div>
             <div className="mt-5">
               <h2 className="text-[1.5rem] font-poppins text-thmBlack font-medium">
                 Email
               </h2>
               <div className="mt-3">
                 <p className="flex gap-2 items-center mt-1 font-poppins text-[1rem] font-normal">
                   <MdOutlineMailOutline />
                   {websiteData.contactInfo.email[0]}
                 </p>
               </div>
             </div>
             <div className="mt-5">
               <h2 className="text-[1.5rem] font-poppins text-thmBlack font-medium">
                 Address
               </h2>
               <div className="mt-3">
                 <p className="flex gap-2 items-center mt-1 font-poppins text-[1rem] font-normal">
                   {websiteData.contactInfo.address[0]}
                 </p>
               </div>
             </div>
           </div>
    */} 
      </div>
    </div>
  );
};

export default RigthSideBox