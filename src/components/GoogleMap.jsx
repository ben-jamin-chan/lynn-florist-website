import { Wrapper, Status } from "@googlemaps/react-wrapper"
import { useEffect, useRef, useState } from "react"

const MapComponent = ({ center, zoom, markers = [] }) => {
  const ref = useRef(null)
  const [map, setMap] = useState()

  useEffect(() => {
    if (ref.current && !map) {
      const mapInstance = new window.google.maps.Map(ref.current, {
        center,
        zoom,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      })
      setMap(mapInstance)
    }
  }, [ref, map, center, zoom])

  useEffect(() => {
    if (map && markers.length > 0) {
      markers.forEach((marker) => {
        new window.google.maps.Marker({
          position: marker.position,
          map,
          title: marker.title,
          icon: marker.icon || {
            url: "data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' fill='%23059669'/%3e%3c/svg%3e",
            scaledSize: new window.google.maps.Size(32, 32),
            anchor: new window.google.maps.Point(16, 32)
          }
        })
      })
    }
  }, [map, markers])

  return <div ref={ref} className="w-full h-full" />
}

const GoogleMap = ({ 
  apiKey, 
  center = { lat: 3.1319, lng: 101.6841 }, // Default to Kuala Lumpur city center
  zoom = 12, 
  markers = [],
  className = "w-full h-80"
}) => {
  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return (
          <div className={`${className} bg-gray-100 flex items-center justify-center`}>
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-2"></div>
              <p className="text-gray-600">Loading map...</p>
            </div>
          </div>
        )
      case Status.FAILURE:
        return (
          <div className={`${className} bg-gray-100 flex items-center justify-center`}>
            <div className="text-center text-gray-600">
              <p className="font-medium">Unable to load map</p>
              <p className="text-sm mt-1">Please check your internet connection</p>
            </div>
          </div>
        )
      case Status.SUCCESS:
        return (
          <MapComponent 
            center={center} 
            zoom={zoom} 
            markers={markers}
          />
        )
      default:
        return null
    }
  }

  if (!apiKey) {
    return (
      <div className={`${className} bg-gray-100 flex items-center justify-center`}>
        <div className="text-center text-gray-600">
          <p className="font-medium">Map configuration needed</p>
          <p className="text-sm mt-1">Google Maps API key required</p>
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <Wrapper apiKey={apiKey} render={render} />
    </div>
  )
}

export default GoogleMap 