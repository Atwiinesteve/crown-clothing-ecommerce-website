// import react
import {Routes, Route} from 'react-router-dom';

// components
import CategoriesPreview from '../routes/categories-preview/CategoriesPreview';

// import styles
// import "../styles/ProductCard.css";
// import {
// 	ProductCardContainer,
// 	ProductCardImage,
// 	ProductCardButton,
// 	ProductCardFooter,
// 	ProductCardFooterName,
// 	ProductCardFooterPrice,
// } from "../styles/ProductCard.jsx";

import Category from '../routes/category/Category';

// shop component
const Shop = () => {

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};
  
export default Shop;