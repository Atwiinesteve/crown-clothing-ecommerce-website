// importing react
import React, {useContext} from 'react';

// import context
import { cartContext } from '../../context/cart.context';

// checkout page
export default function Checkout() {

    const {cartItems, addItemToCart, removeItemFromCart} = useContext(cartContext);

    return (
        <>
            <p style={{marginTop: '10rem'}}>checkout page..</p>
            <div>
                { 
                    cartItems.map((cartItem) =>{ 
                        const {id, name, quantity} = cartItem;
                        return (
                            
                                <div key={id}>
                                    <h2>{name}</h2>
                                    <h2>{quantity}</h2>
                                    <br />
                                    <span onClick={() => addItemToCart(cartItem)}>increment</span>
                                    <br />
                                    <span onClick={() => removeItemFromCart(cartItem)} >decrement</span>
                                </div>
                            
                        )
                    })
                }
            </div>
        </>
    )
}