import emailjs from '@emailjs/browser'

// EmailJS configuration
// You'll need to replace these with your actual EmailJS credentials
export const EMAILJS_CONFIG = {
  serviceID: 'your_service_id', // Replace with your EmailJS service ID
  templateID: 'your_template_id', // Replace with your EmailJS template ID for bookings
  contactTemplateID: 'your_contact_template_id', // Replace with your EmailJS template ID for contact messages
  publicKey: 'your_public_key' // Replace with your EmailJS public key
}

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.publicKey)
}

// Send booking email
export const sendBookingEmail = async (formData) => {
  try {
    const templateParams = {
      to_name: 'Florist Owner', // Name of the recipient
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      preferred_date: formData.date,
      preferred_time: formData.time,
      service_type: formData.service,
      message: formData.message,
      reply_to: formData.email
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceID,
      EMAILJS_CONFIG.templateID,
      templateParams
    )

    return { success: true, response }
  } catch (error) {
    console.error('EmailJS Error:', error)
    return { success: false, error }
  }
}

// Send contact form email
export const sendContactEmail = async (formData) => {
  try {
    const templateParams = {
      to_name: 'Florist Owner', // Name of the recipient
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceID,
      EMAILJS_CONFIG.contactTemplateID,
      templateParams
    )

    return { success: true, response }
  } catch (error) {
    console.error('EmailJS Contact Error:', error)
    return { success: false, error }
  }
} 