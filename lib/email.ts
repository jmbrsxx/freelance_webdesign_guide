import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendCourseConfirmationEmail(
  email: string,
  courseTitle: string,
  paymentId: string
) {
  try {
    const result = await resend.emails.send({
      from: 'noreply@yourdomain.com', // TODO: Update with your domain
      to: email,
      subject: `Course Access Confirmed: ${courseTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">🎉 Welcome!</h1>
          </div>
          
          <div style="background: #f9f9f9; padding: 40px; border-radius: 0 0 8px 8px;">
            <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
              Thank you for purchasing <strong>${courseTitle}</strong>!
            </p>

            <div style="background: white; border-left: 4px solid #667eea; padding: 20px; margin: 20px 0; border-radius: 4px;">
              <h2 style="color: #667eea; margin-top: 0;">✓ Your Access is Active</h2>
              <p style="color: #666; margin: 10px 0;">
                You now have full access to all course materials. Your order confirmation number is:
              </p>
              <p style="font-family: monospace; background: #f0f0f0; padding: 10px; border-radius: 4px; color: #333; font-weight: bold;">
                ${paymentId}
              </p>
            </div>

            <div style="background: white; border-left: 4px solid #48bb78; padding: 20px; margin: 20px 0; border-radius: 4px;">
              <h2 style="color: #48bb78; margin-top: 0;">📚 What's Included</h2>
              <ul style="color: #666; margin: 10px 0; padding-left: 20px;">
                <li style="margin: 8px 0;">Complete course materials (PDF)</li>
                <li style="margin: 8px 0;">All 3 modules with detailed lessons</li>
                <li style="margin: 8px 0;">Lifetime access</li>
                <li style="margin: 8px 0;">Email support</li>
              </ul>
            </div>

            <div style="background: white; padding: 20px; margin: 20px 0; border-radius: 4px; text-align: center;">
              <a href="https://yourdomain.com/dashboard" style="display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: bold; margin-bottom: 10px;">
                Access Your Course
              </a>
              <p style="color: #999; font-size: 14px; margin-top: 10px;">
                Or copy this link: https://yourdomain.com/dashboard
              </p>
            </div>

            <div style="background: #f0f0f0; padding: 20px; margin: 20px 0; border-radius: 4px;">
              <h3 style="color: #333; margin-top: 0;">❓ Questions?</h3>
              <p style="color: #666; margin: 10px 0;">
                If you have any questions, feel free to reply to this email or contact us at support@yourdomain.com
              </p>
            </div>

            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
            
            <p style="color: #999; font-size: 12px; text-align: center; margin: 10px 0;">
              © 2024 Your Course Platform. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return { success: false, error: result.error };
    }

    console.log('✅ Confirmation email sent to:', email);
    return { success: true, messageId: result.data?.id };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
}

export async function sendRefundEmail(
  email: string,
  courseTitle: string,
  refundAmount: number,
  reason: string
) {
  try {
    const result = await resend.emails.send({
      from: 'noreply@yourdomain.com',
      to: email,
      subject: `Refund Processed: ${courseTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">💰 Refund Processed</h1>
          </div>
          
          <div style="background: #f9f9f9; padding: 40px; border-radius: 0 0 8px 8px;">
            <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
              Your refund for <strong>${courseTitle}</strong> has been processed.
            </p>

            <div style="background: white; border-left: 4px solid #f5576c; padding: 20px; margin: 20px 0; border-radius: 4px;">
              <h2 style="color: #f5576c; margin-top: 0;">Refund Details</h2>
              <p style="color: #666; margin: 10px 0;">
                <strong>Amount:</strong> $${refundAmount.toFixed(2)}
              </p>
              <p style="color: #666; margin: 10px 0;">
                <strong>Reason:</strong> ${reason}
              </p>
              <p style="color: #999; margin: 10px 0; font-size: 14px;">
                The refund may take 3-5 business days to appear in your account.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return { success: false, error: result.error };
    }

    console.log('✅ Refund email sent to:', email);
    return { success: true, messageId: result.data?.id };
  } catch (error) {
    console.error('Failed to send refund email:', error);
    return { success: false, error };
  }
}
