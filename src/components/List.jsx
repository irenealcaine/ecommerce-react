import { Card, Pagination } from '@mui/material'
import React, { useEffect } from 'react'
import { products } from './data/products'
import { useState } from 'react'


const List = () => {

  const [page, setPage] = useState(1)

  function sortProducts() {
    products.sort((a, b) => {
      if (a.id < b.id) {
        return -1
      } else if (a.id > b.id) {
        return 1
      } return 0
    })
  }

  return (
    <div style={{ width: '65%', margin: 20, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 10 }}>
      {products.slice((page - 1) * 8, (page - 1) * 8 + 8).map((product) => (
        <Card
          style={{ width: '23%', height: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 10 }}
        >
          <p>{product.title}</p>
          <img src={product.image} alt={product.title} style={{ width: '100%' }} />
          <p>{product.price} €</p>
        </Card>
      ))}

      <Pagination
        count={(products.length / 8).toFixed(0)}
        color='primary'
        style={{
          padding: 20, width: '100%', display: 'flex', justifyContent: 'center'
        }}
        onChange={(_, value) => {
          setPage(value)
          sortProducts()
        }}
      />
    </div>
  )
}

export default List
