import React from 'react'
import '../globals.css'
import SidebarClothing from '../components/ProductPage/sidebar-clothing/page'
import ProductCard from '../components/ProductPage/productcard/page'
import clothing from '../scripts/clothing.js'
import TopFilterClothing from '../components/ProductPage/topfilter-clothing/page'

const Clothing = () => {
  return (
    <>
    <div className='containerDiv'>
       <div className='aside'>
        <SidebarClothing />
       </div>
       <div className='productLayout'>
          <TopFilterClothing />
          <div className='gridLayout'>
              {clothing.map((item) => {
                return (
                  <ProductCard 
                    id={item.id}
                    key = {item.id}
                    img = {item.thumbnail}
                    name = {item.name}
                    price = {item.price}
                  />
                )
              })}
          </div>
        </div>
    </div>
    </>
  )
}

export default Clothing;