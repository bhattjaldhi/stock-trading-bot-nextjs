'use client'

import { loadStripe } from "@stripe/stripe-js";
import SubscriptionForm from "./SubscriptionForm"
import { Elements } from "@stripe/react-stripe-js";
import { Box, Flex } from "@chakra-ui/react";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Page() {
    return <Flex my={20} justify={'center'}>

        <Box width={'700px'} p={10} bg="white" borderRadius={20}>
            <Elements stripe={stripePromise}>
                <SubscriptionForm />
            </Elements>
        </Box>
    </Flex>
}