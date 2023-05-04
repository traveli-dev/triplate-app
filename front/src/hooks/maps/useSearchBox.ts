import { useState } from 'react'

type SearchResult = {
  name: string
  address: string
  location: google.maps.LatLngLiteral
}

type UseSearchBoxOptionsType = {
  onPlaceChanged: (places: SearchResult | null) => void
}

export const useSearchBox = ({ onPlaceChanged }: UseSearchBoxOptionsType) => {
  const [searchBox, setSearchBox] =
    useState<google.maps.places.SearchBox | null>(null)

  const getPlaceDetails = (places?: google.maps.places.PlaceResult[]) => {
    if (places && places.length > 0) {
      const place = places[0]
      return {
        name: place.name || '',
        address: place.formatted_address || '',
        location: {
          lat: place.geometry?.location?.lat() || 0,
          lng: place.geometry?.location?.lng() || 0
        }
      }
    }
    return null
  }

  const onLoadHandler = (ref: google.maps.places.SearchBox) => {
    setSearchBox(ref)
  }

  const onPlacesChangedHandler = () => {
    if (!searchBox) return
    onPlaceChanged && onPlaceChanged(getPlaceDetails(searchBox.getPlaces()))
  }

  return { onLoadHandler, onPlacesChangedHandler }
}
