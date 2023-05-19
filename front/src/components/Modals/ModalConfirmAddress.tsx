import { ButtonFill } from '@/components/Buttons'
import { BaseHalfModal } from '@/components/Modals'
import { styles } from '@/styles/components/Modals/ModalConfirmAddress.styles'

type ModalConfirmAddressProps = {
  isOpen: boolean
  name: string
  address: string
  onClose: () => void
}

export const ModalConfirmAddress = ({
  address,
  name,
  ...props
}: ModalConfirmAddressProps) => {
  return (
    <BaseHalfModal
      isBlur={false}
      title={name}
      usage="confirm-address"
      {...props}
    >
      <p css={styles.address}>{address}</p>
      <div css={styles.layoutButton}>
        <ButtonFill>旅程に追加する</ButtonFill>
      </div>
    </BaseHalfModal>
  )
}
