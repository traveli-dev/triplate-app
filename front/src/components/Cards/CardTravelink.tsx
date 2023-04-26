import Image from 'next/image'
import { styles } from '@/styles/components/Cards/CardTravelink.styles'

// 仮置きの型設定
type CardTravelinkProps = {
  isSquare: boolean
  data: {
    thumbnail: string
    date?: [string, string]
    title: string
  }
}

export const CardTravelink = ({ data, isSquare }: CardTravelinkProps) => {
  return (
    <div css={styles.wrapper}>
      <div css={[styles.imgWrapper(isSquare), isSquare && styles.imgSquare]}>
        <Image alt="" css={styles.img} fill src={data.thumbnail} />
      </div>
      <div css={styles.description(isSquare)}>
        <h2 css={styles.title(isSquare)}>{data.title}</h2>
        <p css={styles.date(isSquare)}>{data.date}</p>
      </div>
    </div>
  )
}
