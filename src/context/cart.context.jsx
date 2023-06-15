// import react 
import React, {createContext, useState} from 'react';

// cart context
export const cartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {}
});

// cart provider
export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(null);
    const value = {isCartOpen, setIsCartOpen}
    return <cartContext.Provider value={value}>{ children }</cartContext.Provider>
}