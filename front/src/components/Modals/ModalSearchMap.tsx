import { StandaloneSearchBox } from '@react-google-maps/api'
import { HiOutlineSearch } from 'react-icons/hi'
import { useDisclosure } from '@/hooks/modals'
import { styles } from '@/styles/components/Modals/ModalSearchMap.styles'

type ModalSearchMapProps = {
  onLoad: (ref: google.maps.places.SearchBox) => void
  onPlacesChanged: () => void
}

export const ModalSearchMap = ({
  onLoad,
  onPlacesChanged
}: ModalSearchMapProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <div css={styles.content(isOpen)}>
        <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
          <div css={styles.inputWrapper}>
            <HiOutlineSearch css={styles.icon} size={24} />
            <input
              css={styles.input}
              placeholder="行き先で検索"
              type="text"
              onBlur={onClose}
              onFocus={onOpen}
              onKeyDown={(e) => e.key === 'Enter' && onClose()}
            />
          </div>
        </StandaloneSearchBox>
      </div>
    </div>
  )
}
