// import react
import React, { createContext, useReducer } from "react";

// add a single item to cart
const addCartItem = (cartItems, productToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id,
	);
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem,
		);
	}
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// remove item from cart
const removeCartItem = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id,
	);
	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem,
	);
};

// delete cart item
const deleteCartItem = (cartItems, cartItemToDelete) => {
	return cartItems.filter((cartItem) => cartItem.id !== cartItemToDelete.id);
};

// cart context
export const cartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	deleteItemFromCart: () => {},
	cartCount: 0,
	cartTotal: 0,
});

// ===================== reducer ========================

const INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0,
};

const CART_ITEMS_UPDATE = {
	SET_CART_ITEMS: "SET_CART_ITEMS",
};

const SET_IS_CART_OPEN = {
	IS_CART_OPEN: "IS_CART_OPEN",
};

const cartReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case CART_ITEMS_UPDATE.SET_CART_ITEMS:
			return {
				...state,
				...payload,
			};
		case SET_IS_CART_OPEN.IS_CART_OPEN:
			return { ...state, isCartOpen: payload };
		default:
			throw new Error(`Invalid action ${type} in cartReducer..`);
	}
};

// ======================================================

// cart provider
export const CartProvider = ({ children }) => {
	const [{ cartCount, cartTotal, cartItems, isCartOpen }, dispatch] =
		useReducer(cartReducer, INITIAL_STATE);

	const addItemToCart = (productToAdd) => {
		const newCartItems = addCartItem(cartItems, productToAdd);
		updateCartItemsReducer(newCartItems);
	};

	const removeItemFromCart = (cartItemToRemove) => {
		const newCartItems = removeCartItem(cartItems, cartItemToRemove);
		updateCartItemsReducer(newCartItems);
	};

	const deleteItemFromCart = (cartItemToDelete) => {
		const newCartItems = deleteCartItem(cartItems, cartItemToDelete);
		updateCartItemsReducer(newCartItems);
	};

	const updateCartItemsReducer = (newCartItems) => {
		const newCartCount = newCartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0,
		);
		const newCartTotal = newCartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0,
		);

		dispatch({
			type: CART_ITEMS_UPDATE.SET_CART_ITEMS,
			payload: {
				cartItems: newCartItems,
				cartTotal: newCartTotal,
				cartCount: newCartCount,
			},
		});
	};

	const setIsCartOpen = (bool) => {
		dispatch({ type: SET_IS_CART_OPEN.IS_CART_OPEN, payload: bool });
	};

	const value = {
		isCartOpen,
		cartTotal,
		setIsCartOpen,
		addItemToCart,
		removeItemFromCart,
		deleteItemFromCart,
		cartItems,
		cartCount,
	};

	return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
