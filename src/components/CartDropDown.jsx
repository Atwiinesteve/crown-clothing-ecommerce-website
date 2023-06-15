// react imports
import React, {useContext} from "react";

// contexts
import { cartContext } from "../context/cart.context";

// components
// import Button from "./Button";

// styles
import '../styles/DropDown.css'
import CartItem from "./CartItem";


// drop down component
export default function DropDownCard() {
    const { cartItems } = useContext(cartContext);
    return (
        <div className="cart-dropdown-container">
            <div  className="cart-items">
                { cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                )) }
            </div>
            <button>CHECKOUT</button>
        </div>
    )
};