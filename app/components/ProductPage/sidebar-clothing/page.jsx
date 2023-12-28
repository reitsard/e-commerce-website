"use client"
import React from 'react'
import { useState } from 'react'
import './sidebar.css'

const SidebarClothing = () => {
  const [isLifeStyleActive, setLifeStyleActive] = useState(false);
  const [isPerformanceActive, setPerformanceActive] = useState(false);
  const [isCrossTrainingActive, setCrossTrainingActive] = useState(false);
  const [isAthleisureeActive, setAthleisureActive] = useState(false);
  const [isOutdoorActive, setOutdoorActive] = useState(false);
  const [isTrailActive, setTrailActive] = useState(false);
  const [isSlidesActive, setSlidesActive] = useState(false);

  const menFilter = [
    {
      name: "Tops & Skirts",
      func: isLifeStyleActive,
      id: "tops"
    },
    {
      name: "Hoodies & Sweetshirts",
      func: isPerformanceActive,
      id: "hoodies"
    },
    {
      name: "Jackets",
      func: isCrossTrainingActive,
      id: "jackets"
    },
    {
      name: "Swimwear",
      func: isAthleisureeActive,
      id: "swimwear"
    },
    {
      name: "Pants",
      func: isOutdoorActive,
      id: "pants"
    },
    {
      name: "Shorts",
      func: isTrailActive,
      id: "shorts"
    },
    {
      name: "Sportswear",
      func: isSlidesActive,
      id: "sportswear"
    },
  ];

  const checkItemState = (event) => {
    const itemId = event.currentTarget.id;
    if (itemId == "tops") {
      setLifeStyleActive(true);
      setPerformanceActive(false);
      setCrossTrainingActive(false);
      setAthleisureActive(false);
      setOutdoorActive(false);
      setTrailActive(false);
      setSlidesActive(false);
    }
    if (itemId == "hoodies") {
      setLifeStyleActive(false);
      setPerformanceActive(true);
      setCrossTrainingActive(false);
      setAthleisureActive(false);
      setOutdoorActive(false);
      setTrailActive(false);
      setSlidesActive(false);
    }
    if (itemId == "jackets") {
      setLifeStyleActive(false);
      setPerformanceActive(false);
      setCrossTrainingActive(true);
      setAthleisureActive(false);
      setOutdoorActive(false);
      setTrailActive(false);
      setSlidesActive(false);
    }
    if (itemId == "swimwear") {
      setLifeStyleActive(false);
      setPerformanceActive(false);
      setCrossTrainingActive(false);
      setAthleisureActive(true);
      setOutdoorActive(false);
      setTrailActive(false);
      setSlidesActive(false);
    }
    if (itemId == "pants") {
      setLifeStyleActive(false);
      setPerformanceActive(false);
      setCrossTrainingActive(false);
      setAthleisureActive(false);
      setOutdoorActive(true);
      setTrailActive(false);
      setSlidesActive(false);
    }
    if (itemId == "shorts") {
      setLifeStyleActive(false);
      setPerformanceActive(false);
      setCrossTrainingActive(false);
      setAthleisureActive(false);
      setOutdoorActive(false);
      setTrailActive(true);
      setSlidesActive(false);
    }
    if (itemId == "sportswear") {
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

export default SidebarClothing