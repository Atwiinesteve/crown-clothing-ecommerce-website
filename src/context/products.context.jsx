// import react 
import { createContext, useEffect, useState } from "react";

// import firbase utils
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

// products dummy
// import SHOP_DATA from '../shop-data.js';

// create context
export const ProductsContext = createContext({
    products: [],
});

// context provider
export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    // adding data to firebase firestore
    // useEffect(() => {
    //     addCollectionAndDocuments("categories", SHOP_DATA)
    // }, [])

    const value = {products}
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}