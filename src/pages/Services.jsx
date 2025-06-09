import { Flower, Gift, Calendar, Users, Heart, Sparkles, Leaf, BookOpen } from "lucide-react"
import ServiceCard from "../components/ServiceCard"
import { Link } from "react-router-dom"
import flowerDecoration1 from "/flower-decoration-1.svg"
import gallerySubscription from "/gallery-subscription.jpg"

const Services = () => {
  const services = [
    {
      title: "Wedding Flowers",
      description:
        "Beautiful floral arrangements for your special day, from bouquets to venue decoration. We offer consultations to understand your vision and create designs that complement your wedding theme.",
      icon: <Heart size={32} />,
      price: "499",
    },
    {
      title: "Event Decoration",
      description:
        "Transform your event space with stunning floral installations and decorative elements. Perfect for corporate events, galas, birthdays, and other special occasions.",
      icon: <Sparkles size={32} />,
      price: "299",
    },
    {
      title: "Custom Bouquets",
      description:
        "Handcrafted bouquets tailored to your preferences, perfect for gifts or special occasions. Choose from seasonal blooms or request specific flowers for a personalized touch.",
      icon: <Flower size={32} />,
      price: "59",
    },
    {
      title: "Flower Subscription",
      description:
        "Regular deliveries of fresh seasonal flowers to brighten your home or office. Choose weekly, bi-weekly, or monthly deliveries in various sizes to suit your space.",
      icon: <Calendar size={32} />,
      price: "39/month",
    },
    {
      title: "Corporate Services",
      description:
        "Regular floral arrangements for offices, hotels, restaurants, and other businesses. Create a welcoming atmosphere with fresh flowers that reflect your brand.",
      icon: <Users size={32} />,
      price: "199",
    },
    {
      title: "Floral Workshops",
      description:
        "Learn the art of floral design in our hands-on workshops. Perfect for team-building events, private parties, or individuals looking to develop a new skill.",
      icon: <BookOpen size={32} />,
      price: "79/person",
    },
    {
      title: "Sympathy Flowers",
      description:
        "Thoughtful arrangements to express condolences and honor loved ones. We handle delivery to funeral homes and services with care and respect.",
      icon: <Leaf size={32} />,
      price: "129",
    },
    {
      title: "Seasonal Decorations",
      description:
        "Festive arrangements for holidays and seasonal celebrations. Add a touch of seasonal charm to your home or business with themed floral designs.",
      icon: <Gift size={32} />,
      price: "89",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-emerald-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
          <img src={flowerDecoration1} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">Our Services</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our range of floral services designed to meet all your needs
          </p>
          <img
            src={gallerySubscription}
            alt="Floral arrangement services"
            className="max-w-sm mx-auto rounded-lg shadow-lg mt-8"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Process</h2>
          <p className="section-subtitle text-center">How we work with you to create the perfect floral experience</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-emerald-700 text-2xl font-medium">1</span>
              </div>
              <h3 className="text-xl font-medium mb-3 text-gray-800">Consultation</h3>
              <p className="text-gray-600">We discuss your needs, preferences, and budget to understand your vision.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-emerald-700 text-2xl font-medium">2</span>
              </div>
              <h3 className="text-xl font-medium mb-3 text-gray-800">Design</h3>
              <p className="text-gray-600">Our expert florists create custom designs based on your requirements.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-emerald-700 text-2xl font-medium">3</span>
              </div>
              <h3 className="text-xl font-medium mb-3 text-gray-800">Delivery</h3>
              <p className="text-gray-600">We carefully prepare and deliver your flowers at the scheduled time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-light mb-6">Ready to get started?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
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

export default Services

