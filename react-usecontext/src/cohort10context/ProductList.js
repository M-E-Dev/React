import Product from './Product'
import { useContext } from 'react'
import { ProductContext } from './ProductContext'

const ProductList = () => {
  // sadece ihtiyaç duyulan productsu aldık
  const {products} = useContext(ProductContext)
  
  return (
    <div>
        {products.map((product) => (
            <Product key={product.id} product={product} />
        ))}
    </div>
  )
}

export default ProductList