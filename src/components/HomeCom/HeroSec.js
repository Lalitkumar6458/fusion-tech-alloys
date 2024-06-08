"use client"
import React from 'react'
import "react-awesome-slider/dist/styles.css";
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import Image from 'next/image';
import Link from 'next/link';
const AutoplaySlider = withAutoplay(AwesomeSlider)
const HeroSec = () => {

    const heroData=[
        {
            heading:"Distinguished Manufacturers & Exporters of Bolts and Nuts",
            desc:"Offering an extensive array of industrial fasteners, encompassing nuts, bolts, and washers, crafted with meticulous attention to quality and precision standards.",
            img:'/Images/HeroImg/weldingImg.jpg',
            link:'',
            imgH:785,
            imgW:1920,
            name:'Welding Electrodes, Filler Wires & Flux Cored Wires'
        },
        {
            heading:"Accredited Manufacturer & Supplier of High-Quality Steel Products",
            desc:"Specializing in Pipes & Tubes, Bars, Rods, Wires, Flanges, Pipe Fittings, Valves, and Fasteners across a wide spectrum of materials and grades.",
            img:'/Images/HeroImg/flangeImg.jpg',
            link:'',
            imgH:760,
            imgW:1920,
            name:'Flange'
        },
        {
            heading:"ISO 9001:2015 Certified High-Quality Products",
            desc:"Our commitment to quality is reflected in our ISO 9001:2015 certification. We supply quality products not only across India but also globally, ensuring customer satisfaction and trust.",
            img:'/Images/HeroImg/fastanerImg.jpg',
            link:'',
            name:'Fasteners',
            imgH:760,
            imgW:1920,
        },
        { heading:"Commitment to Excellence and Quality Standards",
            img:"/Images/HeroImg/img4.webp",
            desc:"Our dedication to excellence and adherence to stringent quality standards make us professionals in the field of industrial fasteners.",
            link:"",
            imgH:1920,
            imgW:720,
            name:'Rods & Bars'
        },
        {
            heading:"ISO 9001:2015 Certified High-Quality Products",
            desc:"Our commitment to quality is reflected in our ISO 9001:2015 certification. We supply quality products not only across India but also globally, ensuring customer satisfaction and trust.",
            img:'/Images/HeroImg/pipeImg.jpg',
            link:'',
            name:'Pipe & Tube',
            imgH:760,
            imgW:1920,
        },
    ]
  return (
    <div className='h-[calc(100vh-110px)]'>
    
    <div className='slider-container' style={{ height: '100%' }}>
                <AutoplaySlider animation="foldOutAnimation"
                    play={true}
                    cancelOnInteraction={false}
                    interval={6000}

                >

{
    heroData.map((item,i)=>{
        return <div className='h-full w-full  px-[5%] grid grid-cols-1 place-items-center  text-white' key={i}>
<div className=' absolute top-0 left-0 h-full w-full bg-[#00000050] z-[5]'>
</div>
        <Image width={item.imgW?item.imgW:1200} height={item.imgH?item.imgH:600} className='h-full w-full object-cover lg:object-fill absolute top-0 left-0' src={item.img} alt='sh'/>
        <div className=' hidden absolute top-[40%] translate-y-[-40%] lg:top-[25%] lg:translate-y-[-25%] tr   z-10 w-[90%] lg:w-[60%]  items-center justify-center flex-col '>
        <h1 className='text-[1.6rem] lg:text-[2.5rem] font-Rubik font-bold textShadowGreen lg:w-[80%] text-center'>{item.heading}</h1>
        <p className='text-[1.2rem] lg:text-[1.2rem] font-Roboto font-medium shadow14 lg:mt-2 mt-4 text-center'>{item.desc}</p>
        <div className='flex items-center gap-3 lg:mt-4 mt-7 justify-center'>

        <Link href="/contact">
        <button className=' bg-thmBase text-white rounded-md p-2'> Inquiry Now
        </button>
        </Link>
        </div>
        </div>
        <div className='relative w-full z-40 flex items-center justify-center h-full'>
        <h2 className='text-white text-[1.6rem] lg:text-[2.5rem] font-Rubik font-bold text-center'>{item.name}</h2>
        </div>
        </div>
    })
}
                 
                </AutoplaySlider>
            </div>
    </div>
  )
}

export default HeroSec