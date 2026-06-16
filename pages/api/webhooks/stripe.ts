import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { buffer } from 'micro';
import { sendCourseConfirmationEmail, sendRefundEmail } from '../../../lib/email';

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
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        if (process.env.NODE_ENV === 'development') {
          console.log('Payment succeeded:', paymentIntent.id);
        }

        // Extract email and courseTitle from metadata
        const email = paymentIntent.metadata?.email;
        const courseTitle = paymentIntent.metadata?.courseTitle || 'Course';

        if (email) {
          // Send confirmation email
          const emailResult = await sendCourseConfirmationEmail(
            email,
            courseTitle,
            paymentIntent.id
          );

          if (!emailResult.success) {
            if (process.env.NODE_ENV === 'development') {
              console.error('Failed to send email:', emailResult.error);
            }
            // Log to external service (e.g., Sentry) in production
          }
        }
        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        const email = paymentIntent.metadata?.email;

        if (process.env.NODE_ENV === 'development') {
          console.log('Payment failed for intent:', paymentIntent.id);
        }
        // TODO: Send payment failed notification email
        break;
      }

      case 'charge.refunded': {
        const charge = event.data.object as Stripe.Charge;
        if (process.env.NODE_ENV === 'development') {
          console.log('Refund processed:', charge.id);
        }

        if (charge.metadata?.email) {
          const refundAmount = charge.amount_refunded / 100; // Convert from cents
          const courseTitle = charge.metadata?.courseTitle || 'Course';

          await sendRefundEmail(
            charge.metadata.email,
            courseTitle,
            refundAmount,
            charge.metadata?.refund_reason || 'Requested by customer'
          );
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
