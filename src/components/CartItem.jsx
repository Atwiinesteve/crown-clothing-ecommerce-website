// import react
import React from 'react';

// context
// import { cartContext } from '../context/cart.context';

// // import styles
// import '../styles/CartIcon.css';


// cart component
export default function CartItem({ cartItem }) {

    const { name, quantity } = cartItem;

    return(
        <div className='cart-item-container'>
            <h6>{name}</h6>
            <h6>{quantity}</h6>
        </div>
    )
};