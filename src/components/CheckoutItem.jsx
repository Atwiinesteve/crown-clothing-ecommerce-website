// import react
import React, {useContext} from 'react';

// import context
import {cartContext} from '../context/cart.context.jsx';

// styles
import "../styles/CheckoutItem.css";

// checkout component
export default function CheckoutItem({cartItem}) {
    
    const {name, imageUrl, price, quantity} = cartItem;

    const { deleteItemFromCart,addItemToCart, removeItemFromCart } = useContext(cartContext);

    const deleteCartItem = () => deleteItemFromCart(cartItem);
    const addCartItem = () => addItemToCart(cartItem);
    const removeCartItem = () => removeItemFromCart(cartItem);

    return (
        <>
            <div className="checkout-item-container">
                <div className="image-container">
                    <img src={imageUrl} alt={`${name}`} />
                </div>
                <span className='name'>{name}</span>
                <span className='quantity'>
                    <div className='arrow' onClick={addCartItem}>&#10094;</div>
                        <span className='value'>
                            {quantity}
                        </span>
                    <div className='arrow' onClick={removeCartItem}>&#10095;</div>
                </span>
                <span className='price'>{price}</span>
                <div className='remove-btn' style={{cursor: 'pointer'}} onClick={() => deleteCartItem()}>&#10005;</div>
            </div>
        </>
    )
}