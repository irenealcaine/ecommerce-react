import React from 'react'
import Hero from './Hero'
import Carousel1 from './Carousel1'
import Carousel2 from './Carousel2'
import Opinions from './Opinions'
import Products from './Products'
import Trending from './Trending'

const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      <Products />
      <Carousel1 />
      <Trending />
      <Carousel2 />
      <Opinions />
    </>
  )
}

export default Home
