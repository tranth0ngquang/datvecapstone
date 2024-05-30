import React from 'react'
import HomeCarousel from './HomePage/HomeCarousel'
import HomeSection from './HomePage/HomeSection'
import SignUpMovie from './Login/SignUpMovie'
import LoginMovie from './Login/LoginMovie'
import QuanTriKHMovie from './Login/QuanTriKHMovie'
import ThanhToanMovie from './Login/ThanhToanMovie'
import QuanLyAdmin from './Login/QuanLyAdmin'
import ChiTietMovie from './Login/ChiTietMovie'

export default function Home() {
  return (
    <div className="bg-stone-800">
      {/* <HomeCarousel/> */}
      {/* <HomeSection/> */}

      {/* <SignUpMovie/> */}
      {/* <LoginMovie/> */}
      {/* <QuanTriKHMovie/> */}
      
      {/* <ThanhToanMovie/> */}

      <ChiTietMovie/>
      {/* <QuanLyAdmin/> */}

    </div>
  )
}
