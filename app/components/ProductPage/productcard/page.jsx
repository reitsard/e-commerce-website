"use client"
import React from 'react'
import Image from 'next/image'
import './productcard.css'

const ProductCard = (props) => {
  return (
    <div className="productCard"
          id={props.id}
          key={props.id}>
            <div className="thumbnailContainer">
              <Image
                className='thumbnail' 
                src={props.img}
                alt='thumb'
                width={500}
                height={500}
                />
            </div>
            <div className="textContainer">
              <p className='productName'>{props.name}</p>
              <p className='productPrice'>{props.price}</p>
            </div>
    </div>
  )
}

export default ProductCard