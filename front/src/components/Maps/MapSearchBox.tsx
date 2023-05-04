import { css } from '@emotion/react'
import { StandaloneSearchBox } from '@react-google-maps/api'
import { useSearchBox } from '@/hooks/maps'

type SearchResult = {
  name: string
  address: string
  location: google.maps.LatLngLiteral
}

type MapSearchBoxProps = {
  onPlaceChanged: (places: SearchResult | null) => void
}

export const MapSearchBox = ({ onPlaceChanged }: MapSearchBoxProps) => {
  const { onLoadHandler, onPlacesChangedHandler } = useSearchBox({
    onPlaceChanged
  })

  return (
    <StandaloneSearchBox
      onLoad={onLoadHandler}
      onPlacesChanged={onPlacesChangedHandler}
    >
      <input
        css={css`
          box-sizing: border-box;
          display: block;
          width: 100%;
          height: 3000px;
          height: 46px;
          padding: 0 12px;
          text-overflow: ellipsis;
          background-color: red;
          border-radius: 8px;
          outline: none;
        `}
        placeholder="Search for a location"
        type="text"
      />
    </StandaloneSearchBox>
  )
}
