import { useState } from 'react'
import { GoogleMap, MarkerF } from '@react-google-maps/api'
import { Header } from '@/components/Headers'
import { ModalConfirmAddress } from '@/components/Modals'
import { ModalSearchMap } from '@/components/Modals/ModalSearchMap'
import { useLoadMap } from '@/hooks/maps'
import { useDisclosure } from '@/hooks/modals'
import { useAppSelector } from '@/redux/rootStore'
import { mapSelectors } from '@/redux/stores'

const TripLinkEdit = () => {
  const { isLoaded, mapOptions, loadError } = useLoadMap()
  const [mapRef, setMapRef] = useState<google.maps.Map | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const currentCenter = useAppSelector(mapSelectors.currentCenter)

  // TODO: エラーハンドリング
  if (loadError) return <>エラーだよ</>

  return (
    <div>
      <Header href="/" title="GoogleMapから追加" />
      {isLoaded ? (
        <div>
          <GoogleMap
            center={currentCenter.location}
            mapContainerStyle={{
              width: '100%',
              height: 'calc(100vh - 56px)'
            }}
            options={mapOptions}
            zoom={16}
            onLoad={(map) => {
              setMapRef(map)
            }}
            onUnmount={() => {
              setMapRef(null)
            }}
          >
            <MarkerF position={currentCenter.location} />
          </GoogleMap>
          {mapRef && (
            <ModalSearchMap mapRef={mapRef} onOpenConfirmModal={onOpen} />
          )}
          <ModalConfirmAddress
            address={currentCenter.address}
            isOpen={isOpen}
            name={currentCenter.name}
            onClose={onClose}
          />
        </div>
      ) : (
        <>now load</>
      )}
    </div>
  )
}

export default TripLinkEdit
