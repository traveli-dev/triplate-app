import { StandaloneSearchBox } from '@react-google-maps/api'
import { HiOutlineSearch } from 'react-icons/hi'
import { useModalSearchMap } from '@/hooks/modals/useModalSearchMap'
import { styles } from '@/styles/components/Modals/ModalSearchMap.styles'

type ModalSearchMapProps = {
  onLoad: (ref: google.maps.places.SearchBox) => void
  onPlacesChanged: () => void
}

export const ModalSearchMap = ({
  onLoad,
  onPlacesChanged
}: ModalSearchMapProps) => {
  const { isOpen, onOpen, onClose, ref } = useModalSearchMap()

  return (
    <div>
      <div css={styles.overlay(isOpen)} />
      <div
        aria-modal="true"
        css={styles.content(isOpen)}
        ref={ref}
        role="dialog"
      >
        <StandaloneSearchBox
          onLoad={onLoad}
          onPlacesChanged={() => {
            onPlacesChanged()
            onClose()
          }}
        >
          <div css={styles.inputWrapper}>
            <HiOutlineSearch css={styles.icon} size={24} />
            <input
              css={styles.input}
              placeholder="行き先で検索"
              type="text"
              onChange={onOpen}
            />
          </div>
        </StandaloneSearchBox>
      </div>
    </div>
  )
}
