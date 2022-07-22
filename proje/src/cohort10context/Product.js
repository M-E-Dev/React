import React from 'react'
import { useContext } from 'react'
import { ProductContext } from './ProductContext'

const Product = ({ product }) => {
  return (
    <div>
      <h1>{product.product}</h1>
    </div>
  )
}

export default Product
