import { useRouter } from 'next/router'
import {
  HiOutlineLocationMarker,
  HiOutlineSearch,
  HiOutlineLink
} from 'react-icons/hi'
import { ButtonIconWIthTextHorizontal } from '@/components/Buttons'
import { BaseHalfModal } from '@/components/Modals'
import { styles } from '@/styles/components/Modals/ModalAddPlace.styles'

type ModalAddPlaceProps = {
  isOpen: boolean
  onClose: () => void
}

export const ModalAddPlace = (props: ModalAddPlaceProps) => {
  const router = useRouter()
  const { triplinkId } = router.query

  return (
    <BaseHalfModal title="行き先を追加" usage="add-place" {...props}>
      <div css={styles.layoutLinkItem}>
        <ButtonIconWIthTextHorizontal
          Icon={HiOutlineLocationMarker}
          title="GoogleMapから追加"
          onClick={() => router.push(`/triplink/${triplinkId}/edit/search`)}
        />
      </div>
      <div css={styles.layoutLinkItem}>
        <ButtonIconWIthTextHorizontal
          Icon={HiOutlineSearch}
          title="ウェブ検索から追加"
          onClick={() => {
            router.push('/')
          }}
        />
      </div>
      <div css={styles.layoutLinkItem}>
        <ButtonIconWIthTextHorizontal
          Icon={HiOutlineLink}
          title="手動で追加"
          onClick={() => {
            router.push('')
          }}
        />
      </div>
    </BaseHalfModal>
  )
}
