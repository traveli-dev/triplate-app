import { useState } from 'react'
import { useJsApiLoader } from '@react-google-maps/api'

export const useLoadMap = () => {
  const [mapRef, setMapRef] = useState<google.maps.Map | null>(null)

  const apiKey = process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY || ''

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
    libraries: ['geometry', 'places']
  })

  const handleOnLoad = (map: google.maps.Map) => {
    setMapRef(map)
  }
  const handleOnUnMount = () => {
    setMapRef(null)
  }

  const mapOptions: google.maps.MapOptions = {
    mapTypeControl: false,
    maxZoom: 18,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: false
  }

  return {
    isLoaded,
    loadError,
    mapOptions,
    handleOnLoad,
    handleOnUnMount,
    mapRef
  }
}
