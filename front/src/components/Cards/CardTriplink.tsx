import Image from 'next/image'
import { Timestamp } from 'firebase/firestore'
import { styles } from '@/styles/components/Cards/CardTriplink.styles'
import { formatDate } from '@/utils/formats'

// 仮置きの型設定
type CardTriplinkProps = {
  isGrid: boolean
  data: {
    thumbnail: string
    date?: [Timestamp, Timestamp]
    title: string
  }
}

export const CardTriplink = ({ data, isGrid }: CardTriplinkProps) => {
  return (
    <div css={styles.wrapper}>
      <div css={[styles.imgWrapper(isGrid), isGrid && styles.imgSquare]}>
        <Image alt="" css={styles.img} fill src={data.thumbnail} />
      </div>
      <div css={styles.description(isGrid)}>
        <h2 css={styles.title(isGrid)}>{data.title}</h2>
        <p css={styles.date(isGrid)}>
          {data.date?.length === 2 &&
            `${formatDate(data.date[0])} - ${formatDate(data.date[1])}`}
        </p>
      </div>
    </div>
  )
}
