import { ButtonHTMLAttributes } from 'react'
import {
  HiOutlineShare,
  HiOutlineHeart,
  HiOutlineDuplicate
} from 'react-icons/hi'
import { styles } from '@/styles/components/Buttons/ButtonSmall.styles'

type ButtonSmallProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string
  icon: 'share' | 'heart' | 'copy'
}

export const ButtonSmall = ({ icon, children, ...props }: ButtonSmallProps) => {
  return (
    <button css={styles.button} {...props}>
      <div css={styles.label_wrapper}>
        {icon == 'share' && <HiOutlineShare size={20} />}
        {icon == 'heart' && <HiOutlineHeart size={20} />}
        {icon == 'copy' && <HiOutlineDuplicate size={20} />}
        {icon == 'heart' ? (
          <span id="bold">{children}</span>
        ) : (
          <span>{children}</span>
        )}
      </div>
    </button>
  )
}
