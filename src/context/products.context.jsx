// import react 
import { createContext, useState } from "react";

// products dummy
import PRODUCTS from '../shop-data';

// create context
export const ProductsContext = createContext({
    products: [],
});

// context provider
export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products}
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}