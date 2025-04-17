import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-medium mb-4 text-emerald-700">Bloom & Petal</h3>
            <p className="text-gray-600 mb-4">
              Creating beautiful floral arrangements for all occasions. From weddings to corporate events, we bring
              nature's beauty to your special moments.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-500 hover:text-emerald-600" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-500 hover:text-emerald-600" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-500 hover:text-emerald-600" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4 text-emerald-700">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-emerald-600 transition-colors" >
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4 text-emerald-700">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-emerald-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">123 Flower Street, Garden City, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-600">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-600">hello@bloomandpetal.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Bloom & Petal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

