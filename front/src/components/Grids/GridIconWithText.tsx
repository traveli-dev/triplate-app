import { IconWithText } from '@/components/Icons'
import { styles } from '@/styles/components/Grids/GridIconWithText.styles'

export const GridIconWithText = () => {
  return (
    <div css={styles.wrapper}>
      <div css={styles.column}>
        <IconWithText iconType="qr" />
        <IconWithText iconType="help" />
        <IconWithText iconType="twitter" />
      </div>
      <div css={styles.column}>
        <IconWithText iconType="bell" />
        <IconWithText iconType="mail" />
        <IconWithText iconType="hp" />
      </div>
      <div css={styles.column}>
        <IconWithText iconType="setting" />
        <IconWithText iconType="privacy" />
      </div>
    </div>
  )
}
