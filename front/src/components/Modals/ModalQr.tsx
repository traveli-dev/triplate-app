import { BaseHalfModal } from '@/components/Modals'
import { styles } from '@/styles/components/Modals/ModalQr.styles'

type ModalQrProps = {
  isOpen: boolean
  onClose: () => void
  usage: 'invite' | 'share'
}

export const ModalQr = ({ isOpen, onClose, usage }: ModalQrProps) => {
  return (
    <BaseHalfModal
      isOpen={isOpen}
      title={`${usage === 'invite' ? '招待' : '共有'}用QRコード`}
      usage={`qr-${usage}`}
      onClose={onClose}
    >
      <div css={styles.layoutLinkItem}>
        <p css={styles.text}>QRコードを読み取ってください</p>
      </div>
    </BaseHalfModal>
  )
}
