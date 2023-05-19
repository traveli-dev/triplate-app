import { useJsApiLoader } from '@react-google-maps/api'

export const useLoadMap = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY || ''

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
    libraries: ['geometry', 'places']
  })

  const mapOptions: google.maps.MapOptions = {
    mapTypeControl: false,
    maxZoom: 18,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: false
  }

  return { isLoaded, loadError, mapOptions }
}
