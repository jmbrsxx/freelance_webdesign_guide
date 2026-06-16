import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-05-27.dahlia',
});

// Fixed course price in cents ($97.00 = 9700 cents)
const COURSE_PRICE_CENTS = 9700;

type ResponseData = {
  clientSecret?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Add CORS headers to prevent misuse
  res.setHeader('Access-Control-Allow-Origin', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const { email, courseTitle } = req.body;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Create payment intent with server-controlled amount
    // Client cannot manipulate the price
    const paymentIntent = await stripe.paymentIntents.create({
      amount: COURSE_PRICE_CENTS, // Always use fixed price
      currency: 'usd',
      payment_method_types: ['card'],
      metadata: {
        email,
        courseTitle: courseTitle || 'Complete Web Design Course',
      },
      receipt_email: email,
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    // Don't expose internal error details to client
    if (process.env.NODE_ENV === 'development') {
      console.error('Payment error:', error);
    }
    res.status(500).json({ 
      error: 'Payment processing failed. Please try again.' 
    });
  }
}
