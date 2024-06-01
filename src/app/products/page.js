import SubHeader from '@/components/Base/SubHeader'
import ProductSec from '@/components/HomeCom/ProductSec'
import ContactProduct from '@/components/common/ContactLink'
import React from 'react'

const page = () => {
  return (
    <div>
    <SubHeader data={{heading:"Products",bredcrum:[{name:"Home",link:'/'},{name:"product",link:"/products"}]}}/>

    <div className=''>
    <ProductSec HideH={true}/>
    </div>

    <ContactProduct/>
    </div>
  )
}

export default page