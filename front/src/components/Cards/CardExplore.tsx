import Image from 'next/image'
import { TriplateMemoryType } from '@/redux/services/firestore'
import { styles } from '@/styles/components/Cards/CardExplore.styles'

type CardExploreProps = {
  data: TriplateMemoryType
}

export const CardExplore = ({ data }: CardExploreProps) => {
  return (
    <div css={styles.wrapper}>
      <div css={styles.blendGradation}>
        <Image alt="" css={styles.card} fill src={data.thumbnail} />
      </div>
      <div css={styles.textWrapper}>
        <div css={styles.title}>{data.title}</div>
        <div css={styles.day}>{data.day}</div>
        <div css={styles.keywords}>{data.keywords.join('/')}</div>
      </div>
    </div>
  )
}
