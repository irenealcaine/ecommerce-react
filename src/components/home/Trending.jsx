import { Container } from '@mui/system'
import React from 'react'
import Best from '../Best'
import Populars from '../Populars'

const Trending = () => {
  return (
    <>
      <Container>
        <p>Populares:</p>
        <Populars />
        <p>Mejor valorados:</p>
        <Best />
      </Container>
    </>
  )
}

export default Trending
