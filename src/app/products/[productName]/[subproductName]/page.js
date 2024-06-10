import SubHeader from '@/components/Base/SubHeader'
import React from 'react'
import { ButtweldFettingData,ThreadedFettingData,SocketFettingData } from '../../../../../public/ContactData'
import ProductCon from '@/components/common/ProductCon'
import RigthSideBox from '@/components/common/RightSidebar'
import ContactProduct from '@/components/common/ContactLink'

export async function generateMetadata({ params }) {

  const productName=params.subproductName
  let Heading=''
  let ProductData={}
  if(productName=="Buttweld_Pipe_Fittings"){
    Heading="Buttweld Pipe Fittings"
    ProductData=ButtweldFettingData
}else if(productName=="Threaded_Pipe_Fittings"){
    Heading="Threaded Pipe Fittings"
    ProductData=ThreadedFettingData
}else if(productName=="Socket_Pipe_Fittings"){
    Heading="Socket Pipe Fittings"
    ProductData=SocketFettingData
}

  const pageTitle = `fusion tech alloys - ${Heading}`;
  const pageDescription = `Explore our premium ${Heading} offerings at fusion tech alloys. Leading manufacturer and supplier of top-quality industrial products.`;
  const pageImage = ProductData.img ? 'https://fusiontechalloys.com/'+ProductData.img: 'https://fusiontechalloys.com/Images/Base/fusionOgImage.png';

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
      url: `https://fusiontechalloys.com/products/pipeFettings/${productName}`,
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

    const productName=params.subproductName
    let Heading=''
    let ProductData={}
    if(productName=="Buttweld_Pipe_Fittings"){
      Heading="Buttweld Pipe Fittings"
      ProductData=ButtweldFettingData
  }else if(productName=="Threaded_Pipe_Fittings"){
      Heading="Threaded Pipe Fittings"
      ProductData=ThreadedFettingData
  }else if(productName=="Socket_Pipe_Fittings"){
      Heading="Socket Pipe Fittings"
      ProductData=SocketFettingData
  }
  return (
    <div>
    <SubHeader data={{heading:Heading,bredcrum:[{name:"Home",link:'/'},{name:"product",link:"/products"},{name:"pipeFettings",link:"/products/pipeFettings"},{name:productName,link:"/products/pipeFettings"+productName}]}}/>
    <div className="grid grid-cols-1 md:grid-cols-4 px-[5%] h-auto mt-[40px] mb-[40px] gap-3">
    <div className=" md:col-span-3 h-ful">
      <ProductCon data={ProductData} name={Heading} heading={true} grade={true} />
    </div>
    <div className="border shadow-lg rounded-md">
   <RigthSideBox  pathname={`/products/pipeFettings/`+productName} />
    </div>
  </div>
  <ContactProduct/>
    </div>
  )
}

export default page