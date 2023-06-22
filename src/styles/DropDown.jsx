// imports
import styled from 'styled-components';

export const cartDropDownContainer = styled.div`
	position: absolute;
	width: 260px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 10px;
	border: 1px solid black;
	background-color: white;
	top: 45px;
	right: 40px;
	z-index: 5;

	button: {
		margin-top: auto;
	}
`;

export const cartItems = styled.div`
	height: 250px;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	margin: 0;
`;

export const button = styled.button`
	margin-top: 30px;
	padding: 0.78rem 1.1rem;
	color: white;
	background: black;
	border: none;
	cursor: pointer;
	text-transform: uppercase;
	font-family: 'Poppins', sans-serif;
	font-size: 1.1rem;
	letter-spacing: 1.1px;
`;
