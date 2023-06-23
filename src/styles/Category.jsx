// imports
import styled from "styled-components";

export const BackgroundImage = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	object-fit: cover;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
	height: 100px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: white;
	opacity: 0.7;
	position: absolute;

	h2 {
		font-weight: 600;
		letter-spacing: 3px;
		margin-bottom: 10px;
		margin: 0 6px 0;
		font-size: 22px;
		color: #4a4a4a;
		text-transform: uppercase;
	}

	p {
		font-weight: lighter;
		font-size: 16px;
	}
`;

export const CategoryContainer = styled.div`
	min-width: 30%;
	height: 400px;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	margin: 0 7.5px 15px;
	overflow: hidden;

	&.larger {
		height: 380px;
	}

	&:hover {
		cursor: pointer;

		& ${BackgroundImage} {
			transform: scale(1.1);
			transition: transform 5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

		& ${Body} {
			opacity: 0.9;
		}
	}

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}
`;

export const CategoriesContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
