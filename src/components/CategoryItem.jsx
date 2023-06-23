// imports
import React from 'react'
import { BackgroundImage, Body, CategoryContainer } from '../styles/Category';

// single category item
export default function CategoryItem({ category }) {
    const {imageUrl, title} = category;
  return (
		<>
            <CategoryContainer key={category.id}>
                <BackgroundImage imageUrl={imageUrl} />
                <Body>
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </Body>
            </CategoryContainer>
		</>
	);
};