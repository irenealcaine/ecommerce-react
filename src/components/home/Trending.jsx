import React from 'react'
import Best from '../Best'
import Populars from '../Populars'

const Trending = () => {
  return (
    <>
      <p>Populares:</p>
      <Populars />
      <p>Mejor valorados:</p>
      <Best />
    </>
  )
}

export default Trending
