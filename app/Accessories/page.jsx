import React from 'react'
import '../globals.css'
import SidebarAccessories from '../components/ProductPage/sidebar-accessories/page'
import ProductCard from '../components/ProductPage/productcard/page'
import accessories from '../scripts/accessories.js'
import TopFilter from '../components/ProductPage/topfilter/page'

const Accessories = () => {
  return (
    <>
    <div className='containerDiv'>
       <div className='aside'>
        <SidebarAccessories />
       </div>
       <div className='productLayout'>
          <TopFilter />
          <div className='gridLayout'>
              {accessories.map((item) => {
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
export default Accessories;