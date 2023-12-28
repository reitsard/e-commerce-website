import React from 'react'
import '../globals.css'
import SidebarCollection from '../components/ProductPage/sidebar-collection/page'
import ProductCard from '../components/ProductPage/productcard/page'
import maleShoes from '../scripts/menshoes.js'
import TopFilter from '../components/ProductPage/topfilter/page'

const Collection = () => {
  return (
    <>
    <TopFilter />
    <div className='containerDiv'>
       <div className='aside'>
          <SidebarCollection />
       </div>

       <div className='gridLayout'>
          {maleShoes.map((item) => {
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
    </>
  )
}

export default Collection;