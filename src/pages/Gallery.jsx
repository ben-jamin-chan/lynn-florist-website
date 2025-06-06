"use client"

import { useState } from "react"
import GalleryItem from "../components/GalleryItem"

const Gallery = () => {
  const [filter, setFilter] = useState("all")

  const galleryItems = [
    {
      id: 1,
      image: "/gallery-wedding.jpg",
      title: "Spring Wedding Bouquet",
      category: "wedding",
    },
    {
      id: 2,
      image: "https://www.odealarose.com/media/cache/585_780_jpeg/cms/phpjYDmKo-6477b5289eebb.jpeg",
      title: "Corporate Event Centerpiece",
      category: "event",
    },
    {
      id: 3,
      
      image: "https://www.poetryinflowers.com.au/cdn/shop/products/mdaybunchesteainfuser3_680x1024.jpg?v=1742954154",
      title: "Birthday Arrangement",
      category: "bouquet",
    },
    {
      id: 4,
      image: "https://www.originalweddings.com/wp-content/smush-webp/2022/09/IMG_2824-1-1.jpg.webp",
      title: "Bridal Party Flowers",
      category: "wedding",
    },
    {
      id: 5,
      image: "/gallery-subscription.jpg",
      title: "Summer Subscription Box",
      category: "subscription",
    },
    {
      id: 6,
      image: "/gallery-sympathy.jpg",
      title: "Sympathy Arrangement",
      category: "sympathy",
    },
    {
      id: 7,
      image: "https://www.cascadefloralwholesale.com/wp-content/uploads/2021/11/Holiday-bouquet-with-pine-cones-red-roses-white-cotton-flowers-berries-and-green-pine-accents.jpg",
      title: "Holiday Centerpiece",
      category: "seasonal",
    },
    {
      id: 8,
      image: "/gallery-bouquet2.jpg",
      title: "Anniversary Bouquet",
      category: "bouquet",
    },
    {
      id: 9,
      image: "/gallery-subscription2.jpg",
      title: "Office Weekly Flowers",
      category: "subscription",
    },
  ]

  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter)

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">Our Gallery</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our portfolio of beautiful floral arrangements and designs
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              className={`px-4 py-2 rounded-md transition-colors ${filter === "all" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${filter === "wedding" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              onClick={() => setFilter("wedding")}
            >
              Weddings
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${filter === "event" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              onClick={() => setFilter("event")}
            >
              Events
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${filter === "bouquet" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              onClick={() => setFilter("bouquet")}
            >
              Bouquets
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${filter === "subscription" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              onClick={() => setFilter("subscription")}
            >
              Subscriptions
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${filter === "seasonal" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              onClick={() => setFilter("seasonal")}
            >
              Seasonal
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <GalleryItem key={item.id} {...item} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Gallery

