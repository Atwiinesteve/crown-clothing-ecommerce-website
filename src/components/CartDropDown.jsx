// react imports
import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";

// contexts
import { cartContext } from "../context/cart.context";

// components
// import Button from "./Button";

// styles
import {cartDropDownContainer, cartItems, button } from '../styles/DropDown.jsx'
import CartItem from "./CartItem";


// drop down component
export default function DropDownCard() {
    const { cartItems } = useContext(cartContext);
    const navigate = useNavigate();
    const goToCheckoutPage = () => {
        navigate('/checkout');
    }
    return (
        <cartDropDownContainer>
            <cartItems>
                { cartItems.length ? (
                    cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} /> )
                ) : (
                    <span>You Cart is Empty..</span> 
                ) }
            </cartItems>
            <button onClick={goToCheckoutPage} >CHECKOUT</button>
        </cartDropDownContainer>
    )
};