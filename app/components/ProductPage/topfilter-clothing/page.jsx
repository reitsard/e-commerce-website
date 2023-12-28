"use client"
import React from 'react'
import { useState } from 'react'
import './topfilter-clothing.css'

const TopFilterClothing = () => {
    /* checking if a filter is active */
    const [isMenActive, setMenActive] = useState(true);
    const [isWomenActive, setWomenActive] = useState(false);
    const [isKidsActive, setKidsActive] = useState(false);

    /* onClick function to check and set filter state */
    const handleState = (event) => {
        let itemFilter = event.currentTarget.id;
        if (itemFilter == "men") {
            setMenActive(true);
            setWomenActive(false);
            setKidsActive(false);
        }
        else if (itemFilter == "women") {
            setWomenActive(true);
            setMenActive(false);
            setKidsActive(false);
        }
        else if (itemFilter == "kids") {
            setKidsActive(true);
            setMenActive(false);
            setWomenActive(false);
        }
    }

  return (
    <div className="topFilter">
        <p id='men' onClick={handleState} className={isMenActive ? "topFilterOptions topFilterActive" : "topFilterOptions"}>Men</p>
        <p id='women' onClick={handleState} className={isWomenActive ? "topFilterOptions topFilterActive" : "topFilterOptions"}>Women</p>
        <p id='kids' onClick={handleState} className={isKidsActive ? "topFilterOptions topFilterActive" : "topFilterOptions"}>Kids</p>
        <span className='bottomBar'></span>
    </div>
  )
}

export default TopFilterClothing