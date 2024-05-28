import SubHeader from '@/components/Base/SubHeader'
import ProductCon from '@/components/common/ProductCon'
import { pipeData } from '../../../../public/ContactData'
import React from 'react'

const page = ({ params }) => {
    console.log(params.productName,"params")
    const productName=params.productName
    let Heading=''

    let ProductData={}
    if(productName=="pipe"){
        Heading="Pipes"
        ProductData=pipeData
    }else if(productName=="tubes"){
        Heading="Tubes"
        ProductData=pipeData
    }else if(productName=="flanges"){
        Heading="Flanges"
        ProductData=pipeData
    }else if(productName==""){
        Heading="Fasteners"
        ProductData=pipeData
    }else if(productName=="sheet_plate_colis"){
        Heading="Sheet,Plate & Coil"
        ProductData=pipeData
    }else if(productName=="bars_rods_wires"){
        Heading="Bars,Rods & Wires"
        ProductData=pipeData
    }else if(productName=="pipe_fittings"){
        Heading="Pipe Fittings"
        ProductData=pipeData
    }else if(productName=="welding_consumables"){
        Heading="Welding Consumables"
        ProductData=pipeData
    }else if(productName==""){
        Heading="Pipes"
        ProductData=pipeData
    }
  return (
    <div>
    <SubHeader data={{heading:Heading,bredcrum:[{name:"Home",link:'/'},{name:"product",link:"/products"},{name:productName,link:"/products"+productName}]}}/>
    <div className="grid grid-cols-1 md:grid-cols-4 px-[5%] h-auto mt-[40px] mb-[40px] gap-3">
          <div className=" md:col-span-3 h-ful">
            <ProductCon data={ProductData} name={Heading} heading={true} grade={true} />
          </div>
          <div className="border shadow-lg rounded-md">
         
          </div>
        </div>
    </div>
  )
}

export default page