import Image from 'next/image'
import { styles } from '@/styles/components/Cards/CardTripLink.styles'

// 仮置きの型設定
type CardTripLinkProps = {
  isGrid: boolean
  data: {
    thumbnail: string
    date?: [string, string]
    title: string
  }
}

export const CardTripLink = ({ data, isGrid }: CardTripLinkProps) => {
  return (
    <div css={styles.wrapper}>
      <div css={[styles.imgWrapper(isGrid), isGrid && styles.imgSquare]}>
        <Image alt="" css={styles.img} fill src={data.thumbnail} />
      </div>
      <div css={styles.description(isGrid)}>
        <h2 css={styles.title(isGrid)}>{data.title}</h2>
        <p css={styles.date(isGrid)}>{data.date}</p>
      </div>
    </div>
  )
}
