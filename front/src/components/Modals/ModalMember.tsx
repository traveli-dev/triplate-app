import { HiOutlineLink, HiOutlineQrcode } from 'react-icons/hi'
import { AvatarWithText } from '@/components/Avatars'
import { ButtonIconWIthTextHorizontal } from '@/components/Buttons'
import { ChipTag } from '@/components/Chips'
import { FormAuthority } from '@/components/Forms'
import { BaseHalfModal, ModalQr } from '@/components/Modals'
import { useDisclosure } from '@/hooks/modals'
import { styles } from '@/styles/components/Modals/ModalMember.styles'

type ModalMemberProps = {
  isOpen: boolean
  onClose: () => void
}

export const ModalMember = ({ isOpen, onClose }: ModalMemberProps) => {
  const {
    isOpen: qrIsOpen,
    onClose: qrOnClose,
    onOpen: qrOnOpen
  } = useDisclosure()

  const sample = [
    {
      name: 'みゆう',
      url: '/images/user_sample.jpeg',
      isOwner: true,
      canEdit: true
    },
    {
      name: 'だいき',
      url: '/images/user_sample.jpeg',
      isOwner: false,
      canEdit: false
    },
    {
      name: 'ぶっきー',
      url: '/images/user_sample.jpeg',
      isOwner: false,
      canEdit: true
    }
  ]

  return (
    <>
      <BaseHalfModal isOpen={isOpen} title="共有する" onClose={onClose}>
        {sample.map((user, index) => (
          <div css={styles.layoutLinkItem} key={index}>
            <AvatarWithText
              avatarSize="md"
              fontSize="md"
              name={user.name}
              url={user.url}
            />
            {user.isOwner && <ChipTag fontSize="sm" isRound tag="作成者" />}
            <FormAuthority canEdit={user.canEdit} />
          </div>
        ))}

        <h1 css={styles.title}>新しく招待する</h1>
        <div css={styles.layoutLinkItem}>
          {/* TODO:URLをコピーする機能をonClickに渡す */}
          <ButtonIconWIthTextHorizontal
            Icon={HiOutlineLink}
            title="URLで招待"
            onClick={onClose}
          />
        </div>
        <div css={styles.layoutLinkItem}>
          <ButtonIconWIthTextHorizontal
            Icon={HiOutlineQrcode}
            title="QRコードを招待"
            onClick={() => {
              onClose()
              qrOnOpen()
            }}
          />
        </div>
      </BaseHalfModal>
      <ModalQr isOpen={qrIsOpen} onClose={qrOnClose} />
    </>
  )
}
