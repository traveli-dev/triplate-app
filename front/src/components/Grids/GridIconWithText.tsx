import { IconWithText } from '@/components/Icons'
import styles from '@/styles/components/Grids/GridIconWithText.module.scss'

export const GridIconWithText = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <IconWithText icon={'qr'} />
        <IconWithText icon={'bell'} />
        <IconWithText icon={'setting'} />
      </div>
      <div className={styles.row}>
        <IconWithText icon={'help'} />
        <IconWithText icon={'mail'} />
        <IconWithText icon={'privacy'} />
      </div>
      <div className={styles.row}>
        <IconWithText icon={'twitter'} />
        <IconWithText icon={'hp'} />
      </div>
    </div>
  )
}
