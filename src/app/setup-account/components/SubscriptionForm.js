'use client'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Stack } from '@chakra-ui/react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';


const SubscriptionForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        try {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });

            if (error) {
                throw new Error(error.message);
            }

            // Call your backend to create a subscription
            const response = await fetch('/api/create-subscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    paymentMethodId: paymentMethod.id,
                }),
            });

            const subscription = await response.json();

            // Handle successful subscription
            setPaymentSuccess(subscription);
        } catch (error) {
            // Handle payment error
            setPaymentError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl id="card-details" isInvalid={paymentError}>
                <FormLabel>Card details</FormLabel>
                <CardElement options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }} />
                <FormErrorMessage>{paymentError}</FormErrorMessage>
            </FormControl>
            <Button type="submit" disabled={!stripe} mt="4">Subscribe</Button>
            {paymentSuccess && <Box color="green" mt="4">Subscription successful! {paymentSuccess.id}</Box>}
        </form>
    );
};

export default SubscriptionForm;
