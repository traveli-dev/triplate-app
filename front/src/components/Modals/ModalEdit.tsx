import {
  HiOutlineInformationCircle,
  HiOutlineClipboardList
} from 'react-icons/hi'
import { LinkItemWithIcon } from '@/components/Links'
import { BaseHalfModal } from '@/components/Modals'
import { styles } from '@/styles/components/Modals/ModalEdit.styles'

type ModalEditProps = {
  isOpen: boolean
  onClose: () => void
}

export const ModalEdit = ({ isOpen, onClose }: ModalEditProps) => {
  return (
    <BaseHalfModal isOpen={isOpen} title="編集する" onClose={onClose}>
      <div css={styles.layoutLinkItem}>
        <LinkItemWithIcon
          Icon={HiOutlineInformationCircle}
          href="/"
          title="基本情報を編集"
        />
      </div>
      <div css={styles.layoutLinkItem}>
        <LinkItemWithIcon
          Icon={HiOutlineClipboardList}
          href="/"
          title="旅程を編集"
        />
      </div>
    </BaseHalfModal>
  )
}
