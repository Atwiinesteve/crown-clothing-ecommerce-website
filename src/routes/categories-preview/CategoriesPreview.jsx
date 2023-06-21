// import react
import React from 'react';

// import dummy CONTEXT data
import {useContext} from 'react';

// import components
// import ProductCard from './ProductCard';
import CategoryPreview from '../categories-preview/CategoriesPreview.jsx';

// products context
import { CategoriesContext } from '../../context/categories.context.jsx';

// import styles
// import "../styles/ProductCard.css";

// shop component
const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
  
    return (
      <div className='category-preview-container'>

        {/* { Object.keys(categoriesMap).map((title) => (
          < Fragment key={title}>
            <h3>{title}</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              columnGap: '10px',
              rowGap: '50px',
              marginTop: '90px'
            }}>
              { categoriesMap[title].map((product) => (
                <ProductCard product={product} key={Math.random()} />
              )) }
            </div>
          </Fragment>
        )) } */}

        {
          Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
              <CategoryPreview key={title} title={title} products={products} />
            )
          })
        }
        
      </div>
    );
  };
  
  export default CategoriesPreview;