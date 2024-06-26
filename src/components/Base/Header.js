'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { FaSearch,FaBars, FaMinus } from 'react-icons/fa'
import {FiPlus} from "react-icons/fi"
import {LiaAngleRightSolid} from "react-icons/lia"
import { Button, Drawer, AutoComplete, Input } from "antd";
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';




const searchResult = (data) =>{
 const searchData = data.map((item, idx) => {
   return {
     value: item.label,
     label: (
       <Link href={item.value}>
         <div
           style={{
             display: "flex",
             justifyContent: "space-between",
           }}
           key={idx}
         >
           <span>
             <Link href={item.value}>{item.label}</Link>
           </span>
           <span>{data.length} results</span>
         </div>
       </Link>
     ),
   };
 });
 return searchData;
}


const Header = ({fixed}) => {
const router=useRouter()
const pathname = usePathname()
const [openSearch, setOpenSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const[mobileheaderChildShow,setMobileHeaderChildShow]=useState({
    Product:false,
    Material:false,
    Alloys:false
  })

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onSearchClose=()=>{
    setOpenSearch(false)
  }
  const showSearchtDrawer=()=>{
    setOpenSearch(true);

  }
  const data=[
    {
      name:"Home",
      link:"/"
    },
    {
      name:"About",
      link:"/about"
    },
    {
      name:"Alloys",
      link:"#",
      submenu:[
        {
          name:"INCONEL",
          link:"#",
          submenu:[
            {
              name:"Inconel 600",
              link:"/alloys/Inconel_600",
            },
            {
              name:"Inconel 617",
              link:"/alloys/Inconel_617",
            },
            {
              name:"Inconel 625",
              link:"/alloys/Inconel_625",
            },
            {
              name:"Inconel 718",
              link:"/alloys/Inconel_718",
            },
          ]
        },
        {
          name:"INCOLOY",
          link:"#",
          submenu:[
            {
              name:"Incoloy 800",
              link:"/alloys/Incoloy_800",
            },
            {
              name:"Incoloy 825",
              link:"/alloys/Incoloy_825",
            },
          ]

        },
        {
          name:"HASTELLOY",
          link:"#",
          submenu:[
            {
              name:"Hastelloy C276",
              link:"/alloys/Hastelloy_C276",
            },
            {
              name:"Hastelloy C22",
              link:"/alloys/Hastelloy_C22",
            },
            {
              name:"Hastelloy B2",
              link:"/alloys/Hastelloy_B2",
            },     {
              name:"Hastelloy B3",
              link:"/alloys/Hastelloy_B3",
            },     {
              name:"Hastelloy X",
              link:"/alloys/Hastelloy_X",
            },     {
              name:"Hastelloy C2000",
              link:"/alloys/Hastelloy_C2000",
            },
          ]
        }, {
          name:"TITANIUM",
          link:"#",
          submenu:[ 
            {
              name:"Titanium Gr 1",
              link:"/alloys/Titanium_Gr_1",
            },
            {
              name:"Titanium Gr 2",
              link:"/alloys/Titanium_Gr_2",
            },
            {
              name:"Titanium Gr 5",
              link:"/alloys/Titanium_Gr_5",
            },     {
              name:"Titanium Gr 9",
              link:"/alloys/Titanium_Gr_9",
            }
          ]
        },
        {
          name:"ZIRCONIUM",
          link:"#",
          submenu:[ 
            {
              name:"Zirconium 702",
              link:"/alloys/Zirconium_702",
            },
            {
              name:"Zirconium 705",
              link:"/alloys/Zirconium_705",
            },
           
          ]
        }, {
          name:"CUPRO NICKEL",
          link:"#",
          submenu:[ 
            {
              name:"Cupro Nickel 70/30",
              link:"/alloys/Cupro_Nickel_70_30",
            },
            {
              name:"Cupro Nickel 90/10",
              link:"/alloys/Cupro_Nickel_90_10",
            },
           
          ]
        }, {
          name:"DUPLEX & SUPER DUPLEX STEEL",
          link:"#",
          submenu:[ 
            {
              name:"Duplex steel 31803 / 2205",
              link:"/alloys/Duplex_steel_31803_2205",
            },
            {
              name:"Duplex steel 32750 / 32760",
              link:"/alloys/Duplex_steel_32750_32760",
            },    {
              name:"Zeron 100",
              link:"/alloys/Zeron_100",
            },
           
          ]
        },
      ]

    },
    {
      name:"Product",
      link:"/products",

      submenu:[
       {
        name:"Manufacturing",
        link:'',
        submenu:[
          {
            name:"Pipe Fittings",
            link:"/products/pipeFettings"
          },
          {
            name:"Flanges",
            link:"/products/flanges"
          },
          {
            name:"Fasteners",
            link:"/products/fasteners"
          },
        ]
       },
       {
        name:"Trading",
        link:'',
        submenu:[
          {
            name:"Pipe",
            link:"/products/pipe"
          },
          {
            name:"Tubes",
            link:"/products/tubes"
          },
          {
            name:"Bars & Rods ",
            link:"/products/bars_rods_wires"
          },
          {
            name:"Sheet,Plate & Coil",
            link:"/products/sheet_plate_colis"
          },
          {
            name:"Welding Consumables",
            link:"/products/welding_consumables"
          }
         
        ]
       }
      ]
    },
  
    {
      name:"Quality",
      link:"/quality"
    },
    {
      name:"Contact",
      link:"/contact"
    },
    // {
    //   name:"Gallery",
    //   link:"/"
    // }
  ]

  const showSubmenuMobile=(name)=>{
    
    setMobileHeaderChildShow(
      {
        ...mobileheaderChildShow,
        [name]:!mobileheaderChildShow[name]
      }
    )
  }
    const downloadPdf = () => {
      const anchor = document.createElement("a");
      anchor.href = "/MarutiSteelAlloysCatalogue.pdf"; // Adjust the path to your PDF file
      anchor.target = "_blank";
      anchor.download = "MarutiSteelAlloysCatalogue.pdf"; // Set the desired filename for download
      anchor.click();
    };
  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
   const searchdfhesult= searchLabelsAndValuesByText(searchData,value)
    setOptions(value ? searchResult(searchdfhesult) : []);
  };

  const onSelect = (value) => {
    onSearchClose()
  };
  const searchData=[
    {
      name:"Pipe",
      link:"/products/pipe"
    },
    {
      name:"Contact",
      link:"/contact"
    },
    {
      name:"Tubes",
      link:"/products/tubes"
    },
    {
      name:"Home",
      link:"/"
    },
    {
      name:"About",
      link:"/about"
    },
    {
      name:"Bars & Rods ",
      link:"/products/bars_rods_wires"
    },
    {
      name:"Sheet,Plate & Coil",
      link:"/products/sheet_plate_colis"
    },
    {
      name:"Welding Consumables",
      link:"/products/welding_consumables"
    },
      {
            name:"Pipe Fittings",
            link:"/products/pipeFettings"
          },
          {
            name:"Flanges",
            link:"/products/flanges"
          },
          {
            name:"Fasteners",
            link:"/products/fasteners"
          },
          {
            name:"Inconel 600",
            link:"/alloys/Inconel_600",
          },
          {
            name:"Inconel 617",
            link:"/alloys/Inconel_617",
          },
          {
            name:"Inconel 625",
            link:"/alloys/Inconel_625",
          },
          {
            name:"Inconel 718",
            link:"/alloys/Inconel_718",
          }, {
            name:"Incoloy 800",
            link:"/alloys/Incoloy_800",
          },
          {
            name:"Incoloy 825",
            link:"/alloys/Incoloy_825",
          },  {
            name:"Hastelloy C276",
            link:"/alloys/Hastelloy_C276",
          },
          {
            name:"Hastelloy C22",
            link:"/alloys/Hastelloy_C22",
          },
          {
            name:"Hastelloy B2",
            link:"/alloys/Hastelloy_B2",
          },     {
            name:"Hastelloy B3",
            link:"/alloys/Hastelloy_B3",
          },     {
            name:"Hastelloy X",
            link:"/alloys/Hastelloy_X",
          },     {
            name:"Hastelloy C2000",
            link:"/alloys/Hastelloy_C2000",
          }, {
            name:"Titanium Gr 1",
            link:"/alloys/Titanium_Gr_1",
          },
          {
            name:"Titanium Gr 2",
            link:"/alloys/Titanium_Gr_2",
          },
          {
            name:"Titanium Gr 5",
            link:"/alloys/Titanium_Gr_5",
          },     {
            name:"Titanium Gr 9",
            link:"/alloys/Titanium_Gr_9",
          }, {
            name:"Zirconium 702",
            link:"/alloys/Zirconium_702",
          },
          {
            name:"Zirconium 705",
            link:"/alloys/Zirconium_705",
          },  {
            name:"Cupro Nickel 70/30",
            link:"/alloys/Cupro_Nickel_70_30",
          },
          {
            name:"Cupro Nickel 90/10",
            link:"/alloys/Cupro_Nickel_90_10",
          },   {
            name:"Duplex steel 31803 / 2205",
            link:"/alloys/Duplex_steel_31803_2205",
          },
          {
            name:"Duplex steel 32750 / 32760",
            link:"/alloys/Duplex_steel_32750_32760",
          },    {
            name:"Zeron 100",
            link:"/alloys/Zeron_100",
          },
         
  ]

  function searchLabelsAndValuesByText(objects, searchText) {
    const matchingItems = [];

    function searchRecursive(items) {
      for (const item of items) {
        if (item.name.toLowerCase().includes(searchText.toLowerCase())) {
          matchingItems.push({ label: item.name, value: item.link });
        }
        if (item.submenu) {
          searchRecursive(item.submenu);
        }
      }
    }

    searchRecursive(objects);
    return matchingItems;
  }
  useEffect(()=>{
    onClose()
  },[pathname])


  return (
    <div
      className="px-[5%] transition-all duration-500 shadow-headerShadow h-[60px] flex items-center justify-center z-[1000] bg-white w-full"
      style={{
        position: fixed ? "fixed" : "relative",
        top: fixed ? "0px" : null,
      }}
    >
      <div className="flex items-center justify-between w-full">
        <div className="text-[1.6rem] h-full font-heading font-medium text-dark-cl">
  <img className='h-[50px] w-[230px] md:w-[270px] object-fill' src={"/Images/Base/logo1.png"}  alt='logo'/>
        </div>
        <div className="flex items-center gap-5">
          <ul className="hidden items-center justify-center gap-3 md:flex">
            {data.map((item) => {
              return (
                <li
                  key={item.name}
                  className={`text-[1.1rem] font-poppins font-medium rounded-md hover:text-thmBase  h-[60px] px-2 flex items-center justify-center ${pathname==item.link?'text-thmBase ':'text-thmBlack'} relative group`}
                >
                  <Link href={item.link}>{item.name}</Link>{" "}
                  {item.submenu ? (
                    <FiPlus className="ml-[5px] cursor-pointer" />
                  ) : null}
                  {item.submenu ? (
                    <ul className="top-[60px] absolute w-fit bg-white text-gray-900 shadow-boxshadow pt-2 border-t-2 border-thmBase hidden group-hover:block">
                      {item.submenu.map((each) => {
                        return (
                          <li
                            key={each.name}
                            className="text-[1rem]  whitespace-nowrap hover:text-dark-pink text-thmBlack h-[40px] px-5 border-b border-thmBase flex items-center justify-between hover:border-l-2 relative childNav "
                          >
                            <Link href={each.link}>{each.name}</Link>

                            {each.submenu ? <LiaAngleRightSolid /> : null}

                            {each.submenu ? (
                              <ul className="left-[100.5%] absolute top-[-2px] bg-white text-gray-900 shadow-boxshadow border-t-2 border-thmBase ">
                                {each.submenu.map((every) => {
                                  return (
                                    <li
                                      key={every.name}
                                      className={`text-[1rem] bg-white whitespace-nowrap h-[40px] px-5 hover:text-thmBase   border-b border-thmBase flex items-center justify-between hover:border-l-2 relative ${pathname==every.link?'text-thmBase ':'text-thmBlack'}`}
                                    >
                                      <Link href={every.link}>
                                        {every.name}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            ) : null}
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-5">
            <FaSearch
              onClick={showSearchtDrawer}
              className="text-[1.2rem] cursor-pointer"
            />
            <FaBars
              onClick={showDrawer}
              className="text-[1.2rem] cursor-pointer md:hidden"
            />
          </div>
        </div>
      </div>
      <Drawer
        title="Fusion Tech Alloys"
        width={300}
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="">
          <ul>
            {data.map((item, index) => {
              return (
                <li key={index} className={` text-[1.2rem] pb-[10px] font-Roboto font-medium ${pathname==item.link?'text-thmBase ':'text-thmBlack'}`}>
                  <div className="flex items-center" key={item.name}>
                    <Link href={item.link}>{item.name}</Link>
                    {item.submenu ? (
                      mobileheaderChildShow[item.name] ? (
                        <FaMinus
                          className="ml-[5px] cursor-pointer"
                          onClick={() => showSubmenuMobile(item.name)}
                        />
                      ) : (
                        <FiPlus
                          className="ml-[5px] cursor-pointer"
                          onClick={() => showSubmenuMobile(item.name)}
                        />
                      )
                    ) : null}
                  </div>
                  {item.submenu ? (
                    <ul
                      className={`h-fit ml-5 shadow ${
                        mobileheaderChildShow[item.name] ? "" : "hidden"
                      }`}
                    >
                      {item.submenu.map((item, index) => {
                        return (
                          <li className="px-2 py-2" key={item.name}>
                            <div className="flex items-center">
                              <Link href={item.link}>{item.name}</Link>
                              {item.submenu ? (
                                mobileheaderChildShow[item.name] ? (
                                  <FaMinus
                                    className="ml-[5px] cursor-pointer"
                                    onClick={() => showSubmenuMobile(item.name)}
                                  />
                                ) : (
                                  <FiPlus
                                    className="ml-[5px] cursor-pointer"
                                    onClick={() => showSubmenuMobile(item.name)}
                                  />
                                )
                              ) : null}
                            </div>
                            {item.submenu ? (
                              <ul
                                className={`h-fit ml-5 shadow ${
                                  mobileheaderChildShow[item.name]
                                    ? ""
                                    : "hidden"
                                }`}
                              >
                                {item.submenu.map((item, index) => {
                                  return (
                                    <li className={`px-2 py-2 ${pathname==item.link?'text-thmBase ':'text-thmBlack'}`} key={item.name}>
                                      <Link href={item.link}>{item.name}</Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            ) : null}
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
          <button
            onClick={downloadPdf}
            className="h-[50px] bg-thmBase text-white rounded-md px-3 text-[1.3rem] font-exo md:flex items-center justify-center mt-4"
          >
            Catalogue
          </button>
        </div>
      </Drawer>
      <Drawer
        title={` Search More About Products...`}
        placement="top"
        height={150}
        onClose={onSearchClose}
        open={openSearch}
      >
        <div className="">
          <AutoComplete
            dropdownMatchSelectWidth={252}
            style={{
              width: '100%',
            }}
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
          >
            <Input.Search size="large" placeholder="Search here...!" enterButton />
          </AutoComplete>
        </div>
      </Drawer>
    </div>
  );
}

export default Header