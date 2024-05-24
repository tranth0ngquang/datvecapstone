import React from 'react'
import HomeCarousel from './HomePage/HomeCarousel'
import HomeSection from './HomePage/HomeSection'

export default function Home() {
  return (
    <div className="bg-stone-800">
      <HomeCarousel/>
      <HomeSection/>
    </div>
  )
}
