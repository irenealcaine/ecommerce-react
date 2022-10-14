import React from 'react'

import { products } from './data/products'

const Populars = () => {
  const tops = products.sort((a, b) => {
    if (a.rating.count > b.rating.count) {
      return -1
    } else if (a.rating.count < b.rating.count) {
      return 1
    } return 0
  })
  return (
    <div style={{ width: '65%', margin: 20, display: 'flex', flexWrap: 'wrap' }}>
      {tops.slice(0, 3).map((product) => (
        <div>
          <img src={product.image} alt={product.title} style={{ width: 80 }} />
          <p>Vendidos: {product.rating.count}</p>
        </div>
      ))}
    </div>
  )
}

export default Populars
