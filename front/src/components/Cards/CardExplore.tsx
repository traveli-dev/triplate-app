import Image from 'next/image'
import { ExploreType } from '@/redux/services/firestore/explores'
import { styles } from '@/styles/components/Cards/CardExplore.styles'

type CardExploreProps = {
  data: ExploreType
}

export const CardExplore = ({ data }: CardExploreProps) => {
  return (
    <div css={styles.wrapper}>
      <Image alt="" css={styles.card} fill src={data.thumbnail} />
      <div css={styles.textWrapper}>
        <div css={styles.title}>{data.title}</div>
        <div css={styles.day}>{data.day}</div>
        <div css={styles.keywords}>{data.keywords}</div>
      </div>
    </div>
  )
}
