import React, { useMemo } from 'react'
import maleShoes from '@/app/scripts/menshoes'
import ProductCard from '../../ProductPage/productcard/page'

const MaleAll = () => {
  return (
    <>
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
    </>
  )
}

export default MaleAll