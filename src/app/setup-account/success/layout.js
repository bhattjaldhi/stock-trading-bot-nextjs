'use client'

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Layout({ children }) {

    const router = useRouter();

    const clientSecret = router.query.payment_intent_client_secret;

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