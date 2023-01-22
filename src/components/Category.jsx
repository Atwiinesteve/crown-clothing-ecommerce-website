// importing react.
import React from "react";

// importing react component.

// importing styles.
import "../scss/Category.scss";

const Category = ({ category }) => {
	const { imageUrl, title } = category;
	return (
		<div className="category-container">
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="category-body-container">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

// exporting App component.
export default Category;
