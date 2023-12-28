"use client"
import React from 'react'
import { useState } from 'react'
import './sidebar.css'

const SidebarAccessories = () => {
  const [isLifeStyleActive, setLifeStyleActive] = useState(false);
  const [isPerformanceActive, setPerformanceActive] = useState(false);
  const [isCrossTrainingActive, setCrossTrainingActive] = useState(false);
  const [isAthleisureeActive, setAthleisureActive] = useState(false);
  const [isOutdoorActive, setOutdoorActive] = useState(false);
  const [isTrailActive, setTrailActive] = useState(false);
  const [isSlidesActive, setSlidesActive] = useState(false);

  const accFilter = [
    {
      name: "Bags",
      func: isLifeStyleActive,
      id: "bags"
    },
    {
      name: "Caps",
      func: isPerformanceActive,
      id: "caps"
    },
    {
      name: "Socks",
      func: isCrossTrainingActive,
      id: "socks"
    },
    {
      name: "Shoe Cleaner",
      func: isAthleisureeActive,
      id: "shoeclean"
    },
    {
      name: "Protective",
      func: isOutdoorActive,
      id: "protective"
    },
    {
      name: "Speed Gear",
      func: isTrailActive,
      id: "speedgear"
    }
  ];

  const checkItemState = (event) => {
    const itemId = event.currentTarget.id;
    if (itemId == "bags") {
      setLifeStyleActive(true);
      setPerformanceActive(false);
      setCrossTrainingActive(false);
      setAthleisureActive(false);
      setOutdoorActive(false);
      setTrailActive(false);
      setSlidesActive(false);
    }
    if (itemId == "caps") {
      setLifeStyleActive(false);
      setPerformanceActive(true);
      setCrossTrainingActive(false);
      setAthleisureActive(false);
      setOutdoorActive(false);
      setTrailActive(false);
      setSlidesActive(false);
    }
    if (itemId == "socks") {
      setLifeStyleActive(false);
      setPerformanceActive(false);
      setCrossTrainingActive(true);
      setAthleisureActive(false);
      setOutdoorActive(false);
      setTrailActive(false);
      setSlidesActive(false);
    }
    if (itemId == "shoeclean") {
      setLifeStyleActive(false);
      setPerformanceActive(false);
      setCrossTrainingActive(false);
      setAthleisureActive(true);
      setOutdoorActive(false);
      setTrailActive(false);
      setSlidesActive(false);
    }
    if (itemId == "protective") {
      setLifeStyleActive(false);
      setPerformanceActive(false);
      setCrossTrainingActive(false);
      setAthleisureActive(false);
      setOutdoorActive(true);
      setTrailActive(false);
      setSlidesActive(false);
    }
    if (itemId == "speedgear") {
      setLifeStyleActive(false);
      setPerformanceActive(false);
      setCrossTrainingActive(false);
      setAthleisureActive(false);
      setOutdoorActive(false);
      setTrailActive(true);
      setSlidesActive(false);
    }
  }

  return (
  <div className='sidebar'>
    <div className="filterTxt">FILTER</div>
    <nav className="shoeCategories">
      {accFilter.map((e) => {
        return (
          <p onClick={checkItemState} key={e.id} className={e.func ? 'prodCat activeFilter' : 'prodCat'} id={e.id}>{e.name}</p>
        )
      })}
      <span className='bar'></span>
    </nav>
  </div>
)
}

export default SidebarAccessories