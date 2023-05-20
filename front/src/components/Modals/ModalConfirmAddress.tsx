import { useRouter } from 'next/router'
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
  const router = useRouter()
  const { triplinkId } = router.query

  return (
    <BaseHalfModal
      isBlur={false}
      title={name}
      usage="confirm-address"
      {...props}
    >
      <p css={styles.address}>{address}</p>
      <div css={styles.layoutButton}>
        <ButtonFill
          onClick={() => {
            router.push(`/triplink/${triplinkId}/edit`)
          }}
        >
          旅程に追加する
        </ButtonFill>
      </div>
    </BaseHalfModal>
  )
}
