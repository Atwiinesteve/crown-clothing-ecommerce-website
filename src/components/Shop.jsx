// import react
import React from 'react';

// import dummy CONTEXT data
import {useContext} from 'react';

// import components
import ProductCard from './ProductCard';

// products context
import { ProductsContext } from '../context/products.context';

// shop component
const Shop = () => {
    const { products } = useContext(ProductsContext);
  
    return (
      <div className='products-container'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  };
  
  export default Shop;