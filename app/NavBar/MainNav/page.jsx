import React from 'react';
import Image from 'next/image'
import './mainnav.css';
import MainIcons from '@/app/components/MainNavComponent/mainIcons/page';
import SearchComponent from '@/app/components/MainNavComponent/searchcomponent/page';
import logo from '@/public/logo.png';

const MainNav = () => {
  return (
    <div className="container">
      <div className='navContainer'>
      <Image className="imgContainer" src={logo} alt="logo" />

      <div className="navigation">
        <SearchComponent />
        <div className="iconsContainer">
          <MainIcons />
          <div className="profileIcons">
            Login
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MainNav