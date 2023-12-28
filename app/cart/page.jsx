import React from 'react'
import './cart.css'
import Image from 'next/image'

const Cart = () => {
  return (
  <div className='cartContainer'>
    <div className='cartCard'>
        <div className='checkImageContainer'>
          <input type="checkbox" className='checkbox' />
          <Image
            scr="thumb.jpg"  
            alt="thumbnail"
            width={500}
            height={500}
            className='cartThumb'/>
          </div>
        <div className='rightColumn'>
          <div className="textWrapper">
            <p className="pName">Product Name</p>
            <p className="pPrice">Price</p>
          </div>
          <div className="modItems">
            <div className="itemDecrease">-</div>
            <p className="itemNum">1</p>
            <div className="itemIncrease">+</div>
          </div> 
        </div>
    </div>
  </div>
  )
}

export default Cart