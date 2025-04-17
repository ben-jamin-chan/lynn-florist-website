import { Flower, Gift, Calendar, Users, Heart, Sparkles } from "lucide-react"
import Hero from "../components/Hero"
import ServiceCard from "../components/ServiceCard"
import TestimonialCard from "../components/TestimonialCard"
import { Link } from "react-router-dom"

const Home = () => {
  const services = [
    {
      title: "Wedding Flowers",
      description: "Beautiful floral arrangements for your special day, from bouquets to venue decoration.",
      icon: <Heart size={32} />,
      price: "499",
    },
    {
      title: "Event Decoration",
      description: "Transform your event space with stunning floral installations and decorative elements.",
      icon: <Sparkles size={32} />,
      price: "299",
    },
    {
      title: "Custom Bouquets",
      description: "Handcrafted bouquets tailored to your preferences, perfect for gifts or special occasions.",
      icon: <Flower size={32} />,
      price: "59",
    },
    {
      title: "Flower Subscription",
      description: "Regular deliveries of fresh seasonal flowers to brighten your home or office.",
      icon: <Calendar size={32} />,
      price: "39/month",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      date: "June 15, 2023",
      rating: 5,
      text: "The wedding flowers exceeded all my expectations. Everyone was commenting on how beautiful they were!",
      image: "/testimonial-1.jpg",
    },
    {
      name: "Michael Chen",
      date: "April 3, 2023",
      rating: 5,
      text: "I've been using their subscription service for 6 months now, and the quality and variety are consistently excellent.",
      image: "/testimonial-2.jpg",
    },
    {
      name: "Emma Williams",
      date: "May 22, 2023",
      rating: 4,
      text: "The bouquet I ordered for my mother's birthday was gorgeous and lasted for over two weeks!",
      image: "/testimonial-3.jpg",
    },
  ]

  return (
    <div>
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Services</h2>
          <p className="section-subtitle text-center">
            From weddings to everyday occasions, we create beautiful floral designs tailored to your needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">About Bloom & Petal</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, Bloom & Petal has been creating beautiful floral arrangements for all occasions. Our
                team of experienced florists combines artistry and passion to deliver stunning designs that exceed
                expectations.
              </p>
              <p className="text-gray-600 mb-6">
                We source our flowers from local and sustainable growers whenever possible, ensuring the freshest blooms
                while supporting our community and the environment.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center">
                  <Gift className="text-emerald-600 mr-3" size={24} />
                  <span className="text-gray-700">Custom Designs</span>
                </div>
                <div className="flex items-center">
                  <Flower className="text-emerald-600 mr-3" size={24} />
                  <span className="text-gray-700">Fresh Flowers</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="text-emerald-600 mr-3" size={24} />
                  <span className="text-gray-700">Timely Delivery</span>
                </div>
                <div className="flex items-center">
                  <Users className="text-emerald-600 mr-3" size={24} />
                  <span className="text-gray-700">Expert Florists</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/florist-working.jpg"
                alt="Florist arranging flowers"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-emerald-50 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">What Our Customers Say</h2>
          <p className="section-subtitle text-center">
            We take pride in delivering exceptional service and beautiful flowers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Order Beautiful Flowers?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Book an appointment or contact us to discuss your floral needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/booking"
              className="px-6 py-3 bg-white text-emerald-700 rounded-md hover:bg-gray-100 transition-colors duration-300"
            >
              Book Now
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-transparent border border-white text-white rounded-md hover:bg-emerald-600 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

