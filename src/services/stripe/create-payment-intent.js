'use server'
// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
    // Use reduce to sum up the amounts of all items
    const totalAmount = items.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
    }, 0);
    // Return the total amount
    return totalAmount * 100;
};

export default async function create({ items }) {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "cad",
        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        automatic_payment_methods: {
            enabled: true,
        },
    });

    return {
        clientSecret: paymentIntent.client_secret,
    }
};