import React from 'react'
import { Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ads } from '../data/ads';

const Hero3 = () => {

  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        arrows={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={6000}
        customTransition="all 4000ms ease-in-out"
        transitionDuration={4000}
      >
        {ads.slice((ads.length) / 2, ads.length).map((ad) => {
          return (
            <div style={{
              backgroundImage: `linear-gradient(to right, ${ad.color}11, ${ad.color}dd), url(${ad.image})`, backgroundSize: 'cover', height: '400px', width: '100%', color: 'white'
            }}>
              <div style={{ textAlign: 'end', top: '50%', right: '50px', position: 'relative' }}>
                <Typography variant='h1' style={{ fontFamily: 'Caveat' }}>{ad.title}</Typography>
                <Typography variant='h4' style={{ fontFamily: 'Raleway' }}>{ad.description}</Typography>
              </div>
            </div>
          )
        })}
      </Carousel>

    </>
  )
}

export default Hero3
