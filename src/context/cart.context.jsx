// import react 
import React, {createContext, useState} from 'react';

// add a single item to cart
const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem )
    }
    return [ ...cartItems, { ...productToAdd, quantity: 1 } ]
};

// cart context
export const cartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}
});

// cart provider
export const CartProvider = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems }

    return <cartContext.Provider value={value}>{ children }</cartContext.Provider>
}