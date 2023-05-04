import { GoogleMap, MarkerF } from '@react-google-maps/api'
import { Header } from '@/components/Headers'
import { ModalSearchMap } from '@/components/Modals/ModalSearchMap'
import { useLoadMap } from '@/hooks/maps'
import { useSearchBox } from '@/hooks/maps'

const TripLinkEdit = () => {
  const { isLoaded, mapOptions, loadError } = useLoadMap({
    libraries: ['geometry', 'places']
  })
  const { placeDetails, onLoadHandler, onPlacesChangedHandler } = useSearchBox()

  // TODO: エラーハンドリング
  if (loadError) return <>エラーだよ</>

  return (
    <div>
      <Header href="/" title="GoogleMapから追加" />
      {isLoaded ? (
        <div>
          <GoogleMap
            center={placeDetails.location}
            mapContainerStyle={{
              width: '100%',
              height: '100vh'
            }}
            options={mapOptions}
            zoom={16}
          >
            <MarkerF position={placeDetails.location} />
          </GoogleMap>
          <ModalSearchMap
            onLoad={onLoadHandler}
            onPlacesChanged={onPlacesChangedHandler}
          />
        </div>
      ) : (
        <>now load</>
      )}
    </div>
  )
}

export default TripLinkEdit
