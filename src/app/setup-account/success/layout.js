'use client'

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Layout({ children }) {
    const [clientSecret, setClientSecret] = useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const secret = urlParams.get("payment_intent_client_secret");
        setClientSecret(secret);
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    {children}
                </Elements>
            )}
        </>
    );
}
