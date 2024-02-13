'use client'

import { loadStripe } from "@stripe/stripe-js";
import SubscriptionForm from "./SubscriptionForm"
import { Elements } from "@stripe/react-stripe-js";
import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import create from "@/services/stripe/create-payment-intent";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Page({ id, amount, onPrevious }) {

  const [clientSecret, setClientSecret] = React.useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      create({ items: [{ id, amount }] }).then(res => {
        setClientSecret(res.clientSecret)
      })
    }
    fetchData()
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return <Flex my={20} justify={'center'}>

    <Box width={'700px'} p={10} bg="white" borderRadius={20}>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <SubscriptionForm />
        </Elements>
      )}
    </Box>
    <Flex justify="space-between">
            <Button colorScheme={'brand'} onClick={onPrevious}>Back</Button>
        </Flex>
  </Flex>
}