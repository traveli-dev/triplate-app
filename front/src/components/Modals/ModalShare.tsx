import { HiOutlineLink, HiOutlineUpload, HiOutlineQrcode } from 'react-icons/hi'
import { ButtonIconWIthTextHorizontal } from '@/components/Buttons'
import { ModalQr } from '@/components/Modals'
import { BaseHalfModal } from '@/components/Modals'
import { useDisclosure } from '@/hooks/modals'
import { styles } from '@/styles/components/Modals/ModalShare.styles'

type ModalShareProps = {
  isOpen: boolean
  onClose: () => void
}

export const ModalShare = ({ isOpen, onClose }: ModalShareProps) => {
  const {
    isOpen: qrIsOpen,
    onClose: qrOnClose,
    onOpen: qrOnOpen
  } = useDisclosure()

  return (
    <>
      <BaseHalfModal isOpen={isOpen} title="共有する" onClose={onClose}>
        <div css={styles.layoutLinkItem}>
          {/* TODO:URLをコピーする機能をonClickに渡す */}
          <ButtonIconWIthTextHorizontal
            Icon={HiOutlineLink}
            title="URLをコピー"
            onClick={onClose}
          />
        </div>
        <div css={styles.layoutLinkItem}>
          <ButtonIconWIthTextHorizontal
            Icon={HiOutlineQrcode}
            title="QRコードを表示"
            onClick={() => {
              onClose()
              qrOnOpen()
            }}
          />
        </div>
        <div css={styles.layoutLinkItem}>
          {/* TODO:端末のデフォルトのシェアモーダルを呼び出す機能をonClickに渡す */}
          <ButtonIconWIthTextHorizontal
            Icon={HiOutlineUpload}
            title="その他"
            onClick={onClose}
          />
        </div>
      </BaseHalfModal>
      <ModalQr isOpen={qrIsOpen} onClose={qrOnClose} />
    </>
  )
}
