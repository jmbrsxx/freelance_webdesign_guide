import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type ResponseData = {
  success?: boolean;
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const { email, message } = req.body;

    // Validate inputs
    if (!email || !message) {
      return res.status(400).json({ error: 'Email and message are required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    if (message.trim().length < 10) {
      return res.status(400).json({ error: 'Message must be at least 10 characters long' });
    }

    if (message.trim().length > 5000) {
      return res.status(400).json({ error: 'Message must be less than 5000 characters' });
    }

    // Send email to admin
    const result = await resend.emails.send({
      from: 'contact@freelancewebdesign.store',
      to: 'jmsrs375@gmail.com',
      subject: `New Contact Form Submission from ${email}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">📨 New Contact Form Submission</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
            <div style="background: white; border-left: 4px solid #2563eb; padding: 20px; margin-bottom: 20px; border-radius: 4px;">
              <p style="color: #6b7280; font-size: 13px; margin: 0 0 4px 0; text-transform: uppercase; font-weight: 600;">From</p>
              <p style="color: #1f2937; font-size: 16px; margin: 0; font-weight: 500;">${email}</p>
            </div>

            <div style="background: white; border: 1px solid #e5e7eb; padding: 20px; border-radius: 6px; margin-bottom: 20px; word-break: break-word; overflow-wrap: break-word;">
              <p style="color: #6b7280; font-size: 13px; margin: 0 0 12px 0; text-transform: uppercase; font-weight: 600;">Message</p>
              <p style="color: #1f2937; font-size: 14px; margin: 0; line-height: 1.6; white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; max-width: 100%;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
            </div>

            <div style="background: #f3f4f6; padding: 15px; border-radius: 6px; text-align: center;">
              <p style="color: #6b7280; font-size: 12px; margin: 0;">
                Reply to ${email} directly or use the email form to respond.
              </p>
            </div>
          </div>
        </div>
      `,
      replyTo: email,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return res.status(500).json({ error: 'Failed to send message. Please try again.' });
    }

    // Send confirmation email to user
    const confirmationResult = await resend.emails.send({
      from: 'contact@freelancewebdesign.store',
      to: email,
      subject: '✓ We received your message',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #16a34a 0%, #15803d 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">✓ Message Received</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
            <p style="color: #1f2937; font-size: 16px; margin: 0 0 20px 0; line-height: 1.6;">
              Thank you for reaching out! We've received your message and will get back to you as soon as possible, typically within 24 hours.
            </p>

            <div style="background: white; border-left: 4px solid #16a34a; padding: 20px; border-radius: 4px; margin-bottom: 20px;">
              <p style="color: #166534; font-size: 14px; margin: 0; line-height: 1.6;">
                We've sent your message to our team. Look for a response from contact@freelancewebdesign.store.
              </p>
            </div>

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">

            <p style="color: #6b7280; font-size: 12px; text-align: center; margin: 0;">
              © 2026 Digital Solutions. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    res.status(200).json({ 
      success: true, 
      message: 'Your message has been sent successfully. We will get back to you soon!' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      error: 'Something went wrong. Please try again later.' 
    });
  }
}
