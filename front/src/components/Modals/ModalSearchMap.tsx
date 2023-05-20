import { HiOutlineLocationMarker, HiOutlineSearch } from 'react-icons/hi'
import { useDisclosure, useHalfModal } from '@/hooks/modals'
import { useModalSearchMap } from '@/hooks/modals/'
import { styles } from '@/styles/components/Modals/ModalSearchMap.styles'

type ModalSearchMapProps = {
  mapRef: google.maps.Map
  onOpenConfirmModal: () => void
}

export const ModalSearchMap = ({
  mapRef,
  onOpenConfirmModal
}: ModalSearchMapProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const { ref } = useHalfModal(isOpen, onClose)
  const {
    onChangeHandler,
    onCompositionEndHandler,
    onCompositionStartHandler,
    predictions,
    onClickHandler
  } = useModalSearchMap(mapRef)

  return (
    <div>
      <div css={styles.overlay(isOpen)} />
      <div
        aria-modal="true"
        css={styles.content(isOpen)}
        ref={ref}
        role="dialog"
      >
        <div css={styles.inputWrapper}>
          <HiOutlineSearch css={styles.icon} size={24} />
          <input
            css={styles.input}
            placeholder="行き先で検索"
            type="text"
            onChange={(e) => {
              onChangeHandler(e)
              onOpen()
            }}
            onCompositionEnd={onCompositionEndHandler}
            onCompositionStart={onCompositionStartHandler}
          />
        </div>

        <div>
          <div css={styles.dataWrapper}>
            {predictions && predictions.length > 0 && (
              <>
                {predictions.map((item) => {
                  return (
                    <button
                      css={styles.addressItem}
                      key={item.place_id}
                      onClick={() => {
                        onClickHandler(item)
                        onClose()
                        onOpenConfirmModal()
                      }}
                    >
                      <div css={styles.markerWrapper}>
                        <HiOutlineLocationMarker
                          css={styles.marker}
                          size={24}
                        />
                      </div>
                      <p css={styles.address}>{item.description}</p>
                    </button>
                  )
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
