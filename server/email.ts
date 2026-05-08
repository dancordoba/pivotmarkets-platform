/**
 * Email service using Resend
 * Handles contact form submissions and automated responses
 */

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
}

/**
 * Send contact form submission notification to site owner
 */
export async function sendContactNotification(data: ContactFormData) {
  try {
    const result = await resend.emails.send({
      from: 'PivotMarkets Contact <noreply@pivotmarkets.ai>',
      to: 'contact@pivotmarkets.ai',
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
        ${data.message ? `<p><strong>Message:</strong></p><p>${data.message.replace(/\n/g, '<br>')}</p>` : ''}
        <hr>
        <p><small>Sent from PivotMarkets.ai contact form</small></p>
      `,
    });

    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error('[Email] Failed to send contact notification:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Send admin notification to dan@myrealestateira.com
 */
export async function sendAdminNotification(data: ContactFormData) {
  try {
    const result = await resend.emails.send({
      from: 'PivotMarkets Contact <noreply@pivotmarkets.ai>',
      to: 'dan@myrealestateira.com',
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
        ${data.message ? `<p><strong>Message:</strong></p><p>${data.message.replace(/\n/g, '<br>')}</p>` : ''}
        <hr>
        <p><a href="https://pivotmarkets.ai/admin/contact-submissions">View all submissions</a></p>
      `,
    });

    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error('[Email] Failed to send admin notification:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Send custom email from admin
 */
export async function sendAdminEmail(to: string, subject: string, message: string) {
  try {
    const result = await resend.emails.send({
      from: 'PivotMarkets Team <contact@pivotmarkets.ai>',
      to,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          ${message.replace(/\n/g, '<br>')}
          <hr style="margin-top: 2rem; border: none; border-top: 1px solid #ccc;">
          <p style="font-size: 0.9em; color: #666;">
            <small>Sent from PivotMarkets.ai</small>
          </p>
        </div>
      `,
    });

    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error('[Email] Failed to send admin email:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Send automated thank-you response to visitor
 */
export async function sendAutoReply(data: ContactFormData) {
  try {
    const result = await resend.emails.send({
      from: 'PivotMarkets Team <noreply@pivotmarkets.ai>',
      to: data.email,
      subject: 'Thank you for contacting PivotMarkets',
      html: `
        <h2>Thank You for Reaching Out!</h2>
        <p>Hi ${data.name},</p>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to explore:</p>
        <ul>
          <li><a href="https://pivotmarkets.ai/appstore">Our App Store</a> - See our industrial AI applications in action</li>
          <li><a href="https://pivotmarkets.ai/glossary">Glossary</a> - Learn about AI infrastructure terminology</li>
        </ul>
        <p>Best regards,<br>The PivotMarkets Team</p>
        <hr>
        <p><small>This is an automated response. Please do not reply to this email.</small></p>
      `,
    });

    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error('[Email] Failed to send auto-reply:', error);
    return { success: false, error: String(error) };
  }
}
