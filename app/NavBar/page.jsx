import React from 'react'
import MainNav from './MainNav/page'
import CategoriesNav from './CategoriesNav/page'
import './navbar.css'

const NavBar = () => {
  return (
    <div className='navBar'>
      <MainNav />
      <CategoriesNav />
    </div>
  )
}

export default NavBar