import { WrapperProps } from "@googlemaps/react-wrapper";

export const googleMapsApiConfig: WrapperProps = {
  id: 'google-map-script',
  apiKey: process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY || '',
  libraries: ['geometry', 'places']
}