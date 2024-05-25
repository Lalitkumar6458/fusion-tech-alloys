'use client'
import React, { useState } from 'react';
import Link from 'next/link'
import { FaSearch,FaBars, FaMinus } from 'react-icons/fa'
import {FiPlus} from "react-icons/fi"
import {LiaAngleRightSolid} from "react-icons/lia"
import { Button, Drawer, AutoComplete, Input } from "antd";
import Image from 'next/image';
import Router,{ useRouter } from 'next/router';



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
  Router.events.on('routeChangeStart',(url)=>{
  })
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
      name:"Product",
      link:"/product",

      submenu:[
       {
        name:"Manufacturing",
        link:'',
        submenu:[
          {
            name:"Pipe Fittings",
            link:"/product/pipeFettings"
          },
          {
            name:"Flanges",
            link:"/product/flanges"
          },
          {
            name:"Dairy Fittings",
            link:"/product/dairyFetting"
                },
          {
            name:"Fasteners",
            link:"/product/fasteners"
          },
        ]
       },
       {
        name:"Trading",
        link:'',
        submenu:[
          {
            name:"Pipe",
            link:"/product/pipe"
          },
          {
            name:"Tubes",
            link:"/product/tubes"
          },
          {
            name:"Round Bar",
            link:"/product/roundbar"
          },
          {
            name:"Wire",
            link:"/product/Wire"
          },
          {
            name:"Forged Circle & Ring",
            link:"/product/tubes"
          },
          {
            name:"Sheet & Plate",
            link:"/product/SheetAndPlate"
          },
          {
            name:"COILS & STIRPS",
            link:"/product/CoilsAndStirps"
          },
        ]
       }
      ]
    },
    {
      name:"Material",
      link:"/material",
      submenu:[
        {
          name:"Alloys",
          link:"/material/alloys",
          submenu:[
            {
              name:"Inconel Alloys",
              link:"/material/alloys/InconelAlloys",
            },
            {
              name:"Monel Alloys",
              link:"/material/alloys/MonelAlloys",
            },
            {
              name:"Hastelloy",
              link:"/material/alloys/Hastelloy",
            },
            {
              name:"Duplex Alloys",
              link:"/material/alloys/DuplexAlloys",
            },
            {
              name:"Super Duplex Alloys",
              link:"/material/alloys/SuperDuplexAlloys",
            },
            {
              name:"Cupro Nickel Alloys",
              link:"/material/alloys/CuproNickelAlloys",
            },
            {
              name:"SMO 254",
              link:"/material/alloys/SMO254",
            },
            {
              name:"Alloy 20",
              link:"/material/alloys/Alloy20",
            },
            {
              name:"Titanium",
              link:"/material/alloys/Titanium",
            },

          ]
        },
        {
          name:"Stainless Steel",
          link:"/material/StainlessSteel"


        },
        {
          name:"Carbon Steel",
          link:"/material/CarbonSteel"
        },
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
  Router.events.on('routeChangeComplete',(url)=>{
    setOpen(false)
  })
  const showSubmenuMobile=(name)=>{
    console.log("name",name)
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
   const searchdfhesult= searchLabelsAndValuesByText(data,value)
    setOptions(value ? searchResult(searchdfhesult) : []);
  };
  const onSelect = (value) => {
    onSearchClose()
  };

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
  <img className='h-[60px] w-[270px] object-fill' src={"/Images/Base/logo.png"}  alt='logo'/>
        </div>
        <div className="flex items-center gap-5">
          <ul className="hidden items-center justify-center gap-3 md:flex">
            {data.map((item) => {
              return (
                <li
                  key={item.name}
                  className="text-[1.1rem] font-poppins font-medium rounded-md hover:text-thmBase text-thmBlack h-[60px] px-2 flex items-center justify-center relative group"
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
                              <ul className="left-[101%] absolute top-[-2px] bg-white text-gray-900 shadow-boxshadow border-t-2 border-thmBase ">
                                {each.submenu.map((every) => {
                                  return (
                                    <li
                                      key={every.name}
                                      className="text-[1rem] bg-white whitespace-nowrap h-[40px] px-5 hover:text-thmBase text-thmBlack  border-b border-thmBase flex items-center justify-between hover:border-l-2 relative"
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
                <li className=" text-[1.2rem] pb-[10px] font-Roboto font-medium">
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
                                    <li className="px-2 py-2" key={item.name}>
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