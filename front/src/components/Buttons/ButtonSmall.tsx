import { ComponentPropsWithRef } from 'react'
import { IconType } from 'react-icons'
import { styles } from '@/styles/components/Buttons/ButtonSmall.styles'

type ButtonSmallProps = ComponentPropsWithRef<'button'> & {
  children: string
  Icon?: IconType
  isFit?: boolean
}

export const ButtonSmall = ({
  Icon,
  children,
  isFit = false,
  ...props
}: ButtonSmallProps) => {
  return (
    <button css={styles.button(isFit)} {...props}>
      <div css={styles.labelWrapper}>
        {Icon && <Icon css={styles.icon} size={20} />}
        {children}
      </div>
    </button>
  )
}
