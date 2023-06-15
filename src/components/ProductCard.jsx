import React, {useContext} from "react";

import { cartContext } from "../context/cart.context";

import Button from "../components/Button";

import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(cartContext);
	const addProductToCart = () => addItemToCart(product)
	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={`${name}`} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<button onClick={addProductToCart} >Add to card</button>
		</div>
	);
};

export default ProductCard;
