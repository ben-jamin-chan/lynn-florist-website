// Google Maps Configuration
// To use Google Maps, you need to:
// 1. Get a Google Maps API key from https://console.cloud.google.com/
// 2. Enable the Maps JavaScript API for your project
// 3. Replace the placeholder below with your actual API key

export const GOOGLE_MAPS_CONFIG = {
  // Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual Google Maps API key
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY',
  
  // Florist location in Kuala Lumpur
  location: {
    lat: 3.1246150737334766, // Kuala Lumpur coordinates - adjust to your actual location
    lng: 101.71100260274326
  },
  
  // Map settings
  zoom: 15,
  
  // Map styles (optional)
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    }
  ]
}

// Marker configuration for the florist location
export const FLORIST_MARKER = {
  position: GOOGLE_MAPS_CONFIG.location,
  title: "Our Florist Shop - Kuala Lumpur",
  info: "Visit us at our beautiful flower shop in Kuala Lumpur"
} 