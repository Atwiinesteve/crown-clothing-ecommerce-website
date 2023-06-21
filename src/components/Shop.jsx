// import react
import {Routes, Route} from 'react-router-dom';

// components
import CategoriesPreview from '../routes/categories-preview/CategoriesPreview';

// import styles
import "../styles/ProductCard.css";

// shop component
const Shop = () => {

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  );
};
  
export default Shop;