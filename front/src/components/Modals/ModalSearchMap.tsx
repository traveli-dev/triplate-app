import Image from 'next/image'
import { HiOutlineSearch } from 'react-icons/hi'
import { useDisclosure, useHalfModal } from '@/hooks/modals'
import { useModalSearchMap } from '@/hooks/modals/'
import { styles } from '@/styles/components/Modals/ModalSearchMap.styles'

type ModalSearchMapProps = {
  mapRef: google.maps.Map
}

export const ModalSearchMap = ({ mapRef }: ModalSearchMapProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
                        onClickHandler(item, onClose)
                      }}
                    >
                      <Image
                        alt=""
                        css={styles.marker}
                        height={48}
                        src="/mapIcon/marker.svg"
                        width={48}
                      />
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
