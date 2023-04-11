import Image from 'next/image'
import Link from 'next/link'
import { AvatarWithText } from '@/components/Avatars'
import { ChipTag } from '@/components/Chips'
import type {
  FavoriteDataType,
  TravelinkDataType
} from '@/components/Tabs/TabHome'
import { styles } from '@/styles/components/Cards/CardTravelink.styles'

// 仮置きの型設定
type CardTravelinkProps = {
  travelink?: TravelinkDataType
  favorite?: FavoriteDataType
}

export const CardTravelink = ({ travelink, favorite }: CardTravelinkProps) => {
  return (
    <>
      {travelink && (
        <Link css={styles.wrapper} href="/">
          <div css={styles.imgWrapper}>
            <Image alt="img" css={styles.img} fill src={travelink.thumbnail} />
          </div>
          <div css={styles.content}>
            <p css={styles.title}>{travelink.title}</p>
            <p css={styles.day}>
              {travelink.date[0]} - {travelink.date[1]}
            </p>
            <div css={styles.layoutAvatarWithText}>
              <AvatarWithText
                name={travelink.ownerName}
                url={travelink.thumbnail}
              />
            </div>
          </div>
        </Link>
      )}
      {favorite && (
        <Link css={styles.wrapper} href="/">
          <div css={styles.imgWrapper}>
            <Image alt="img" css={styles.img} fill src={favorite.thumbnail} />
          </div>
          <div css={styles.content}>
            <p css={styles.title}>{favorite.title}</p>
            <div css={styles.layoutChipTag}>
              <ChipTag css={styles.layoutChipTag} tag={favorite.tag} />
            </div>
          </div>
        </Link>
      )}
    </>
  )
}
