"use client"

import { useState } from "react"
import { X } from "lucide-react"

const GalleryItem = ({ image, title, category }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="overflow-hidden rounded-lg cursor-pointer group" onClick={() => setIsOpen(true)}>
        <div className="relative aspect-square">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="text-sm">{category}</p>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-auto max-h-[80vh] object-contain" />
            <div className="bg-white p-4">
              <h3 className="text-xl font-medium">{title}</h3>
              <p className="text-gray-600">{category}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default GalleryItem

