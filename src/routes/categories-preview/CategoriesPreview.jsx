// import react
import React, {useContext} from 'react';

// products context
import { CategoriesContext } from '../../context/categories.context.jsx';

// import components
import CategoryPreview from '../../components/CategoryPreview.jsx';

// import styles

// shop component
export default function CategoriesPreview() {
    const { categoriesMap } = useContext(CategoriesContext);
  
    return (
      <>

        {
          Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
              <CategoryPreview key={title} title={title} products={products} />
            )
          })
        }
        
      </>
    );
  };