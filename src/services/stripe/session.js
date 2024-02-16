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

export async function createCheckoutSession({ plan }) {
    const products = await stripe.products.search({
        query: `name:\'${plan}\'`,

    });

    // Extract the product ID
    const productId = products.data[0].id;

    // Retrieve the prices associated with the product
    const prices = await stripe.prices.list({
        product: productId
    });

    // Create a PaymentIntent with the order amount and currency
    const session = await stripe.checkout.sessions.create({
        success_url: 'http://localhost:3000/setup-account/success?session={CHECKOUT_SESSION_ID}',
        line_items: [
            {
                price: prices.data[0].id,
                quantity: 1,
            },
        ],
        mode: 'subscription',
        metadata: {
            plan
        }
    });

    return {
        session: session,
    }
};


export async function retrieveSession({ id }) {

    const session = await stripe.checkout.sessions.retrieve(id);
    return {
        session: session,
    }
};