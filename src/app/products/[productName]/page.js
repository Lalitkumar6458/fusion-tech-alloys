import SubHeader from '@/components/Base/SubHeader'
import ProductCon from '@/components/common/ProductCon'
import { pipeData,tubeData,FlangesData,fastenersData,SheetPlateData, RodData,wireData } from '../../../../public/ContactData'
import React from 'react'
import PipeFitting from '@/components/common/PipeFitting'
import RigthSideBox from '@/components/common/RightSidebar'
import ContactProduct from '@/components/common/ContactLink'

export async function generateMetadata({ params }) {

    const productName=params.productName
    let Heading=''

    let ProductData={}
    if(productName=="pipe"){
        Heading="Pipes"
        ProductData=pipeData
    }else if(productName=="tubes"){
        Heading="Tubes"
        ProductData=tubeData
    }else if(productName=="flanges"){
        Heading="Flanges"
        ProductData=FlangesData
    }else if(productName=="fasteners"){
        Heading="Fasteners"
        ProductData=fastenersData
    }else if(productName=="sheet_plate_colis"){
        Heading="Sheet,Plate & Coil"
        ProductData=SheetPlateData
    }else if(productName=="bars_rods_wires"){
        Heading="Bars,Rods & Wires"
        ProductData=RodData
    }else if(productName=="pipeFettings"){
        Heading="Pipe Fittings"
        ProductData=pipeData
    }else if(productName=="welding_consumables"){
        Heading="Welding Consumables"
        ProductData=wireData
    }else if(productName==""){
        Heading="Pipes"
        ProductData=pipeData
    }
  
  
  
    const pageTitle = `fusion tech alloys - ${Heading}`;
    const pageDescription = `Explore our premium ${Heading} offerings at fusion tech alloys. Leading manufacturer and supplier of top-quality industrial products.`;
    const pageImage = ProductData.img ?'https://fusiontechalloys.com/'+ProductData.img: 'https://fusiontechalloys.com/Images/Base/fusionOgImage.png';
  
    return {
      title: pageTitle,
      description: pageDescription,
      openGraph: {
        title: pageTitle,
        description: pageDescription,
        images: [
          {
            url: pageImage,
            width: 1200,
            height: 630,
            alt: ProductData.name,
          },
        ],
        url: `https://fusiontechalloys.com/products/${productName}`,
        type: 'website',
      },
      twitter: {
        card: 'product',
        title: pageTitle,
        description: pageDescription,
        images: [
          {
            url: pageImage,
            width: 1200,
            height: 630,
            alt: ProductData.name,
          },
        ],
      },
    };
  }

const page = ({ params }) => {

    const productName=params.productName
    let Heading=''

    let ProductData={}
    if(productName=="pipe"){
        Heading="Pipes"
        ProductData=pipeData
    }else if(productName=="tubes"){
        Heading="Tubes"
        ProductData=tubeData
    }else if(productName=="flanges"){
        Heading="Flanges"
        ProductData=FlangesData
    }else if(productName=="fasteners"){
        Heading="Fasteners"
        ProductData=fastenersData
    }else if(productName=="sheet_plate_colis"){
        Heading="Sheet,Plate & Coil"
        ProductData=SheetPlateData
    }else if(productName=="bars_rods_wires"){
        Heading="Bars,Rods & Wires"
        ProductData=RodData
    }else if(productName=="pipeFettings"){
        Heading="Pipe Fittings"
        ProductData=pipeData
    }else if(productName=="welding_consumables"){
        Heading="Welding Consumables"
        ProductData=wireData
    }else if(productName==""){
        Heading="Pipes"
        ProductData=pipeData
    }
  return (
    <div>
    <SubHeader data={{heading:Heading,bredcrum:[{name:"Home",link:'/'},{name:"product",link:"/products"},{name:productName,link:"/products"+productName}]}}/>

    {productName=="pipeFettings"?<PipeFitting/>: <div className="grid grid-cols-1 md:grid-cols-4 px-[5%] h-auto mt-[40px] mb-[40px] gap-3">
    <div className=" md:col-span-3 h-ful">
      <ProductCon data={ProductData} name={Heading} heading={true} grade={productName=="welding_consumables"?false:true} />
    </div>
    <div className="border shadow-lg rounded-md">
   <RigthSideBox  pathname={`/products/${productName}`}/>
    </div>
  </div>

    }
    <ContactProduct/>
    </div>
  )
}

export default page