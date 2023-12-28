"use client"
import React from 'react'
import { useState } from 'react'
import './topfilter.css'

export const topfilterstate = [
    {
        filter: "all",
        all: true
    },
    {
        filter: "latest",
        latest: false
    },
    {
        filter: "limited",
        limited: false
    }
]


const TopFilter = () => {
    /* checking if a filter is active */
    const [isAllActive, setAllActive] = useState(true);
    const [isLatestActive, setLatestActive] = useState(false);
    const [isLimitedActive, setLimitedActive] = useState(false);

    topfilterstate[0].all = isAllActive;
    topfilterstate[1].latest = isLatestActive;
    topfilterstate[2].limited = isLimitedActive;

    /* onClick function to check and set filter state */
    const handleState = (event) => {
        let itemFilter = event.currentTarget.id;
        if (itemFilter == "all") {
            setAllActive(true);
            setLatestActive(false);
            setLimitedActive(false);
        }
        else if (itemFilter == "latest") {
            setLatestActive(true);
            setAllActive(false);
            setLimitedActive(false);
        }
        else if (itemFilter == "limited") {
            setLimitedActive(true);
            setAllActive(false);
            setLatestActive(false);
        }
    }


  return (
    <div className="topFilter">
        <p id='all' onClick={handleState} className={isAllActive ? "topFilterOptions topFilterActive" : "topFilterOptions"}>All Products</p>
        <p id='latest' onClick={handleState} className={isLatestActive ? "topFilterOptions topFilterActive" : "topFilterOptions"}>Latest</p>
        <p id='limited' onClick={handleState} className={isLimitedActive ? "topFilterOptions topFilterActive" : "topFilterOptions"}>Limited Time Only</p>
        <span className='bottomBar'></span>
    </div>
  )
}

export default TopFilter