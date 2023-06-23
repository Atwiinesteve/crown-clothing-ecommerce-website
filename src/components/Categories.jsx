import React from "react";

import {
	CategoriesContainer,
} from "../styles/Category.jsx";
import CategoryItem from "./CategoryItem.jsx";

const Categories = ({ categories }) => {
	return (
		<CategoriesContainer>
			{categories.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</CategoriesContainer>
	);
};

export default Categories;
