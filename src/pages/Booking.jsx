import BookingForm from "../components/BookingForm"
import { Calendar, Clock, CreditCard, CheckCircle } from "lucide-react"

const Booking = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">Book an Appointment</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation or place an order for your floral needs
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-light mb-6 text-gray-800">Request an Appointment</h2>
              <BookingForm />
            </div>

            <div className="lg:pl-12">
              <h2 className="text-2xl font-light mb-6 text-gray-800">Booking Information</h2>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-medium mb-4 text-gray-800">How It Works</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 text-emerald-600">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Submit Your Request</h4>
                      <p className="text-gray-600">Fill out the booking form with your details and preferences.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 text-emerald-600">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Confirmation</h4>
                      <p className="text-gray-600">We'll contact you within 24 hours to confirm your appointment.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 text-emerald-600">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Consultation</h4>
                      <p className="text-gray-600">Meet with our florists to discuss your vision and requirements.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 text-emerald-600">
                      <CreditCard size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Payment</h4>
                      <p className="text-gray-600">Secure your order with a deposit or full payment.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4 text-gray-800">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800">How far in advance should I book?</h4>
                    <p className="text-gray-600">
                      For weddings and large events, we recommend booking 3-6 months in advance. For smaller orders, 1-2
                      weeks notice is usually sufficient.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Do you offer delivery?</h4>
                    <p className="text-gray-600">
                      Yes, we offer delivery within a 25-mile radius of our shop. Delivery fees vary based on distance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">What is your cancellation policy?</h4>
                    <p className="text-gray-600">
                      Cancellations made more than 48 hours before your appointment are fully refundable. For later
                      cancellations, a 50% fee may apply.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Can I see samples before ordering?</h4>
                    <p className="text-gray-600">
                      Yes, during your consultation we can show you samples or our portfolio to help you visualize your
                      order.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Booking

