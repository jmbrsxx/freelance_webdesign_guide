import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { buffer } from 'micro';
import { sendCourseConfirmationEmail } from '../../../lib/email';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-05-27.dahlia',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

// Disable body parser for this route
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const buf = await buffer(req);
    const sig = req.headers['stripe-signature'] as string;

    // Verify webhook signature - prevents fake webhook calls
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (err) {
      console.error('Webhook signature verification failed');
      return res.status(400).json({ error: 'Invalid signature' });
    }

    // Handle different event types
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('✅ Checkout session completed:', session.id);
        console.log('📧 Customer email:', session.customer_email);

        // Extract email and courseTitle from metadata
        const email = session.customer_email || session.metadata?.email;
        const courseTitle = session.metadata?.courseTitle || 'Freelance Web Design & Development Course';
        const downloadUrl = `${process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'}/api/download-course?session_id=${session.id}`;

        if (email) {
          console.log('📧 Sending confirmation email to:', email);
          // Send confirmation email
          const emailResult = await sendCourseConfirmationEmail(
            email,
            courseTitle,
            session.id,
            downloadUrl
          );

          if (emailResult.success) {
            console.log('✅ Confirmation email sent successfully');
          } else {
            console.error('❌ Failed to send email:', emailResult.error);
          }
        } else {
          console.error('❌ No email found in session');
        }
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.status(200).json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
}
