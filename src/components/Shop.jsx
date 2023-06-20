// import react
import React from 'react';

// nested routes
import {Routes, Route} from 'react-router-dom';

// // import dummy CONTEXT data
// import {useContext} from 'react';

// // import components
// // import ProductCard from './ProductCard';
// import CategoryPreview from './CategoryPreview';
import CategoriesPreviewPage from '../routes/categories-preview/CategoriesPreview';

// // products context
// import { CategoriesContext } from '../context/categories.context';

// import styles
import "../styles/ProductCard.css";
import CategoryPage from '../routes/category/Category';

// shop component
const Shop = () => {
    // const { categoriesMap } = useContext(CategoriesContext);
  
    return (
      <div className='shop-container'>

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

        {/* {
          Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
              <CategoryPreview key={title} title={title} products={products} />
            )
          })
        } */}

        <Routes>
          <Route index element={<CategoriesPreviewPage />} />
          <Route path=':category' element={<CategoryPage />} />
        </Routes>
        
      </div>
    );
  };
  
  export default Shop;