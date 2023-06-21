// import react
import { useContext, useState, useEffect, Fragment } from 'react';

// params
import { useParams } from 'react-router-dom';

// componenets
import ProductCard from '../../components/ProductCard';

// context
import { CategoriesContext } from '../../context/categories.context';

// styles
import '../category/category.css';

// category page
const Category = () => {

  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className='category__title'>{category.toUpperCase()}</h2>
      <div className='category__container'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;