// import react
import React, {useContext} from 'react';

// import context
import { CategoriesContext } from '../context/categories.context';

// import components
import CategoryPreview from './CategoryPreview';

// import styles
import "../styles/ProductCard.css";

// shop component
const Shop = () => {
  
  const {categoriesMap} = useContext(CategoriesContext);

  return (

    <>
      <div className="shop-container">
        {Object.keys(categoriesMap).map((title)=> {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          )
        })}
      </div>
    </>

  );
};
  
export default Shop;