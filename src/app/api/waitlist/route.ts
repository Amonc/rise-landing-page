import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || '54db7b78-8493-4ca2-b5bb-4bc25b757140';

export async function POST(request: Request) {
  try {
    const { email, firstName, lastName } = await request.json();

    if (!email || !firstName || !lastName) {
      return NextResponse.json(
        { error: 'Email, first name, and last name are required' },
        { status: 400 }
      );
    }

    // Check if contact already exists
    try {
      const existingContact = await fetch(`https://api.resend.com/audiences/${AUDIENCE_ID}/contacts/${email}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      if (existingContact.ok) {
        // Contact already exists
        return NextResponse.json(
          { 
            message: 'You\'re already on the waitlist!',
            alreadyExists: true,
            info: 'We\'ll notify you as soon as RISE launches. Check your email for updates!'
          },
          { status: 200 }
        );
      }
    } catch (error) {
      // Contact doesn't exist, continue to create
      console.log('Contact does not exist, creating new...');
    }

    // Create new contact
    const createContactResponse = await fetch(`https://api.resend.com/audiences/${AUDIENCE_ID}/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        first_name: firstName,
        last_name: lastName,
        unsubscribed: false,
      }),
    });

    if (!createContactResponse.ok) {
      const errorData = await createContactResponse.json();
      console.error('Failed to create contact:', errorData);
      // Don't fail the whole request if contact creation fails
    }

    const contactData = createContactResponse.ok ? await createContactResponse.json() : null;

    // Send confirmation email
    const { data, error } = await resend.emails.send({
      from: `${process.env.RESEND_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
      to: [email],
      subject: 'Welcome to the RISE Waitlist!',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="color: #3A3E38; font-size: 28px; margin-bottom: 16px;">Welcome to RISE, ${firstName}!</h1>
          
          <p style="color: #3A3E38; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            Thank you for joining our waitlist! We're thrilled to have you on board as we prepare to launch RISE - your AI-powered wardrobe assistant.
          </p>
          
          <div style="background-color: #F5EFE1; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <h2 style="color: #3A3E38; font-size: 20px; margin-bottom: 12px;">What happens next?</h2>
            <ul style="color: #3A3E38; font-size: 16px; line-height: 1.8; margin: 0; padding-left: 20px;">
              <li>You're now on our exclusive waitlist</li>
              <li>We'll keep you updated on our progress</li>
              <li>You'll get early access when we launch</li>
              <li>Exclusive perks and offers for early supporters</li>
            </ul>
          </div>
          
          <p style="color: #3A3E38; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            While you wait, follow us on social media to stay connected with the latest updates and fashion tips from RISE!
          </p>
          
          <div style="border-top: 1px solid #CEC5AB; padding-top: 24px; margin-top: 32px;">
            <p style="color: #9A917A; font-size: 14px; line-height: 1.6; margin: 0;">
              You're receiving this email because you signed up for the RISE waitlist. If you didn't sign up, please ignore this email.
            </p>
            <p style="color: #9A917A; font-size: 14px; line-height: 1.6; margin: 8px 0 0;">
              © 2025 RISE. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send confirmation email' },
        { status: 500 }
      );
    }

    // Here you could also save the waitlist entry to a database
    // For now, we're just sending the email and adding to contacts

    return NextResponse.json(
      { 
        message: 'Successfully joined waitlist!', 
        emailId: data,
        contactId: contactData?.id || null,
        alreadyExists: false
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}