import { ComponentPropsWithRef } from 'react'
import {
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineShare,
  HiOutlinePencil,
  HiOutlineLockClosed
} from 'react-icons/hi'
import { styles } from '@/styles/components/Buttons/ButtonIconWithText.styles'

type ButtonIconWithTextProps = ComponentPropsWithRef<'button'> & {
  iconType: 'members' | 'memo' | 'share' | 'edit' | 'public'
}

export const ButtonIconWithText = ({
  iconType,
  ...props
}: ButtonIconWithTextProps) => {
  return (
    <button css={styles.wrapper} {...props}>
      {iconType === 'members' && (
        <>
          <HiOutlineUsers size={20} />
          <span>メンバー</span>
        </>
      )}
      {iconType === 'memo' && (
        <>
          <HiOutlineDocumentText size={20} />
          <span>たびメモ</span>
        </>
      )}
      {iconType === 'share' && (
        <>
          <HiOutlineShare size={20} />
          <span>共有する</span>
        </>
      )}
      {iconType === 'edit' && (
        <>
          <HiOutlinePencil size={20} />
          <span>編集する</span>
        </>
      )}
      {iconType === 'public' && (
        <>
          <HiOutlineLockClosed size={20} />
          <span>公開する</span>
        </>
      )}
    </button>
  )
}
