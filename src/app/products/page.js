import SubHeader from '@/components/Base/SubHeader'
import ProductSec from '@/components/HomeCom/ProductSec'
import React from 'react'

const page = () => {
  return (
    <div>
    <SubHeader data={{heading:"Products",bredcrum:[{name:"Home",link:'/'},{name:"product",link:"/products"}]}}/>

    <div className=''>
    <ProductSec HideH={true}/>
    </div>
    </div>
  )
}

export default page