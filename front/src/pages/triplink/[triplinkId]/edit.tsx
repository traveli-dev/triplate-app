import { useState } from 'react'
import { GoogleMap, MarkerF } from '@react-google-maps/api'
import { StandaloneSearchBox } from '@react-google-maps/api'
import { useLoadMap } from '@/hooks/maps'

// TODO: 多分firebase実装の時にRTKの方に移植する
type PlaceDetailsType = {
  name: string
  location: google.maps.LatLngLiteral
}

const TripLinkEdit = () => {
  const { isLoaded } = useLoadMap({ libraries: ['geometry', 'places'] })
  const [searchBox, setSearchBox] =
    useState<google.maps.places.SearchBox | null>(null)
  const [placeDetails, setPlaceDetails] = useState<PlaceDetailsType | null>(
    null
  )

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
    return null
  }

  const onLoadHandler = (ref: google.maps.places.SearchBox) => {
    setSearchBox(ref)
  }

  const onPlacesChangedHandler = () => {
    if (!searchBox) return
    setPlaceDetails(getPlaceDetails(searchBox.getPlaces()))
  }

  return (
    <div>
      {isLoaded ? (
        <div>
          <StandaloneSearchBox
            onLoad={onLoadHandler}
            onPlacesChanged={onPlacesChangedHandler}
          >
            <input placeholder="aiueo" type="text" />
          </StandaloneSearchBox>
          <GoogleMap
            center={
              placeDetails?.location || { lat: 35.681382, lng: 139.766084 }
            }
            mapContainerStyle={{
              width: '100%',
              height: '400px'
            }}
            zoom={16}
          >
            <MarkerF
              position={
                placeDetails?.location || { lat: 35.681382, lng: 139.766084 }
              }
            />
          </GoogleMap>
        </div>
      ) : (
        <>now load</>
      )}
    </div>
  )
}

export default TripLinkEdit
