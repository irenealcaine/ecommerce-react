import React from 'react'
import SideBar from '../SideBar'
import List from '../List'
import { Container } from '@mui/material'

const Products = () => {
  return (
    <>
      <Container style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        <SideBar />
        <List />
      </Container>
    </>
  )
}

export default Products
