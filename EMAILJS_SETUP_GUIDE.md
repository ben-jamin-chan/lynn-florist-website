# EmailJS Setup Guide for Florist Website Booking Form

This guide will help you set up EmailJS to receive booking emails from your florist website.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down the **Service ID** (you'll need this later)

## Step 3: Create Email Templates

You need to create TWO templates - one for booking requests and one for contact messages.

### Template 1: Booking Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

#### Template Subject:
```
New Booking Request from {{from_name}}
```

#### Template Body:
```
Dear {{to_name}},

You have received a new booking request from your florist website.

**Customer Details:**
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}

**Booking Information:**
- Service Type: {{service_type}}
- Preferred Date: {{preferred_date}}
- Preferred Time: {{preferred_time}}

**Additional Details:**
{{message}}

Please contact the customer as soon as possible to confirm their appointment.

Best regards,
Florist Website Booking System
```

4. Save the template and note down the **Template ID** (for bookings)

### Template 2: Contact Form Template

1. Create another new template
2. Use this template content:

#### Template Subject:
```
Contact Form: {{subject}}
```

#### Template Body:
```
Dear {{to_name}},

You have received a new message from your florist website contact form.

**Customer Details:**
- Name: {{from_name}}
- Email: {{from_email}}
- Subject: {{subject}}

**Message:**
{{message}}

Please respond to the customer as soon as possible.

Best regards,
Florist Website Contact System
```

3. Save the template and note down the **Template ID** (for contact messages)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** and copy it

## Step 5: Update Configuration

1. Open `src/lib/emailjs.js` in your project
2. Replace the placeholder values with your actual credentials:

```javascript
export const EMAILJS_CONFIG = {
  serviceID: 'your_actual_service_id',           // From Step 2
  templateID: 'your_booking_template_id',        // From Step 3 - Template 1
  contactTemplateID: 'your_contact_template_id', // From Step 3 - Template 2
  publicKey: 'your_actual_public_key'            // From Step 4
}
```

## Step 6: Set Up Email Destination

In your EmailJS template settings:
1. Set the **To Email** to your business email address
2. Set the **From Name** to something like "Florist Website"
3. Set the **Reply To** to `{{reply_to}}` so you can reply directly to customers

## Step 7: Test the Forms

1. Start your development server: `npm run dev`
2. Test both forms:
   - Navigate to the booking page and submit a test booking
   - Navigate to the contact page and send a test message
3. Check your email for both types of notifications

## Troubleshooting

### Common Issues:

1. **Email not received**: Check your spam folder
2. **403 Forbidden error**: Make sure your domain is added to EmailJS allowed origins
3. **Template variables not working**: Ensure variable names match exactly (case-sensitive)

### EmailJS Free Plan Limits:
- 200 emails per month
- Perfect for small businesses
- Upgrade available for higher volumes

## Security Notes

- EmailJS public key is safe to expose in frontend code
- No sensitive credentials are stored in the frontend
- All emails are sent through EmailJS servers

## Additional Features

You can enhance the setup by:
1. Adding auto-reply emails to customers for both booking and contact forms
2. Setting up email notifications for different service types
3. Adding email validation and formatting
4. Creating separate email addresses for different types of inquiries
5. Setting up email forwarding to different team members based on the subject

---

**Need Help?** Contact EmailJS support or refer to their documentation at [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/) 