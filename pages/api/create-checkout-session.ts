import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-05-27.dahlia',
});

// Fixed course price in cents ($1.00 = 100 cents)
const COURSE_PRICE_CENTS = 100;

type ResponseData = {
  url?: string;
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

  // Add CORS headers
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

    // Determine base URL
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    
    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: courseTitle || 'Freelance Web Design & Development Course',
              description: 'Complete freelance web design and development course with 47 lessons',
            },
            unit_amount: COURSE_PRICE_CENTS,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: email,
      success_url: `${baseUrl}/checkout?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/paid-course`,
      metadata: {
        email,
        courseTitle: courseTitle || 'Freelance Web Design & Development Course',
      },
    });

    if (process.env.NODE_ENV === 'development') {
      console.log('✅ Checkout session created:', session.id);
      console.log('📧 Customer email:', email);
      console.log('🔗 Success URL:', `${baseUrl}/checkout?session_id=${session.id}`);
    }

    res.status(200).json({ url: session.url ?? undefined });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Checkout session error:', error);
    }
    res.status(500).json({ 
      error: 'Failed to create checkout session. Please try again.' 
    });
  }
}
