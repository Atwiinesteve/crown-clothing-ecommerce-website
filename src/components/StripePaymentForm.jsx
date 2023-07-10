// imports
import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';

// styles
import { PaymentContainer ,FormContainer } from '../styles/StripePaymentForm';

// stripe payment form
export default function StripePaymentForm() {
  return (
    <PaymentContainer>
        <FormContainer>
            <CardElement />
            <button>Pay Now</button>
        </FormContainer>
    </PaymentContainer>
  )
}
