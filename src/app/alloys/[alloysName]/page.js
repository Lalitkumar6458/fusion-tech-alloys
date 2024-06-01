import SubHeader from '@/components/Base/SubHeader'
import AlloysCom from '@/components/common/AlloysCom'
import RigthSideBox from '@/components/common/RightSidebar'
import React from 'react'
import { CuproNickel70_30, CuproNickel90_10, DuplexSteel31803_2205, DuplexSteel32750_32760, HastelloyB2, HastelloyB3, HastelloyC2000, HastelloyC22, HastelloyC276, HastelloyX, Incoloy800, Incoloy825, Inconel600, Inconel617, Inconel625, Inconel718, TitaniumGrade1, TitaniumGrade2, TitaniumGrade5, TitaniumGrade9, Zeron100, Zirconium702, Zirconium705 } from '../../../../public/AlloysData'
import ContactProduct from '@/components/common/ContactLink'
const page = ({params}) => {

  const alloysName=params.alloysName
  let Heading=''
  let alloysData={}
  if(alloysName=="Inconel_600"){
    Heading="Inconel 600"
    alloysData=Inconel600
}else if(alloysName=="Inconel_617"){
    Heading="Inconel 617"
    alloysData=Inconel617
}else if(alloysName=="Inconel_625"){
    Heading="Inconel 625"
    alloysData=Inconel625
}else if(alloysName=="Inconel_718"){
  Heading="Inconel 718"
  alloysData=Inconel718
}else if(alloysName=="Incoloy_800"){
  Heading="Incoloy 800"
  alloysData=Incoloy800
}else if(alloysName=="Incoloy_825"){
  Heading="Incoloy 825"
  alloysData=Incoloy825
}else if(alloysName=="Hastelloy_C276"){
  Heading="Hastelloy C276"
  alloysData=HastelloyC276
}else if(alloysName=="Hastelloy_C22"){
  Heading="Hastelloy C22"
  alloysData=HastelloyC22
}else if(alloysName=="Hastelloy_B2"){
  Heading="Hastelloy B2"
  alloysData=HastelloyB2
}else if(alloysName=="Hastelloy_B3"){
  Heading="Hastelloy B3"
  alloysData=HastelloyB3
}else if(alloysName=="Hastelloy_X"){
  Heading="Hastelloy X"
  alloysData=HastelloyX
}else if(alloysName=="Hastelloy_C2000"){
  Heading="Hastelloy C2000"
  alloysData=HastelloyC2000
}else if(alloysName=="Titanium_Gr_1"){
  Heading="Titanium Gr 1"
  alloysData=TitaniumGrade1
}else if(alloysName=="Titanium_Gr_2"){
  Heading="Titanium Gr 2"
  alloysData=TitaniumGrade2
}else if(alloysName=="Titanium_Gr_5"){
  Heading="Titanium Gr 5"
  alloysData=TitaniumGrade5
}else if(alloysName=="Titanium_Gr_9"){
  Heading="Titanium Gr 9"
  alloysData=TitaniumGrade9
}else if(alloysName=="Zirconium_702"){
  Heading="Zirconium 702"
  alloysData=Zirconium702
}else if(alloysName=="Zirconium_705"){
  Heading="Zirconium 705"
  alloysData=Zirconium705
}else if(alloysName=="Cupro_Nickel_70_30"){
  Heading="Cupro Nickel 70/30"
  alloysData=CuproNickel70_30
}else if(alloysName=="Cupro_Nickel_90_10"){
  Heading="Cupro Nickel 90/10"
  alloysData=CuproNickel90_10
}else if(alloysName=="Duplex_steel_31803_2205"){
  Heading="Duplex steel 31803 / 2205"
  alloysData=DuplexSteel31803_2205
}else if(alloysName=="Duplex_steel_32750_32760"){
  Heading="Duplex steel 32750 / 32760"
  alloysData=DuplexSteel32750_32760
}else if(alloysName=="Zeron_100"){
  Heading="Zeron 100"
  alloysData=Zeron100
}
else{
  Heading=alloysName
  alloysData=Inconel600
}
  return (
    <div>
    <SubHeader data={{heading:Heading,bredcrum:[{name:"Home",link:'/'},{name:"alloys",link:"#"},{name:alloysName,link:"/alloys/"+alloysName}]}}/>
    <div className="grid grid-cols-1 md:grid-cols-4 px-[5%] h-auto mt-[40px] mb-[40px] gap-3">
    <div className=" md:col-span-3 h-ful">
    <AlloysCom data={alloysData} />
    </div>
    <div className="border shadow-lg rounded-md">
   <RigthSideBox  pathname={`/alloys/`+alloysName} />
    </div>
  </div>
  <ContactProduct/>
    </div>
  )
}

export default page