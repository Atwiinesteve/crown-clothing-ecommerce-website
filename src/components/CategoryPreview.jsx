// import react
import React from 'react';

// import components
import ProductCard from './ProductCard';

// styles
import '../styles/CategoryPreview.css';

// categories preview component
export default function CategoryPreview({ title, products }) {
    return (
        <>
            <div className="categor-preview-container">
                <h2>
                    <div className="title">{title.toUpperCase()}</div>
                </h2>
                <div className="preview">
                    {
                        products.filter((_, idx) => idx < 4).map((product) => <ProductCard key={product.id} product={product} />)
                    }
                </div>
            </div>
        </>
    )
}