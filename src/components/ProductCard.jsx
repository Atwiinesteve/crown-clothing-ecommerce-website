import React, {useContext} from "react";

import { cartContext } from "../context/cart.context";

// import Button from "../components/Button";

import { ProductCardContainer, ProductCardImage, ProductCardButton, ProductCardFooter, ProductCardFooterName, ProductCardFooterPrice } from "../styles/ProductCard.jsx";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(cartContext);
	const addProductToCart = () => addItemToCart(product)
	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={`${name}`} />
			<ProductCardFooter>
				<ProductCardFooterName>{name}</ProductCardFooterName>
				<ProductCardFooterPrice>{price}</ProductCardFooterPrice>
			</ProductCardFooter>
			<ProductCardButton onClick={addProductToCart} >Add to card</ProductCardButton>
		</ProductCardContainer>
	);
};

export default ProductCard;
