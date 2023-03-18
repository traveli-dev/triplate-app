import { IconWithText } from '@/components/Icons'
import styles from '@/styles/components/Grids/GridIconWithText.module.scss'

export const GridIconWithText = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <IconWithText iconType="qr" />
        <IconWithText iconType="help" />
        <IconWithText iconType="twitter" />
      </div>
      <div className={styles.column}>
        <IconWithText iconType="bell" />
        <IconWithText iconType="mail" />
        <IconWithText iconType="hp" />
      </div>
      <div className={styles.column}>
        <IconWithText iconType="setting" />
        <IconWithText iconType="privacy" />
      </div>
    </div>
  )
}
