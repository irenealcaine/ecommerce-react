import React from 'react'
import { products } from './data/products'

const List = () => {
  return (
    <div style={{ width: '65%', margin: 20 }}>
      {products.map((product) => (
        <img src={product.image} alt={product.title} style={{ width: 80 }} />
      ))}
    </div>
  )
}

export default List
