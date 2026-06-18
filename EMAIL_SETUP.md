# Email Setup Guide - Post-Purchase Confirmation

This guide explains how to configure the automated post-purchase email system.

## Overview

When a customer completes a purchase, they automatically receive a personalized email from **contact@freelancewebdesign.store** with:
- Order confirmation
- Direct download link to the PDF course
- Course details and what's included
- Support contact information

## Prerequisites

1. **Resend Account**: [Sign up at Resend.com](https://resend.com)
2. **Domain Email**: You need to verify your domain with Resend to send from contact@freelancewebdesign.store
3. **Environment Variable**: Set your Resend API key

## Setup Steps

### 1. Configure Resend Domain

1. Go to [Resend Dashboard](https://dashboard.resend.com)
2. Click "Domains" in the sidebar
3. Add your domain (digitalsolutions.io)
4. Follow the DNS verification steps
5. Once verified, you can send from contact@freelancewebdesign.store

### 2. Set Environment Variable

Add to your `.env.local`:

```
RESEND_API_KEY=your_resend_api_key_here
```

Get your API key from [Resend Settings](https://dashboard.resend.com/settings/api-keys)

### 3. Configure Download URL

The download link is automatically generated as:
```
https://yourdomain.com/api/download-course
```

Update the base URL in your environment:

```
NEXT_PUBLIC_BASE_URL=https://digitalsolutions.io
```

### 4. Course PDF File

The system looks for: `Freelance_Web_Design_Course.pdf`

Make sure this file is in the project root directory. The download endpoint will stream this file to customers after payment.

## Email Flow

1. **Customer completes payment** → Stripe processes
2. **Webhook triggered** → `pages/api/webhooks/stripe.ts`
3. **Order stored** → Payment intent metadata saved
4. **Email sent** → Resend sends personalized email with download link
5. **Customer receives** → Email from contact@freelancewebdesign.store

## Email Template Customization

The email template is in `lib/email.ts` in the `sendCourseConfirmationEmail` function.

Key sections:
- **Subject**: Purchase confirmation + course ready message
- **Download Button**: Links to `/api/download-course`
- **Course Contents**: 8 modules listed
- **Pro Tips**: Save locally, lifetime access, future updates
- **Support**: Contact via email or contact page

## Testing

1. Use Stripe test card: `4242 4242 4242 4242`
2. Enter any future expiration date and CVC
3. Check inbox for confirmation email
4. Verify download link works

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Email not sending | Check RESEND_API_KEY in .env.local |
| "Invalid from address" | Verify domain in Resend dashboard |
| Download link 404 | Check PDF filename matches and is in project root |
| Email styling broken | Test in different email clients (Gmail, Outlook, etc.) |

## Testing Webhook Locally

To test the webhook locally:

```bash
# Use Stripe CLI
stripe listen --forward-to localhost:3000/api/webhooks/stripe

# In another terminal
stripe trigger payment_intent.succeeded
```

## Security Notes

- ✅ Email address validated before sending
- ✅ Payment intent verified with Stripe signature
- ✅ Download access based on payment status
- ✅ No sensitive payment data in emails
- ✅ All links use HTTPS

## Next Steps

1. [ ] Set up Resend domain verification
2. [ ] Add RESEND_API_KEY to .env.local
3. [ ] Configure NEXT_PUBLIC_BASE_URL
4. [ ] Place PDF file in project root
5. [ ] Test with Stripe test payment
6. [ ] Verify email arrives and link works
7. [ ] Deploy to production with real domain
