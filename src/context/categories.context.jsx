// import react 
import { createContext, useEffect, useState } from "react";

// import firbase utils
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// products dummy
// import SHOP_DATA from '../shop-data.js';

// create context
export const CategoriesContext = createContext({
    categoriesMap: {},
});

// context provider
export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    // adding data to firebase firestore
    // useEffect(() => {
    //     addCollectionAndDocuments("categories", SHOP_DATA)
    // }, []);

    // get categories from firebase firestore
    useEffect(() => {
        const fetchCategories = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            // console.log(categoryMap);
            setCategoriesMap(categoryMap);
        }
        fetchCategories();
    }, [])

    const value = {categoriesMap}
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}