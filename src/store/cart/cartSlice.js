// imports
import { createSlice } from "@reduxjs/toolkit";

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

// initial state
const initialState = {
    isCartOpen: false,
    cartItems: []
};

// cart slice
const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
        setIsCartOpen(state, action) {
            state.isCartOpen = action.payload
        },
		addItemToCart(state, action) {
			state.cartItems = addCartItem(state.cartItems, action.payload);
		},
        removeItemFromCart(state, action) {
            state.cartItems = removeCartItem(state.cartItems, action.payload);
        },
        deleteItemFromCart(state, action) {
            state.cartItems = deleteCartItem(state.cartItems, action.payload)
        }
	},
});

// exports
export const {setIsCartOpen, addItemToCart, removeItemFromCart, deleteItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;