import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendCourseConfirmationEmail(
  email: string,
  courseTitle: string,
  paymentId: string,
  downloadUrl?: string
) {
  try {
    const result = await resend.emails.send({
      from: 'contact@freelancewebdesign.store',
      to: email,
      subject: `🎉 Your Freelance Web Design & Development Course is Ready to Download`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">🎉 Welcome to Your Course!</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px;">Your purchase was successful</p>
          </div>
          
          <div style="background: #f9fafb; padding: 40px; border-radius: 0 0 8px 8px;">
            <p style="color: #1f2937; font-size: 16px; margin: 0 0 20px 0; line-height: 1.5;">
              Hi there! 👋
            </p>
            
            <p style="color: #374151; font-size: 16px; margin: 0 0 20px 0; line-height: 1.5;">
              Thank you for purchasing the <strong>Freelance Web Design & Development Course</strong>. We're excited to have you join us!
            </p>

            <div style="background: white; border: 2px solid #2563eb; padding: 24px; margin: 24px 0; border-radius: 8px; text-align: center;">
              <p style="color: #6b7280; font-size: 14px; margin: 0 0 12px 0; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">
                📥 Download Your Course
              </p>
              <a href="${downloadUrl || 'https://yourdomain.com/download'}" style="display: inline-block; background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: white; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; transition: all 0.3s ease;">
                ⬇️ Download PDF
              </a>
              <p style="color: #9ca3af; font-size: 13px; margin: 12px 0 0 0;">
                96 pages • 47 lessons • Complete freelance business blueprint
              </p>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 20px; margin: 24px 0; border-radius: 4px;">
              <h3 style="color: #166534; margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">✓ Order Confirmation</h3>
              <p style="color: #4b5563; font-size: 14px; margin: 0; font-family: 'Courier New', monospace;">
                Order ID: <strong>${paymentId}</strong>
              </p>
            </div>

            <div style="background: #eff6ff; border-left: 4px solid #2563eb; padding: 20px; margin: 24px 0; border-radius: 4px;">
              <h3 style="color: #1e40af; margin: 0 0 12px 0; font-size: 14px; font-weight: 600;">📚 Inside Your Course</h3>
              <ul style="color: #374151; margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.8;">
                <li style="margin: 4px 0;">Mindset & Market Reality</li>
                <li style="margin: 4px 0;">Skills, Tools & Tech Stack</li>
                <li style="margin: 4px 0;">Portfolio That Converts</li>
                <li style="margin: 4px 0;">Pricing Strategy & Calculations</li>
                <li style="margin: 4px 0;">Client Acquisition Methods</li>
                <li style="margin: 4px 0;">Sales Frameworks & Contracts</li>
                <li style="margin: 4px 0;">Scaling & Recurring Revenue</li>
                <li style="margin: 4px 0;">Practical Templates & Tools</li>
              </ul>
            </div>

            <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 24px 0; border-radius: 4px;">
              <h3 style="color: #92400e; margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">💡 Pro Tips</h3>
              <p style="color: #78350f; font-size: 14px; margin: 0 0 8px 0; line-height: 1.5;">
                • Save the PDF to your computer or cloud storage for easy access
              </p>
              <p style="color: #78350f; font-size: 14px; margin: 0; line-height: 1.5;">
                • You'll have lifetime access to this course and all future updates
              </p>
            </div>

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0; height: 0;">
            
            <p style="color: #6b7280; font-size: 12px; text-align: center; margin: 0; line-height: 1.6;">
              © 2026 Digital Solutions. All rights reserved.<br>
              <a href="https://www.freelancewebdesign.store/terms" style="color: #2563eb; text-decoration: none;">Terms</a> • 
              <a href="https://www.freelancewebdesign.store/privacy" style="color: #2563eb; text-decoration: none;">Privacy</a> • 
              <a href="https://www.freelancewebdesign.store/contact" style="color: #2563eb; text-decoration: none;">Contact</a>
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
