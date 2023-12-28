import React from 'react'
import './wishlist.css'
import ProductCard from '../components/ProductPage/productcard/page'
import menshoe from '../scripts/menshoes.js'
import womenshoe from '../scripts/menshoes.js'

const Wishlist = () => {
  return (
    <div className='wishlistPage'>
        {menshoe.map((item) => {
            return (
                <ProductCard 
                    key={item.id}
                    id={item.id}
                    img={item.thumbnail}
                    name={item.name}
                    price={item.price}
                />
            )
        })}
        {womenshoe.map((item) => {
            return (
                <ProductCard 
                    key={item.id}
                    id={item.id}
                    img={item.thumbnail}
                    name={item.name}
                    price={item.price}
                />
            )
        })}
    </div>
  )
}

export default Wishlist