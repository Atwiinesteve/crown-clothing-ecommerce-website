// import react
import React from 'react';
import { Link } from 'react-router-dom';

// import components
import ProductCard from './ProductCard';

// styles
import '../styles/CategoryPreview.css';

// categories preview component
const CategoryPreview = ({ title, products }) => {
    return (
        <>
            <div className="categor-preview-container">
                <h2>
                    <div className="title"> <Link to={title} >{title.toUpperCase()}</Link> </div>
                </h2>
                <div className="preview">
                    {
                        products.filter((_, idx) => idx < 4).map((product) => <ProductCard key={product.id} product={product} />)
                    }
                </div>
            </div>
        </>
    )
};

// export
export default CategoryPreview;