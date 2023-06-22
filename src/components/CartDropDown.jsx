// react imports
import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";

// contexts
import { cartContext } from "../context/cart.context";

// components
// import Button from "./Button";
import CartItem from "./CartItem";

// styles
import { CartDropDownContainer, CartItems, CartButton } from "../styles/DropDown";


// drop down component
export default function DropDownCard() {
    const { cartItems } = useContext(cartContext);
    const navigate = useNavigate();
    const goToCheckoutPage = () => {
        navigate('/checkout');
    }
    return (
        <CartDropDownContainer>
            <CartItems>
                { cartItems.length ? (
                    cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} /> )
                ) : (
                    <span>You Cart is Empty..</span> 
                ) }
            </CartItems>
            <CartButton onClick={goToCheckoutPage} >CHECKOUT</CartButton>
        </CartDropDownContainer>
    )
};