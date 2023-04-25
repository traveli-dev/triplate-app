import { BaseHalfModal } from '@/components/Modals'
import { styles } from '@/styles/components/Modals/ModalQr.styles'

type ModalQrProps = {
  isOpen: boolean
  onClose: () => void
}

export const ModalQr = ({ isOpen, onClose }: ModalQrProps) => {
  return (
    <BaseHalfModal isOpen={isOpen} title="招待用QRコード" onClose={onClose}>
      <div css={styles.layoutLinkItem}>
        <p css={styles.text}>QRコードを読み取ってください</p>
      </div>
    </BaseHalfModal>
  )
}
