'use client'

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Layout({ children }) {


    const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
      );

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return <>{clientSecret && (
        <Elements options={options} stripe={stripePromise}>
            {children}
        </Elements>
    )}</>
}