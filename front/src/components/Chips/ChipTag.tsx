import styles from '@/styles/components/Chips/ChipTag.module.scss'

type ChipTagProps = {
  tag: string[]
}

export const ChipTag = ({ tag }: ChipTagProps) => {
  return (
    <ul className={styles.chip_wrapper}>
      {tag.map((value, index) => (
        <li key={index}>
          <p className={styles.chip}>{value}</p>
        </li>
      ))}
    </ul>
  )
}
