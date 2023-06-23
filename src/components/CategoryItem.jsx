// imports
import React from "react";
import { useNavigate } from "react-router-dom";
import { BackgroundImage, Body, CategoryContainer } from "../styles/Category";

// single category item
export default function CategoryItem({ category }) {
	const { imageUrl, title, route } = category;
	const navigate = useNavigate();
	const showProducts = () => navigate(route)
	return (
		<>
			<CategoryContainer onClick={showProducts}>
				<BackgroundImage imageUrl={imageUrl} />
				<Body>
					<h2>{title}</h2>
					<p>Shop Now</p>
				</Body>
			</CategoryContainer>
		</>
	);
}
