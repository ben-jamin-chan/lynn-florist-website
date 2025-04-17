import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="relative h-[80vh] flex items-center">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-flowers.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      {/* Decorative elements */}
      {/* <div className="absolute top-0 right-0 w-64 h-64 opacity-20 z-0">
        <img src="/flower-decoration-1.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20 z-0">
        <img src="/flower-decoration-2.svg" alt="" className="w-full h-full object-contain" />
      </div> */}
      
      <div className="container-custom relative z-10 text-center">
        <h1 className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-5xl md:text-7xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-pink-500 animate-gradient-shift bg-[length:300%_300%]">
    Beautiful Flowers for Every Occasion
  </h1>
  <p className="drop-shadow-[3.2px_1.2px_2.2px_rgba(0,0,0,0.8)] text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
    Handcrafted floral arrangements delivered with care and passion
  </p>
  
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/booking" className="btn-primary bg-emerald-600 hover:bg-emerald-700">
            Book Now
          </Link>
          <Link
            to="/gallery"
            className="px-6 py-3 bg-white text-emerald-700 rounded-md hover:bg-gray-100 transition-colors duration-300 border border-emerald-200"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero

