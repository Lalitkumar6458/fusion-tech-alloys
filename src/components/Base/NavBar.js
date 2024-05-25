'use client'
import React, { useEffect, useState } from 'react'
import TopInfo from './TopInfo';
import Header from './Header';

const NavBar = () => {
    const [showTopBar, setShowTopBar] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 110) {
          setShowTopBar(true);
        } else {
          setShowTopBar(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div>
    <TopInfo/>
    {
     showTopBar?<div className=''>
    <Header fixed={true}/>
     </div>:null
    }
  
    <Header fixed={false}/>
    </div>
  )
}

export default NavBar