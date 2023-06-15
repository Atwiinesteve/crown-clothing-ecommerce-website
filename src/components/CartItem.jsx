// import react
import React from 'react';

// context
// import { cartContext } from '../context/cart.context';

// import styles
import "../styles/CartItem.css"


// cart component
export default function CartItem({ cartItem }) {

    const { name, imageUrl, price, quantity } = cartItem;

    return(
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}` }/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x {price}</span>
            </div>
        </div>
    )
};