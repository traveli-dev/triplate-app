import Image from 'next/image'
import Link from 'next/link'
import { AvatarWithText } from '@/components/Avatars'
import { ChipTag } from '@/components/Chips'
import type {
  FavoriteDataType,
  TravelinkDataType
} from '@/components/Tabs/TabHome'
import styles from '@/styles/components/Cards/CardTravelink.module.scss'

// 仮置きの型設定
type CardTravelinkProps = {
  travelink?: TravelinkDataType
  favorite?: FavoriteDataType
}

export const CardTravelink = ({ travelink, favorite }: CardTravelinkProps) => {
  return (
    <>
      {travelink && (
        <Link href="/" className={styles.wrapper}>
          <div className={styles.img_wrapper}>
            <Image
              src={travelink.thumbnail}
              alt="img"
              fill
              className={styles.img}
            />
          </div>
          <div className={styles.content}>
            <p className={styles.title}>{travelink.title}</p>
            <p className={styles.day}>
              {travelink.date[0]} - {travelink.date[1]}
            </p>
            <AvatarWithText
              url={travelink.thumbnail}
              name={travelink.ownerName}
            />
          </div>
        </Link>
      )}
      {favorite && (
        <Link href="/" className={styles.wrapper}>
          <div className={styles.img_wrapper}>
            <Image
              src={favorite.thumbnail}
              alt="img"
              fill
              className={styles.img}
            />
          </div>
          <div className={styles.content}>
            <p className={styles.title}>{favorite.title}</p>
            <ChipTag tag={favorite.tag} />
          </div>
        </Link>
      )}
    </>
  )
}
