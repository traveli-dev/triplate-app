import { useState } from 'react'

// TODO: 多分firebase実装の時にRTKの方に移植する
type PlaceDetailsType = {
  name: string
  location: google.maps.LatLngLiteral
}

export const useSearchBox = () => {
  const center = {
    name: '東京都',
    location: { lat: 35.681382, lng: 139.766084 }
  }

  const [searchBox, setSearchBox] =
    useState<google.maps.places.SearchBox | null>(null)
  const [placeDetails, setPlaceDetails] = useState<PlaceDetailsType>(center)

  const getPlaceDetails = (places?: google.maps.places.PlaceResult[]) => {
    if (places && places.length > 0) {
      const place = places[0]
      return {
        name: place.name || '',
        location: {
          lat: place.geometry?.location?.lat() || 0,
          lng: place.geometry?.location?.lng() || 0
        }
      }
    }
    return center
  }

  const onLoadHandler = (ref: google.maps.places.SearchBox) => {
    setSearchBox(ref)
  }

  const onPlacesChangedHandler = () => {
    if (!searchBox) return
    setPlaceDetails(getPlaceDetails(searchBox.getPlaces()))
  }

  return {
    placeDetails,
    onLoadHandler,
    onPlacesChangedHandler
  }
}
