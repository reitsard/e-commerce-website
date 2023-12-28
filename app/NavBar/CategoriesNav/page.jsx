"use client"
import React from 'react';
import Link from 'next/link';
import './categoriesnav.css';
import categoryList from './categorylist';
import { useState } from 'react';
import { useRouter } from 'next/router'


export let isClicked = false;

const CategoriesNav = () => {
  /* checks state */
  const checkStatus = (targetId) => {
    categoryList.map((catItem) => {
      if (targetId == catItem.name) {
        catItem.active = true;
      }
      else {
        catItem.active = false;
      }
    });
    };

  /* styling */
  const itemActive = (targetId) => {
    categoryList.map((catItem) => {
      const activeItem = document.getElementById(targetId);
      if (catItem.name == targetId && catItem.active === true){
        activeItem.classList.add("activeItem");
      }
    });
  }


  /* updates state */
  const updateStatus = (event) => {
    let targetId = event.currentTarget.id;
    const activItem = document.querySelectorAll(".categoryItem");
    isClicked = true;
    
    /* removes all active links on click event */
    Array.from(activItem).forEach(item => {
      item.classList.remove('activeItem');
    });

    checkStatus(targetId);
    itemActive(targetId);
  };


  /* creates navigation */
  const cList = categoryList.map((list) => {
    return (
      <div
        className={list.id}
        id={list.name}
        key={list.name}
        onClick={updateStatus}
        >
          <Link href={list.name}>{list.name}</Link>
      </div>
    )
  });

  return (
    <div className="container">
      <nav className="categories">
        {cList}
        <span></span>
      </nav>
    </div>
  );

  }

export default CategoriesNav;