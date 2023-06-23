// imports
import styled from "styled-components";

export const ProductCardContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;
`;

export const ProductCardImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	margin-bottom: 5px;
`;

export const ProductCardButton = styled.button`
	width: 80%;
	opacity: 0.7;
	position: absolute;
	top: 255px;
	/* display: none; */
`;

// export const ProductCardButton = styled.button:hover`
// 	opacity: 0.9;
//   /* display: block; */
// `;

export const ProductCardFooter = styled.footer`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const ProductCardFooterName = styled.div`
	width: 90%;
	margin-bottom: 15px;
`;

export const ProductCardFooterPrice = styled.div`
	width: 10%;
`;
