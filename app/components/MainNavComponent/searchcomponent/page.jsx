"use client"
import React, { useState } from 'react';
import './searchcomponent.css';
import search from '@/public/icons/search.png';

const SearchComponent = () => {
  const [isSearchActive, setSearchActive] = useState(false);
  const [isSearchBtnActive, setSearchBtnActive] = useState(false);

  const searchClick = () => {
    setSearchActive(true);
  }

  const listenBtnClick = () => {
    setSearchBtnActive(true);
    isSearchBtnActive ? setSearchActive(false) : setSearchActive(true);
  }

  return (
    <div className='searchContainer'>
        <input className={isSearchActive ? 'search searchInputActive' : 'search searchInput'}
                onClick={setSearchActive}
                id='searchBar'
                type="text"
                placeholder='search'/>
        <img className='searchBtn' onClick={listenBtnClick} src="https://cdn.builder.io/api/v1/image/assets/TEMP/5afd1fde4870f1f63d489920dcd52018d2dd2d8633cbd37d7487bb8b3336f857?" alt="search" />
    </div>
  )
}

export default SearchComponent;