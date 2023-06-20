import Image from 'next/image'
import { TriplateType } from '@/redux/services/firestore'
import { styles } from '@/styles/components/Cards/CardTriplate.styles'

type CardTriplateProps = {
  data: TriplateType
  isSquare?: boolean
}

export const CardTriplate = ({ data, isSquare = false }: CardTriplateProps) => {
  return (
    <div css={styles.wrapper(isSquare)}>
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
