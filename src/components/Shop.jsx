// import react
import React from 'react';

// import dummy CONTEXT data
import {useContext} from 'react';

// products context
import { ProductsContext } from '../context/products.context';

// shop component
export default function Shop() {

    // products
    const {products} = useContext(ProductsContext);

    return (
        <>
            <div>
                {products.map(({ id, name }) => (
                    <div key={id}>
                        <h1>{name}</h1>
                    </div>
                ))}
            </div>
        </>
    )
};