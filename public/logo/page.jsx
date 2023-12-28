"use client"
import Image from 'next/image';

export default function Logo () {
  return (
    <Image 
      src='./Logo.png'
      width={100}
      height={100}
      alt='logo'
    />
  )
}