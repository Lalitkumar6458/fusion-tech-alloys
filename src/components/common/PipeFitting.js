import React from 'react'
import Link from "next/link";
import Image from "next/image";
import SubHeader from '../Base/SubHeader';

const PipeFitting = () => {
 const pipeFittingDat = {
    type: [
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
      //  {
      //    name: "Olets Fittings",
      //    img:require("./Images/PipeFitting/Bgimg3.jpg"),
      //     link:"/Olets_Pipe_Fittings",
      //    desc:""
      // },
      //  {
      //    name: "Ferrule Fittings",
      //    img:require("./Images/PipeFitting/img2.jpg"),
      //    link:"/Ferrule_Pipe_Fittings",
      //    desc:""
      // },
    ],
  };
  return (
    <div className="">
      
      <div className="mt-[40px] mb-[40px] px-[5%]">
  
        <div className='flex items-center justify-center flex-col gap-2 relative'>
        <h1 className=' font-thmFont text-[2.3rem] font-semibold text-thmBlack capitalize'>We Offering Pipe Fittings</h1>
        <div className='w-[70px] h-[4px] bg-thmBase rounded-md'></div>
    
        </div>
    

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[40px]">
          {pipeFittingDat.type.map((item) => {
            return (
              <Link href={item.link}>
                <div className=" h-[350px] shadow-boxshadow rounded-md">
                  <div className="p-1 border h-[80%] rounded-md overflow-hidden">
                    <Image
                      className="w-full h-full  hover:scale-110 transition-all duration-700 ease-in-out rounded-md"
                      src={item.img}
                      alt={item.name}
                      width={500}
                      height={400}
                    />
                  </div>
                  <div className="h-[20%] flex items-center justify-center">
                    <h3 className="text-[1.4rem] font-Oswald font-medium text-dark-cl">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PipeFitting