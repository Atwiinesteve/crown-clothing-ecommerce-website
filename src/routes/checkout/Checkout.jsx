// importing react
import React, {useContext} from 'react';

// import context
import { cartContext } from '../../context/cart.context';
import CheckoutItem from '../../components/CheckoutItem';

// styles
import "../checkout/checkout.css";
import StripePaymentForm from '../../components/StripePaymentForm';

// checkout page
export default function Checkout() {

    const {cartItems, cartTotal} = useContext(cartContext);

    return (
        <>
            <div className="checkout-container">
                <div className="checkout-header">
                    <div className="header-block">
                        <span>Product</span>
                    </div>
                    <div className="header-block">
                        <span>Description</span>
                    </div>
                    <div className="header-block">
                        <span>Quantity</span>
                    </div>
                    <div className="header-block">
                        <span>Price</span>
                    </div>
                    <div className="header-block">
                        <span>Remove</span>
                    </div>
                </div>
                { cartItems.map((cartItem) => (<CheckoutItem key={cartItem.id} cartItem={cartItem} />)) }
                <div className="total">Total: $ {cartTotal}</div>
                <StripePaymentForm />
            </div>
        </>
    )
}