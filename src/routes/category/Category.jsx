// import react
import React, {useContext, useState, useEffect} from "react";
import { useParams } from "react-router-dom";

// contexts
import { CategoriesContext } from "../../context/categories.context";

// components
import {ProductCard} from '../../components/ProductCard';

// styles
import '../category/category.css';
import { useContext } from "react";

// category page
export default function CategoryPage() {

    // params
    const {category} = useParams();

    // using context
    const {categoriesMap} = useContext(CategoriesContext);

    // states
    const [products, setProducts] = useState(categoriesMap[category]);

    // fetch data
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <>
            <div className="category-container">
                {
                    products && products.map((product) => (<ProductCard key={product.id} product={product} />))
                }
            </div>
        </>
    )
}