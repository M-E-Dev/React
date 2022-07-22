import React from 'react'
import ProductList from './ProductList'
import { ProductProvider } from './ProductContext'

const ContextApp = () => {
  return (
    <ProductProvider>
      <ProductList />
    </ProductProvider>
    
  )
}

export default ContextApp
