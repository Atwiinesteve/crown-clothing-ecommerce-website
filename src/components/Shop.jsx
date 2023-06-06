// import react
import React from 'react';

// import dummy CONTEXT data
import {useContext} from 'react';

// import components
import ProductCard from './ProductCard';

// products context
import { ProductsContext } from '../context/products.context';

// shop component
export default function Shop() {

    // products
    const {products} = useContext(ProductsContext);

    return (
        <>
            <div>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    )
};