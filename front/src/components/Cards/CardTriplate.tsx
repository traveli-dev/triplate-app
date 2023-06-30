import Image from 'next/image'
import { Timestamp } from 'firebase/firestore'
import { styles } from '@/styles/components/Cards/CardTriplate.styles'
import { calcStayDuration } from '@/utils/dates'

type CardTriplateProps = {
  thumbnail: string
  title: string
  date: [Timestamp, Timestamp]
  tags: string[] | null
  isSquare?: boolean
}

export const CardTriplate = ({
  thumbnail,
  title,
  date,
  tags,
  isSquare = false
}: CardTriplateProps) => {
  return (
    <div css={styles.wrapper(isSquare)}>
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
