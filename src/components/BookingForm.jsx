"use client"

import { useState, useEffect } from "react"
import { initEmailJS, sendBookingEmail } from "../lib/emailjs"

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})

  // Initialize EmailJS when component mounts
  useEffect(() => {
    initEmailJS()
  }, [])

  // Form validation
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }
    
    if (!formData.date) {
      newErrors.date = "Preferred date is required"
    } else {
      const selectedDate = new Date(formData.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        newErrors.date = "Date cannot be in the past"
      }
    }
    
    if (!formData.time) {
      newErrors.time = "Preferred time is required"
    }
    
    if (!formData.service) {
      newErrors.service = "Service type is required"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form before submission
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await sendBookingEmail(formData)
      
      if (result.success) {
        setSubmitStatus("success")
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          service: "",
          message: "",
        })
        setErrors({})
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error('Booking submission error:', error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service Type
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${
              errors.service ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select a service</option>
            <option value="wedding">Wedding Flowers</option>
            <option value="event">Event Decoration</option>
            <option value="bouquet">Custom Bouquet</option>
            <option value="subscription">Flower Subscription</option>
            <option value="workshop">Floral Workshop</option>
          </select>
          {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            min={new Date().toISOString().split('T')[0]}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${
              errors.date ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${
              errors.time ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Details
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        ></textarea>
      </div>

      <div>
        <button type="submit" disabled={isSubmitting} className="w-full btn-primary flex justify-center items-center">
          {isSubmitting ? "Submitting..." : "Book Appointment"}
        </button>
      </div>

      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 text-green-700 rounded-md">
          Thank you! Your booking request has been submitted successfully. We'll contact you shortly to confirm your
          appointment.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 text-red-700 rounded-md">
          <p className="font-medium">Unable to submit your booking request</p>
          <p className="text-sm mt-1">
            Please check your internet connection and try again, or contact us directly at{" "}
            <a href="tel:+1234567890" className="underline">
              (123) 456-7890
            </a>{" "}
            or{" "}
            <a href="mailto:info@floristwebsite.com" className="underline">
              info@floristwebsite.com
            </a>
          </p>
        </div>
      )}
    </form>
  )
}

export default BookingForm

