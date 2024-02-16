'use client'

import { updateUserData } from "@/contexts/AuthContext";
import { retrieveSession } from "@/services/stripe/session";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";


export default function Page() {
    const [message, setMessage] = React.useState(null);
    const searchParams = useSearchParams()

    const handlePaymentSuccess = async (metadata) => {
        await updateUserData({ plan: metadata.plan })
    }

    React.useEffect(() => {
        const clientSession = searchParams.get('session');

        if (!clientSession) {
            return;
        }

        const fetchData = async () => {

            retrieveSession({ id: clientSession }).then(({ session }) => {

                if (session.status === "complete") {
                    setMessage("Payment succeeded!")
                    handlePaymentSuccess(session.metadata)
                }
            })
        }
        fetchData()
    }, []);

    return <Box maxW="600px" mx="auto" mt={20} textAlign="center">
        <Heading mb={4}>{message}</Heading>
        <Text mb={8}>
            Thank you for your payment. Your transaction has been successfully
            processed.
        </Text>
        <Link href="/user/dashboard">
            <Button colorScheme="brand" >
                Go to Dashboard
            </Button>
        </Link>
    </Box>
}