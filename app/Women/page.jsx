import React from 'react'
import '../globals.css'
import SidebarShoes from '../components/ProductPage/sidebar-shoes/page'
import ProductCard from '../components/ProductPage/productcard/page'
import ladyShoes from '../scripts/womenshoes'
import TopFilter from '../components/ProductPage/topfilter/page'

const WomenShoes = () => {
  return (
    <>
    <div className='containerDiv'>
       <div className='aside'>
        <SidebarShoes />
       </div>
       <div className='productLayout'>
          <TopFilter />
          <div className='gridLayout'>
              {ladyShoes.map((item) => {
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

export default WomenShoes;