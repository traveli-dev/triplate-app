import { BaseHalfModal } from '@/components/Modals'

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
      {address}
    </BaseHalfModal>
  )
}
