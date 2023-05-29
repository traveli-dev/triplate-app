import { useRouter } from 'next/router'
import {
  HiOutlineInformationCircle,
  HiOutlineClipboardList
} from 'react-icons/hi'
import { LinkIconWithTextHorizontal } from '@/components/Links'
import { BaseHalfModal } from '@/components/Modals'
import { styles } from '@/styles/components/Modals/ModalEdit.styles'

type ModalEditProps = {
  isOpen: boolean
  onClose: () => void
}

export const ModalEdit = ({ isOpen, onClose }: ModalEditProps) => {
  const router = useRouter()
  const { triplinkId } = router.query

  return (
    <BaseHalfModal
      isOpen={isOpen}
      title="編集する"
      usage="edit"
      onClose={onClose}
    >
      <div css={styles.layoutLinkItem}>
        <LinkIconWithTextHorizontal
          Icon={HiOutlineClipboardList}
          href={`/triplink/${triplinkId}/edit`}
          title="旅程を編集"
        />
      </div>
      <div css={styles.layoutLinkItem}>
        <LinkIconWithTextHorizontal
          Icon={HiOutlineInformationCircle}
          href={`/triplink/${triplinkId}/edit/settings`}
          title="基本情報を編集"
        />
      </div>
    </BaseHalfModal>
  )
}
