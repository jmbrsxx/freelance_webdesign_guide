import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-05-27.dahlia',
});

// Fixed course price - supports both USD and BRL
// USD: $1.00 = 100 cents, BRL: R$5.00 = 500 cents (approximate 1:5 ratio)
const COURSE_PRICE_USD_CENTS = 100;
const COURSE_PRICE_BRL_CENTS = 500;

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
    const { email, courseTitle, currency = 'usd' } = req.body;

    // Validate currency
    const validCurrencies = ['usd', 'brl'];
    const selectedCurrency = currency.toLowerCase();
    if (!validCurrencies.includes(selectedCurrency)) {
      return res.status(400).json({ error: 'Invalid currency. Supported: USD, BRL' });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Determine amount based on currency
    const amount = selectedCurrency === 'brl' ? COURSE_PRICE_BRL_CENTS : COURSE_PRICE_USD_CENTS;

    // Create payment intent with server-controlled amount
    // Client cannot manipulate the price
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: selectedCurrency,
      payment_method_types: ['card'],
      metadata: {
        email,
        courseTitle: courseTitle || 'Freelance Web Design & Development Course',
        downloadUrl: `${process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/download-course`,
      },
      receipt_email: email,
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret ?? undefined });
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
