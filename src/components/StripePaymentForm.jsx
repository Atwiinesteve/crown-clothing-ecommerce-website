// imports
import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// styles
import { PaymentContainer ,FormContainer } from '../styles/StripePaymentForm';

// stripe payment form
export default function StripePaymentForm() {

    const stripe = useStripe();
    const elements = useStripe();

    // payments handler
    const paymentsHandler = (e) => {
        e.preventDefault();
        if(!stripe || !elements) return;
        
    };

  return (
    <PaymentContainer>
        <FormContainer>
            <CardElement />
            <button>Pay Now</button>
        </FormContainer>
    </PaymentContainer>
  )
}
