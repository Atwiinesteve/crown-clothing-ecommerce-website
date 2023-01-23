import React from 'react';
import CategoryItem from "../components/Category";

import "../styles/Categories.css";

const Category = ({ categories }) => {
	return (
		<div className="categories-container">
			{categories.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
	);
};

export default Category;
