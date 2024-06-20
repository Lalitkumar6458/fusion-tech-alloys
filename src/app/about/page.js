import SubHeader from '@/components/Base/SubHeader'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import{FaEye} from "react-icons/fa"
import { FaStar, FaGlobe, FaBullseye, FaHandshake, FaClock, FaShieldAlt } from 'react-icons/fa';
const page = () => {
  const bredcrum=[{name:"Home",link:'/'},{name:"About",link:"/about"}]
  const content = [
    {
      title: "Our Mission",
      description: "Expanding our reach through exceptional products and service excellence.",
      icon: <FaStar />
    },
    {
      title: "Our Vision",
      description: "Leading the industry with innovative solutions and top-tier quality.",
      icon: <FaGlobe />
    },
    {
      title: "Objectives",
      description: "Maintain quality, ensure timely delivery, nurture client relationships, and innovate continuously.",
      icon: <FaBullseye />
    },
    {
      title: "Our Commitment",
      description: "Dedicated to advanced manufacturing and superior service for diverse industries.",
      icon: <FaHandshake />
    }
  ];

  const whyChooseUs = [
    {
      title: "Global Supply",
      description: "We distribute our products to various parts of the world.",
      icon: <FaGlobe />
    },
    {
      title: "Commitment to Excellence",
      description: "Our dedication ensures that we provide our clients with the best service.",
      icon: <FaStar />
    },
    {
      title: "On-Time Delivery",
      description: "We guarantee timely delivery to meet your specific needs.",
      icon: <FaClock />
    },
    {
      title: "Quality Assurance",
      description: "Our Quality Assurance plans are meticulously prepared to meet industry standards.",
      icon: <FaShieldAlt />
    }
  ];

  const factSheet = [
    {
      heading: "Nature of Business",
      value: "Wholesale Trader Company",
    },
    {
      heading: "Company CEO",
      value: "MR. DASHRATH MODI",
    },
    {
      heading: "Total Number of Employees",
      value: "Upto 10 People",
    },
    {
      heading: "Year of Establishment",
      value: "2019",
    },
    {
      heading: "Legal Status of Firm",
      value: "Individual - Proprietor",
    },
    {
      heading: "Annual Turnover",
      value: "Rs. 5-10 Crore",
    },
    {
      heading: "Banker",
      value: "KOTAK MAHINDRA BANK",
    },
    {
      heading: "GST No.",
      value: "27FAXPM9207D1Z6",
    },
    {
      heading: "Payment Mode",
      value: "Cash,Credit Card,DD,Cheque",
    },
    {
      heading: "Shipment Mode",
      value: "By Road",
    },
  ];
  return (
    <div>
    <SubHeader data={{heading:"About Us",bredcrum:bredcrum}}/>
    <div className='px-[5%] py-[4%]'>
    <div className='grid grid-cols-1 gap-3 lg:grid-cols-2'>
    <div className='lg:p-2'>
    <div className='w-full'>
    <Image className='w-full rounded-md' src={"/Images/Base/AboutImg.png"} alt="about Img" width={740} height={600}/>
    </div>
    </div>
    <div className=''>
     <h3 className='text-[1rem] font-inter text-thmBase'>About Fusion tech alloys.</h3>
     <h2 className=' text-[2.4rem] leading-[2.5rem] md:text-[3rem]  md:leading-[3.1rem] font-thmFont font-semibold text-thmText mt-2'>Delivering Trusted & Exceptional Service for Your Business</h2>

     <p className='text-[1.2rem] font-inter font-medium text-gray-700'>At Fusion Tech Alloys, we believe that true quality is achieved through excellence at every stage of the process. This commitment drives our every action.</p>

     <p className=' font-oswald text-[0.9rem] text-[#333333] mt-2 font-medium'>
     
     Fusion Tech Alloys was established by a team of seasoned experts in product development, design, production management, and quality control. Our ISO 9001:2015 certification reflects our dedication to supplying only the highest quality, traceable products with dependable delivery and outstanding customer service. We specialize in manufacturing, stocking, importing, and exporting a wide array of products, including Pipe Fittings, Flanges, Fasteners, Instrumentation Fittings, Hammer Unions, Valves, Gaskets, Pipes and Tubes, Sheets, Plates, Coils, Bars, and Structural Steel Products, customized to meet our customers' projects, drawings, standards, and specifications.
     </p>
     <p className=' font-oswald text-[0.9rem] text-[#333333] mt-2 font-medium'>
     Our state-of-the-art manufacturing facility is equipped with an advanced production line, enabling us to consistently meet the growing market demands. Our diverse product portfolio serves a wide range of industries, including Sugar, Chemical Plants, Fertilizer Plants, Pharmaceuticals, Railways, Refrigeration, Metallurgy, Oil and Gas, Decorative applications, Dairies & Food Products, Instrumentation, Power Plants, Heat Exchangers, Pulp Instrumentation, Paper Mills, Food, Ornamental applications, Energy, Shipbuilding, Fabrication, Automotive, Sanitary & Plumbing, Boilers, and Space Applications.
     </p>
   
    </div>
  
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px] mt-[30px]'>
    {
      content.map((item,i)=>{
            return <div className='flex items-center justify-center flex-col shadow-md p-4 gap-2 border rounded-md' key={i}>
            <span className='text-[2.5rem] text-thmBase'>{item.icon}</span>
              <h1 className='text-[1.4rem] font-medium font-oswald text-thmText'>{item.title}</h1>
              <p className='text-center h-[80px] font-inter font-medium'>{item.description}</p>
            </div>
        })
    }
    </div>


    <div className="hidden">
    <div className="flex items-center justify-center flex-col gap-7">
      <div className='flex items-center justify-center flex-col gap-2 relative mt-[60px]'>
      <h1 className=' font-thmFont text-[2.3rem] font-semibold text-thmBlack'>FectSheet</h1>
      <div className='w-[70px] h-[4px] bg-thmBase rounded-md'></div>
      </div>
      <table
        className="border-[1px] border-solid border-thmBase border-collapse w-full animate-section"
      >
        <tbody>
          {factSheet.map((item) => {
            return (
              <tr>
                <td className="border-[1px] border-solid border-thmBase text-[1.2rem] p-2 font-Roboto font-semibold">
                  {item.heading}
                </td>
                <td className="border-[1px] border-solid border-thmBase text-[1.2rem] p-2 font-poppins font-medium">
                  {item.value}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
  <div className='flex items-center justify-center flex-col gap-2 relative mt-[60px] '>
  <h1 className=' font-thmFont text-[2.3rem] font-semibold text-thmBlack'>Certification</h1>
  <div className='w-[70px] h-[4px] bg-thmBase rounded-md'></div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5 lg:w-[80%] m-auto">
  <div className="border p-1 overflow-hidden rounded-md relative">
  <Link
    className=" absolute top-[20px] right-[10px] z-50 text-[14px]"
    href="/Images/Certificates/img3.jpg"
    target='_blank'
  >
    <span className="  absolute top-[10px] right-[10px] text-[25px] h-[40px] w-[40px] bg-thmBase  rounded-full text-white  flex items-center justify-center">
      <FaEye className=" " />
    </span>
  </Link>
  <Image
    className="hover:scale-110 transition-all duration-700 ease-in-out"
    src={"/Images/Certificates/img3.jpg"}
    alt=""
    width={600}
    height={700}
  />
</div>
          <div className="border p-1 overflow-hidden rounded-md relative">
            <Link
              className=" absolute top-[20px] right-[10px] z-50 text-[14px]"
              href="/Images/Certificates/img1.jpg"
              target='_blank'
            >
              <span className="  absolute top-[10px] right-[10px] text-[25px] h-[40px] w-[40px] bg-thmBase  rounded-full text-white  flex items-center justify-center">
                <FaEye className=" " />
              </span>
            </Link>
            <Image
              className="hover:scale-110 transition-all duration-700 ease-in-out"
              src={"/Images/Certificates/img1.jpg"}
              alt=""
              width={600}
              height={700}
            />
          </div>
          <div className="border p-1 overflow-hidden rounded-md relative">
            <Link
              className=" absolute top-[20px] right-[10px] z-50 text-[14px]"
              href="/Images/Certificates/img2.jpg"
              target='_blank'
            >
              <span className="  absolute top-[10px] right-[10px] text-[25px] h-[40px] w-[40px] bg-thmBase  rounded-full text-white  flex items-center justify-center">
                <FaEye className=" " />
              </span>
            </Link>
            <Image
              className="hover:scale-110 transition-all duration-700 ease-in-out"
              src={"/Images/Certificates/img2.jpg"}
              alt=""
              width={600}
              height={700}
            />
          </div>
        </div>


    <div className='flex items-center justify-center flex-col gap-2 relative mt-[60px]'>
    <h1 className=' font-thmFont text-[2.3rem] font-semibold text-thmBlack'>Why People Choose Us</h1>
    <div className='w-[70px] h-[4px] bg-thmBase rounded-md'></div>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px] mt-[30px]'>
    {
      whyChooseUs.map((item,i)=>{
            return <div className='flex items-center justify-center flex-col shadow-md p-4 gap-2 border rounded-md' key={i}>
            <span className='text-[2.5rem] text-thmBase'>{item.icon}</span>
              <h1 className='text-[1.4rem] font-medium font-oswald text-thmText'>{item.title}</h1>
              <p className='text-center h-[80px] font-inter font-medium'>{item.description}</p>
            </div>
        })
    }
    </div>
    </div>
    </div>
  )
}

export default page