"use client"
import React, { useState } from 'react'
import './main-icons.css'
import Link from 'next/link'


const MainIcons = () => {
  const wishlist = "https://cdn.builder.io/api/v1/image/assets/TEMP/d28d055d5fcbb7b02918b8b56dbe28f36af8dbd91902f1f313bee52d2b2448e6?";
  const cart = "https://cdn.builder.io/api/v1/image/assets/TEMP/803e408712ac89979c9b4b68c64ee5fbf56b232ebe4b6a4b68a6168feed84417?";
  const tracking = "https://cdn.builder.io/api/v1/image/assets/TEMP/a0c1172426dd14950380b63dd7626ef63cbfc08c8e76a87b82c7d46311594a8b?";
  const wishlistActive = "https://cdn.builder.io/api/v1/image/assets/TEMP/90ed6b0157a138d00481e6568c01228fafb54a1741f75e3fb5cadde8f8c797b1?";
  const cartActive = "https://cdn.builder.io/api/v1/image/assets/TEMP/b840bb3decc8fab1e98659ff230e6736143eadbdecc087554bdd280211a34560?";
  const trackingActive = "https://cdn.builder.io/api/v1/image/assets/TEMP/f03bd2593e6507d43f549ad40fd98ee435beec1a866582baceec5d4d78e1014d?";

  const [wishlistIco, setWishlistActive] = useState(false);
  const [cartIco, setCartActive] = useState(false);
  const [trackingIco, setTrackingActive] = useState(false);

  const clickWishlist = () => {
    setWishlistActive(true);
    setCartActive(false);
    setTrackingActive(false);
  }

  const clickCart = () => {
    setWishlistActive(false);
    setCartActive(true);
    setTrackingActive(false);
  }

  const clickTracking = () => {
    setWishlistActive(false);
    setCartActive(false);
    setTrackingActive(true);
  }


  return (
    <div className='mainIcons'>
        <Link href="Wishlist"><img className="icons" onClick={clickWishlist} src={wishlistIco ? wishlistActive : wishlist} alt="wishlist" /></Link>
        <Link href="cart"><img className="icons" onClick={clickCart} src={cartIco ? cartActive : cart } alt="cart" /></Link>
        <Link href="tracking"><img className="icons" onClick={clickTracking} src={trackingIco ? trackingActive : tracking} alt="tracking" /></Link>
    </div>
  )
}

export default MainIcons;