import { useJsApiLoader } from '@react-google-maps/api'

export type Libraries = (
  | 'drawing'
  | 'geometry'
  | 'localContext'
  | 'places'
  | 'visualization'
)[]

export type LoadScriptUrlOptions = {
  nonce?: string | undefined
  preventGoogleFontsLoading?: boolean | undefined
  googleMapsClientId?: string
  version?: string
  language?: string
  region?: string
  libraries?: Libraries
  channel?: string
  mapIds?: string[]
}

export const useLoadMap = (options: LoadScriptUrlOptions) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY || ''

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
    ...options
  })

  const mapOptions: google.maps.MapOptions = {
    mapTypeControl: false,
    maxZoom: 18,
    streetViewControl: false,
    fullscreenControl: false
  }

  return { isLoaded, loadError, mapOptions }
}
