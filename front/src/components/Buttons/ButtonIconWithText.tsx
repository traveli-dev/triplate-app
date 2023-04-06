import {
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineShare,
  HiOutlinePencil,
  HiOutlineLockClosed
} from 'react-icons/hi'
import styles from '@/styles/components/Buttons/ButtonIconWithText.module.scss'

type ButtonIconWithTextProps = {
  iconType: 'members' | 'memo' | 'share' | 'edit' | 'public'
}

export const ButtonIconWithText = ({ iconType }: ButtonIconWithTextProps) => {
  return (
    <>
      <button className={styles.wrapper}>
        {iconType === 'members' && (
          <div>
            <HiOutlineUsers size={20} />
            <p>メンバー</p>
          </div>
        )}
        {iconType === 'memo' && (
          <div>
            <HiOutlineDocumentText size={20} />
            <p>たびメモ</p>
          </div>
        )}
        {iconType === 'share' && (
          <div>
            <HiOutlineShare size={20} />
            <p>共有する</p>
          </div>
        )}
        {iconType === 'edit' && (
          <div>
            <HiOutlinePencil size={20} />
            <p>編集する</p>
          </div>
        )}
        {iconType === 'public' && (
          <div>
            <HiOutlineLockClosed size={20} />
            <p>公開する</p>
          </div>
        )}
      </button>
    </>
  )
}
