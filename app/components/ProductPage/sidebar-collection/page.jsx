"use client"
import React from 'react'
import { useState } from 'react'
import './sidebar.css'

const SidebarCollection = () => {
  const [isLifeStyleActive, setLifeStyleActive] = useState(false);
  const [isPerformanceActive, setPerformanceActive] = useState(false);
  const [isCrossTrainingActive, setCrossTrainingActive] = useState(false);
  const [isAthleisureeActive, setAthleisureActive] = useState(false);
  const [isOutdoorActive, setOutdoorActive] = useState(false);
  const [isTrailActive, setTrailActive] = useState(false);
  const [isSlidesActive, setSlidesActive] = useState(false);

  const menFilter = [
    {
      name: "Lifestyle",
      func: isLifeStyleActive,
      id: "life"
    },
    {
      name: "Peformance",
      func: isPerformanceActive,
      id: "perf"
    },
    {
      name: "Cross Training",
      func: isCrossTrainingActive,
      id: "cross"
    },
    {
      name: "Athleisure",
      func: isAthleisureeActive,
      id: "ath"
    },
    {
      name: "Outdoor",
      func: isOutdoorActive,
      id: "outdoor"
    },
    {
      name: "Trail",
      func: isTrailActive,
      id: "trail"
    },
    {
      name: "Slides and Slippers",
      func: isSlidesActive,
      id: "slides"
    },
  ];

  const checkItemState = (event) => {
    const itemId = event.currentTarget.id;
    if (itemId == "life") {
      setLifeStyleActive(true);
      setPerformanceActive(false);
      setCrossTrainingActive(false);
      setAthleisureActive(false);
      setOutdoorActive(false);
      setTrailActive(false);
      setSlidesActive(false);
    }
    if (itemId == "perf") {
      setLifeStyleActive(false);
      setPerformanceActive(true);
      setCrossTrainingActive(false);
      setAthleisureActive(false);
      setOutdoorActive(false);
      setTrailActive(false);
      setSlidesActive(false);
    }
    if (itemId == "cross") {
      setLifeStyleActive(false);
      setPerformanceActive(false);
      setCrossTrainingActive(true);
      setAthleisureActive(false);
      setOutdoorActive(false);
      setTrailActive(false);
      setSlidesActive(false);
    }
    if (itemId == "ath") {
      setLifeStyleActive(false);
      setPerformanceActive(false);
      setCrossTrainingActive(false);
      setAthleisureActive(true);
      setOutdoorActive(false);
      setTrailActive(false);
      setSlidesActive(false);
    }
    if (itemId == "outdoor") {
      setLifeStyleActive(false);
      setPerformanceActive(false);
      setCrossTrainingActive(false);
      setAthleisureActive(false);
      setOutdoorActive(true);
      setTrailActive(false);
      setSlidesActive(false);
    }
    if (itemId == "trail") {
      setLifeStyleActive(false);
      setPerformanceActive(false);
      setCrossTrainingActive(false);
      setAthleisureActive(false);
      setOutdoorActive(false);
      setTrailActive(true);
      setSlidesActive(false);
    }
    if (itemId == "slides") {
      setLifeStyleActive(false);
      setPerformanceActive(false);
      setCrossTrainingActive(false);
      setAthleisureActive(false);
      setOutdoorActive(false);
      setTrailActive(false);
      setSlidesActive(true);
    }
  }

  return (
  <div className='sidebar'>
    <div className="filterTxt">FILTER</div>
    <nav className="shoeCategories">
      {menFilter.map((e) => {
        return (
          <p onClick={checkItemState} key={e.id} className={e.func ? 'prodCat activeFilter' : 'prodCat'} id={e.id}>{e.name}</p>
        )
      })}
      <span className='bar'></span>
    </nav>
  </div>
)
}

export default SidebarCollection