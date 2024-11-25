import React from 'react'
import { MustWatch, NewReleases, Trending,Genre,Top } from '../components/index'

function Movie() {
  return (
    <div>
      <Genre />
      <Top />
      <Trending />
      <NewReleases />
      <MustWatch />
    </div>
  )
}

export default Movie
