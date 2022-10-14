import { Typography } from '@mui/material'
import React from 'react'

const Hero1 = () => {
  return (
    <>
      <div style={{
        backgroundImage: `url(https://img.freepik.com/foto-gratis/sorprendio-dos-amigas-sosteniendo-bolsas-compras-usando-telefono-movil_171337-5718.jpg?w=900&t=st=1665755584~exp=1665756184~hmac=53bbe7a1ec40cc24208c28668096a50c7ac0570a7f65129d57657f25af21db0f)`, backgroundSize: 'cover', height: '400px', width: '100%', color: 'white', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'
      }}>
        <Typography variant='h2' style={{ fontFamily: 'Raleway', border: '3px solid black', padding: 20, margin: 40, borderRadius: 20, backgroundColor: '#26262699', fontWeight: 'bold' }}>
          Tu tienda de confianza
        </Typography>
      </div>
    </>
  )
}

export default Hero1
