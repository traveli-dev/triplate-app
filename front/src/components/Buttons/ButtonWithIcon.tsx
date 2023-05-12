import { ButtonHTMLAttributes } from 'react'
import { HiOutlineLink } from 'react-icons/hi'
import { styles } from '@/styles/components/Buttons/ButtonWithIcon.styles'

type ButtonWithIconProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string
  icon: 'link'
}

export const ButtonWithIcon = ({
  icon,
  children,
  ...props
}: ButtonWithIconProps) => {
  return (
    <button css={styles.button} {...props}>
      <div css={styles.label_wrapper}>
        {icon == 'link' && <HiOutlineLink size={18} />}
        <span>{children}</span>
      </div>
    </button>
  )
}
