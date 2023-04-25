import { HiOutlineLink, HiOutlineUpload, HiOutlineQrcode } from 'react-icons/hi'
import { LinkIconWithTextHorizontal } from '@/components/Links'
import { BaseHalfModal } from '@/components/Modals'
import { styles } from '@/styles/components/Modals/ModalShare.styles'

type ModalMemberProps = {
  isOpen: boolean
  onClose: () => void
}

export const ModalMember = ({ isOpen, onClose }: ModalMemberProps) => {
  return (
    <BaseHalfModal isOpen={isOpen} title="共有する" onClose={onClose}>
      <div css={styles.layoutLinkItem}>
        <LinkIconWithTextHorizontal
          Icon={HiOutlineLink}
          href="/"
          title="URLをコピー"
        />
      </div>
      <div css={styles.layoutLinkItem}>
        <LinkIconWithTextHorizontal
          Icon={HiOutlineQrcode}
          href="/"
          // onClick={}
          title="QRコードを表示"
        />
      </div>
      <div css={styles.layoutLinkItem}>
        <LinkIconWithTextHorizontal
          Icon={HiOutlineUpload}
          href="/"
          title="その他"
        />
      </div>
    </BaseHalfModal>
  )
}
