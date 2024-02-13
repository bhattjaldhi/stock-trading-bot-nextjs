'use client'

import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useStripe } from "@stripe/react-stripe-js";
import Link from "next/link";
import React from "react";

export default function Page() {
    const stripe = useStripe();
    const [message, setMessage] = React.useState(null);

    React.useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        });
    }, [stripe]);

    return <Box maxW="600px" mx="auto" mt={20} textAlign="center">
        <Heading mb={4}>Payment Successful</Heading>
        <Text mb={8}>
            Thank you for your payment. Your transaction has been successfully
            processed.
        </Text>
        <Link href="/user/dashboard">
            <Button colorScheme="blue" >
                Go to Dashboard
            </Button>
        </Link>
    </Box>
}