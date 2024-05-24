import React from 'react'
import HomeSearch from './HomeSearch'
import HomeCardMovie from '../../components/HomeCardMovie'
import HomeCardMovieAPI from '../../components/HomeCardMovieAPI'
import HomeImg from './HomeImg'


export default function HomeSection() {
  return (
    <div>
      <HomeSearch/>
      <HomeCardMovieAPI/>
      
      <HomeImg/>
      <HomeCardMovie/>
    </div>
  )
}
