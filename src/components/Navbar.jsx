"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="text-2xl font-light text-emerald-700">
          Bloom & Petal
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-gray-600 hover:text-emerald-600 transition-colors">
            Services
          </Link>
          <Link to="/gallery" className="text-gray-600 hover:text-emerald-600 transition-colors">
            Gallery
          </Link>
          <Link to="/booking" className="text-gray-600 hover:text-emerald-600 transition-colors">
            Book Now
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-emerald-600 transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-emerald-600 transition-colors">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50">
          <div className="flex flex-col space-y-4 p-4">
            <Link to="/" className="text-gray-600 hover:text-emerald-600 transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link to="/gallery" className="text-gray-600 hover:text-emerald-600 transition-colors" onClick={toggleMenu}>
              Gallery
            </Link>
            <Link to="/booking" className="text-gray-600 hover:text-emerald-600 transition-colors" onClick={toggleMenu}>
              Book Now
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-emerald-600 transition-colors" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-emerald-600 transition-colors" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

