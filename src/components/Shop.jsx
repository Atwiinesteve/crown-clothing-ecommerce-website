// import react
import React from 'react';

// import dummy CONTEXT data
import {useContext} from 'react';

// import components
import ProductCard from './ProductCard';

// products context
import { ProductsContext } from '../context/products.context';

// import styles
import "../styles/ProductCard.css";

// shop component
const Shop = () => {
    const { products } = useContext(ProductsContext);
  
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        columnGap: '10px',
        rowGap: '50px',
        marginTop: '90px'
      }}>
        { products.map((product) => (
          <ProductCard product={product} key={Math.random()} />
        )) }
      </div>
    );
  };
  
  export default Shop;