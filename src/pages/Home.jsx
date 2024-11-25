import React from 'react'
import { HomePoster, Genre, Variety, Plan, FreeTrial, FAQ } from '../components/index'

function Home() {
  return (
    <div>
      <HomePoster />
      <Genre />
      <Variety />
      <FAQ />
      <Plan />
      <FreeTrial />
    </div>
  )
}

export default Home
