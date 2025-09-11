# Resend Email Setup for RISE Waitlist

## Overview
This setup enables automatic email sending when users join the waitlist. When someone submits the waitlist form, they'll receive a confirmation email through Resend.

## Setup Instructions

### 1. Get Resend API Key
1. Sign up at [resend.com](https://resend.com)
2. Go to API Keys section in your dashboard
3. Create a new API key
4. Copy the API key

### 2. Configure Environment Variables
Update `.env.local` with your Resend credentials:

```env
# Resend API Key
RESEND_API_KEY=your_actual_resend_api_key_here

# Email Configuration
RESEND_FROM_EMAIL=hello@yourdomain.com  # Must be verified domain
RESEND_FROM_NAME=RISE Waitlist
```

### 3. Verify Domain
In Resend dashboard:
1. Go to Domains section
2. Add your domain
3. Add the DNS records shown to your domain provider
4. Wait for verification (usually takes a few minutes)

## How It Works

1. User fills out the waitlist form with first name and email
2. Form submits to `/api/waitlist` endpoint
3. API validates the input
4. User is added as a contact in Resend (for future email campaigns)
5. Resend sends a branded HTML email to the user
6. User sees success message on the page

## Email Content
The confirmation email includes:
- Personalized greeting with user's first name
- Welcome message
- What happens next section
- Social media follow prompt
- Professional HTML template matching RISE branding

## Testing
1. Run the development server: `npm run dev`
2. Navigate to the waitlist section
3. Submit the form with test data
4. Check the email inbox for confirmation

## Troubleshooting
- **Email not sending**: Check API key is correct in `.env.local`
- **Domain error**: Make sure your sending domain is verified in Resend
- **Rate limits**: Free tier allows 100 emails/day

## Future Enhancements
- Add database to store waitlist entries
- Send follow-up emails
- Add double opt-in confirmation
- Integrate with CRM/mailing list service