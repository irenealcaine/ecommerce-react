import React from 'react'

import { products } from './data/products'
const Best = () => {
  let besties = products.sort((a, b) => {
    if (a.rating.rate > b.rating.rate) {
      return -1
    } else if (a.rating.rate < b.rating.rate) {
      return 1
    } return 0
  })
  return (
    <div style={{ width: '65%', margin: 20, display: 'flex', flexWrap: 'wrap' }}>
      {besties.slice(0, 3).map((product) => (
        <div>
          <img src={product.image} alt={product.title} style={{ width: 80 }} />
          <p>{product.rating.rate}/10 ⭐</p>
        </div>

      ))}
    </div>
  )
}

export default Best
