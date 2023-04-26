import { IconType } from 'react-icons'
import { styles } from '@/styles/components/Buttons/ButtonIconWithTextHorizontal.styles'

type ButtonIconWIthTextHorizontalProps = {
  onClick: () => void
  Icon: IconType
  title: string
}

export const ButtonIconWIthTextHorizontal = ({
  Icon,
  title,
  onClick
}: ButtonIconWIthTextHorizontalProps) => {
  return (
    <button css={styles.button} onClick={onClick}>
      <span css={styles.icon}>
        <Icon size={32} />
      </span>
      <span css={styles.title}>{title}</span>
    </button>
  )
}
