import { HiOutlineInformationCircle } from 'react-icons/hi'
import { LinkIconWithTextHorizontal } from '@/components/Links'
import { BaseHalfModal } from '@/components/Modals'
import { styles } from '@/styles/components/Modals/ModalEdit.styles'

type ModalQrProps = {
  isOpen: boolean
  onClose: () => void
}

export const ModalQr = ({ isOpen, onClose }: ModalQrProps) => {
  return (
    <BaseHalfModal isOpen={isOpen} title="招待用QRコード" onClose={onClose}>
      <div css={styles.layoutLinkItem}>
        <LinkIconWithTextHorizontal
          Icon={HiOutlineInformationCircle}
          href="/"
          title="基本情報を編集"
        />
      </div>
    </BaseHalfModal>
  )
}
