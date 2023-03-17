import { IconWithText } from '@/components/Icons'
import styles from '@/styles/components/Grids/GridIconWithText.module.scss'

export const GridIconWithText = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <IconWithText icon={'qr'} />
        <IconWithText icon={'help'} />
        <IconWithText icon={'twitter'} />
      </div>
      <div className={styles.column}>
        <IconWithText icon={'bell'} />
        <IconWithText icon={'mail'} />
        <IconWithText icon={'hp'} />
      </div>
      <div className={styles.column}>
        <IconWithText icon={'setting'} />
        <IconWithText icon={'privacy'} />
      </div>
    </div>
  )
}
