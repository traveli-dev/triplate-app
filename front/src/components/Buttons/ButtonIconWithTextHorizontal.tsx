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
      <div css={styles.icon}>
        <Icon size={32} />
      </div>
      <p css={styles.title}>{title}</p>
    </button>
  )
}
