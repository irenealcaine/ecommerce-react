
import { Typography } from '@mui/material';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ads } from '../data/ads';


const Carousel1 = () => {

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
        {ads.map((ad) => {
          return (
            <div style={{
              backgroundImage: `linear-gradient(to ${ad.direction}, ${ad.color}00, ${ad.color}), url(${ad.image})`, backgroundSize: 'cover', height: '400px', width: '100%', color: 'white'
            }}>
              <div style={{ textAlign: 'end', top: '50%', position: 'relative' }}>
                <Typography variant='h3'>{ad.title}</Typography>
                <Typography variant='h4'>{ad.description}</Typography>
              </div>
            </div>
          )
        })}
      </Carousel>

    </>

  )
}

export default Carousel1
