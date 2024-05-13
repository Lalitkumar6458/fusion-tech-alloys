import Image from 'next/image'
import React from 'react'

const ProductSec = () => {
    const ProductData=[
        {
            name:'Pipes',
            img:'/Images/Products/HomeImg/pipe.png',
            link:'',
            desc:''
        },
        {
            name:'Tubes',
            img:'/Images/Products/HomeImg/tubes.png',
            link:'',
            desc:''
        },
        {
            name:'Flanges',
            img:'/Images/Products/HomeImg/flange.png',
            link:'',
            desc:''
        },
        {
            name:'Fasteners',
            img:'/Images/Products/HomeImg/fastener.png',
            link:'',
            desc:''
        },
        {
            name:'Sheet,Plate & Coil',
            img:'/Images/Products/HomeImg/sheet.png',
            link:'',
            desc:''
        },
        {
            name:'BARS & RODS ',
            img:'/Images/Products/HomeImg/rod.png',
            link:'',
            desc:''
        },{
            name:'Pipe Fittings',
            img:'/Images/Products/HomeImg/fitting.png',
            link:'',
            desc:''
        },{
            name:'Wires',
            img:'/Images/Products/HomeImg/wire.png',
            link:'',
            desc:''
        }
    ]
  return (
    <div className='px-[5%] my-[60px] relative  lg:h-screen py-5'>
    <Image className='absolute top-0 left-0 bottom-0 right-0 w-full h-full' src={"/Images/Base/patternImg.png"} alt='' width={1894} height={740} />
    <div className='flex items-center justify-center flex-col gap-2 relative'>
    <h1 className=' font-thmFont text-[2.3rem] font-semibold text-thmBlack'>Our Products</h1>
    <div className='w-[70px] h-[4px] bg-thmBase rounded-md'></div>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[10px] mt-6 relative'>
    {
        ProductData.map((item,i)=>{
return <div className=' shadow-md border rounded-md group' key={i}>
<div className=' overflow-hidden h-[200px]'>
<Image className='w-full h-full group-hover:scale-125 transition-all duration-700 ease-in-out' src={item.img} alt={item.name} width={400} height={250} />
</div>
  <h2 className='h-[35px] flex items-center justify-center font-oswald text-gray-800 font-medium border-t-2 border-thmBase '>{item.name}</h2>
</div>
        })
    }
     <div className=''>
     
     </div>
    </div>
    </div>
  )
}

export default ProductSec