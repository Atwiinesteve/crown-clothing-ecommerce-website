import React from "react";

import Button from '../components/Button';

import "../styles/ProductCard.css";

export default function ProductCard({ product }) {

    // product details
    const { price, name, imageUrl } = product;
    return (
        <>
            <div className="product-card-container">
                <img src={imageUrl} alt={`${name}`} />
                <div className="footer">
                    <span className="name">{name}</span>
                    <span className="price">{price}</span>
                </div>
                <Button buttonType="inverted">Add to Cart</Button>
            </div>
        </>
    )
}