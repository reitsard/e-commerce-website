import React, { useMemo } from 'react'
import maleShoes from '@/app/scripts/menshoes'
import ProductCard from '../../ProductPage/productcard/page'

const MaleLatest = () => {
  return (
    <>
    {maleShoes.map((item) => {
        if (item.latest === true) {
          return (
            <ProductCard 
              id={item.id}
              key = {item.id}
              img = {item.thumbnail}
              name = {item.name}
              price = {item.price}
            />
          )
        }
      })}
    </>
  )
}

export default MaleLatest