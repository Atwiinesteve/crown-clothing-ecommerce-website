// imports
import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// styles
import { PaymentContainer ,FormContainer } from '../styles/StripePaymentForm';

// stripe payment form
export default function StripePaymentForm() {

    const stripe = useStripe();
    const elements = useElements();

    // payments handler
    const paymentsHandler = async (e) => {
        e.preventDefault();
        if(!stripe || !elements) return;
        const response = await fetch("/.netlify/functions/create-payment-intent", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: 100000 })
        }).then((res) => res.json())
        const {paymentIntent: { client_secret }} = response;
        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Kiiza Stephen'
                }
            }
        });
        if(paymentResult.error) {
            alert(paymentResult.error)
        } else if (paymentResult.paymentIntent.status === "succeeded") {
            alert("Payment Successful..")
        }
    };

  return (
    <PaymentContainer>
        <FormContainer onSubmit={paymentsHandler}>
            <CardElement />
            <button>Pay Now</button>
        </FormContainer>
    </PaymentContainer>
  )
}
