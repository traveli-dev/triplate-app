import Image from 'next/image'
import Link from 'next/link'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
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
        <Link href="/" css={styles.wrapper} className="wrapper">
          <div css={styles.imgWrapper}>
            <Image src={travelink.thumbnail} alt="img" fill css={styles.img} />
          </div>
          <div css={styles.content}>
            <p css={styles.title}>{travelink.title}</p>
            <p css={styles.day}>
              {travelink.date[0]} - {travelink.date[1]}
            </p>
            <ExtendAvaterWithText
              url={travelink.thumbnail}
              name={travelink.ownerName}
            />
          </div>
        </Link>
      )}
      {favorite && (
        <Link href="/" css={styles.wrapper}>
          <div css={styles.imgWrapper}>
            <Image src={favorite.thumbnail} alt="img" fill css={styles.img} />
          </div>
          <div css={styles.content}>
            <p css={styles.title}>{favorite.title}</p>
            <ExtendChipTag tag={favorite.tag} />
          </div>
        </Link>
      )}
    </>
  )
}

const ExtendAvaterWithText = styled(AvatarWithText)`
  margin: 8px 0;
`

const ExtendChipTag = styled(ChipTag)`
  margin: 8px 0;
`

const styles = {
  wrapper: css`
    display: block;
    text-decoration: none;
    color: ${theme.color.black};
    background-color: ${theme.color.white};
    width: 100%;
    height: auto;
    border-radius: 16px;
    z-index: 1;
    border: 1px solid ${theme.color.outlineGray};
  `,
  imgWrapper: css`
    width: 100%;
    height: 136px;
    border-radius: 16px 16px 0 0;
    z-index: 1;
    overflow: hidden;
  `,
  img: css`
    position: relative !important;
    object-fit: cover;
    transition: all 0.3s 0s ease;
    .wrapper:hover & {
      opacity: 0.9;
    }
  `,
  content: css`
    background-color: ${theme.color.white};
    border-radius: 0 0 16px 16px;
    padding: 10px 16px;
    transition: all 0.3s 0s ease;
    .wrapper:hover & {
      opacity: 0.9;
    }
  `,
  title: css`
    font-size: ${theme.fontSize.md};
    font-weight: 600;
    margin: 0;
  `,
  day: css`
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.gray};
    margin: 8px 0 0 0;
  `
}
