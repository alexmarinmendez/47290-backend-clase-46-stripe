import Stripe from 'stripe'
import dotenv from 'dotenv'
dotenv.config()

const stripe = new Stripe(process.env.SK_TEST_STRIPE)

export const createSession = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    product_data: {
                        name: 'Laptop',
                        description: 'Laptop Super Gamer'
                    },
                    currency: 'usd',
                    unit_amount: 200050 // 2000.50
                },
                quantity: 2
            },
            {
                price_data: {
                    product_data: {
                        name: 'TV',
                        description: 'SmartTV for Champion'
                    },
                    currency: 'usd',
                    unit_amount: 560000 // 5600.00
                },
                quantity: 1
            },

        ],
        mode: 'payment',
        success_url: 'http://localhost:8080/pay/success',
        cancel_url: 'http://localhost:8080/pay/cancel'
    })
    return res.json(session)
}