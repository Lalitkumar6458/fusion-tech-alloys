'use client'
import { Collapse } from 'antd';
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { MdDoubleArrow } from "react-icons/md";

const CollapseGrade = ({data, DefaultKey, isSingle, pathname}) => {
  const [defaultOpen, setDefaultOpen] = useState(1);

  useEffect(() => {
    let matchFound = false;
    if (pathname) {
      data.forEach((item, index) => {
        item.grades.forEach((each) => {
          if (!matchFound && pathname === each.link) {
            setDefaultOpen(index + 1);
            matchFound = true;
          }
        });
      });
    }
  }, [pathname, data]);
  

  const onChange = (key) => {

    setDefaultOpen(key)
  };

  return (
    <div>
      <Collapse accordion activeKey={defaultOpen} onChange={onChange}>
        {data.map((item, index) => (
          <Collapse.Panel key={index + 1} header={<h2 className='text-[1.2rem] font-Roboto font-medium uppercase'>{item.name}</h2>}>
            <div className={`grid ${isSingle ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2  lg:grid-cols-3'} gap-3 mt-2`}>
              {item.grades.map((each, i) => (
                <Link href={each.link} key={each.name}>
                  <div
                    className={`w-full h-[50px]  border-l-[3px] ${pathname === each.link ? 'bg-thmBlack text-white' : 'bg-[#f6f6f6]'} border-goldLight  flex items-center justify-between px-3 text-[1.2rem] font-Oswald mb-2 hover:bg-thmBlack hover:text-white transition-all duration-300 ease-in-out`}
                  >
                    <h3>{each.name}</h3>
                    <MdDoubleArrow />
                  </div>
                </Link>
              ))}
            </div>
          </Collapse.Panel>
        ))}
      </Collapse>
    </div>
  );
}

export default CollapseGrade;
