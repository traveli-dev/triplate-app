import Image from 'next/image'
import Link from 'next/link'
import { css } from '@emotion/react'
import { AvatarWithText } from '@/components/Avatars'
import { ChipTag } from '@/components/Chips'
import type {
  FavoriteDataType,
  TravelinkDataType
} from '@/components/Tabs/TabHome'
import { theme } from '@/styles/theme'

// 仮置きの型設定
type CardTravelinkProps = {
  travelink?: TravelinkDataType
  favorite?: FavoriteDataType
}

export const CardTravelink = ({ travelink, favorite }: CardTravelinkProps) => {
  return (
    <>
      {travelink && (
        <Link className="wrapper" css={styles.wrapper} href="/">
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

const styles = {
  wrapper: css`
    z-index: 1;
    display: block;
    width: 100%;
    height: auto;
    color: ${theme.color.black};
    text-decoration: none;
    background-color: ${theme.color.white};
    border: 1px solid ${theme.color.outlineGray};
    border-radius: 16px;
  `,
  imgWrapper: css`
    z-index: 1;
    width: 100%;
    height: 136px;
    overflow: hidden;
    border-radius: 16px 16px 0 0;
  `,
  img: css`
    position: relative !important;
    object-fit: cover;
    transition: all 0.3s 0s ease;
    .wrapper:hover &,
    .wrapper:focus & {
      opacity: 0.9;
    }
  `,
  content: css`
    padding: 10px 16px;
    background-color: ${theme.color.white};
    border-radius: 0 0 16px 16px;
    transition: all 0.3s 0s ease;
    .wrapper:hover &,
    .wrapper:focus & {
      opacity: 0.9;
    }
  `,
  title: css`
    margin: 0;
    font-size: ${theme.fontSize.md};
    font-weight: 600;
  `,
  day: css`
    margin: 8px 0 0 0;
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.gray};
  `,
  layoutAvatarWithText: css`
    margin: 8px 0;
  `,
  layoutChipTag: css`
    margin: 8px 0;
  `
}
