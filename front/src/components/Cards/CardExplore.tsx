import Image from 'next/image'
import { Timestamp } from 'firebase/firestore'
import { styles } from '@/styles/components/Cards/CardExplore.styles'
import { calcStayDuration } from '@/utils/dates'

type CardExploreProps = {
  thumbnail: string
  title: string
  date: [Timestamp, Timestamp]
  tags: string[] | null
}

export const CardExplore = ({
  thumbnail,
  title,
  date,
  tags
}: CardExploreProps) => {
  return (
    <div css={styles.wrapper}>
      <div css={styles.blendGradation}>
        <Image alt="" css={styles.card} fill src={thumbnail} />
      </div>
      <div css={styles.textWrapper}>
        <div css={styles.title}>{title}</div>
        <div css={styles.day}>{calcStayDuration(date)}</div>
        {tags && <div css={styles.keywords}>{tags.join('/')}</div>}
      </div>
    </div>
  )
}
