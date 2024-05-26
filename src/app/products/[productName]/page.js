import SubHeader from '@/components/Base/SubHeader'
import React from 'react'

const page = ({ params }) => {
    console.log(params.productName,"params")
    const productName=params.productName
    let Heading=''


    if(productName=="pipe"){
        Heading="Pipes"
    }else if(productName=="tubes"){
        Heading="Tubes"
    }else if(productName=="flanges"){
        Heading="Flanges"
    }else if(productName==""){
        Heading="Fasteners"
    }else if(productName=="sheet_plate_colis"){
        Heading="Sheet,Plate & Coil"
    }else if(productName=="bars_rods_wires"){
        Heading="Bars,Rods & Wires"
    }else if(productName=="pipe_fittings"){
        Heading="Pipe Fittings"
    }else if(productName=="welding_consumables"){
        Heading="Welding Consumables"
    }else if(productName==""){
        Heading="Pipes"
    }
  return (
    <div>
    <SubHeader data={{heading:Heading,bredcrum:[{name:"Home",link:'/'},{name:"product",link:"/products"},{name:productName,link:"/products"+productName}]}}/>
    
    </div>
  )
}

export default page