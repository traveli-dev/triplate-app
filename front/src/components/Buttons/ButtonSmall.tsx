import { ButtonHTMLAttributes } from 'react'
import styles from '@/styles/components/Buttons/ButtonSmall.module.scss'
import {
  HiOutlineShare,
  HiOutlineHeart,
  HiOutlineDuplicate
} from 'react-icons/hi'
type ButtonSmallProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string
  icon: 'share' | 'heart' | 'copy'
}

export const ButtonSmall = ({ icon, children }: ButtonSmallProps) => {
  return (
    <button className={styles.button}>
      <div className={styles.label_wrapper}>
        {icon == 'share' && <HiOutlineShare size={20} />}
        {icon == 'heart' && <HiOutlineHeart size={20} />}
        {icon == 'copy' && <HiOutlineDuplicate size={20} />}
        {icon == 'heart' ? (
          <span id={'bold'}>{children}</span>
        ) : (
          <span>{children}</span>
        )}
      </div>
    </button>
  )
}
