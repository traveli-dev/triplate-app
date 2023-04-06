import { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { CardTravelink } from '@/components/Cards'
import { theme } from '@/styles/theme'

// 仮置きの型設定
// TODO:本実装のタイミングでtypeの内容とexport場所を変更
export type TravelinkDataType = {
  id: string
  ownerId: string
  title: string
  thumbnail: string
  date: string[]
  ownerName: string
  ownerIcon: string
}

// 仮置きの型設定
// TODO:本実装のタイミングでtypeの内容とexport場所を変更
export type FavoriteDataType = {
  puclicId: string
  title: string
  thumbnail: string
  tag: string[]
}

type TabHomeProps = {
  userId: string
  myTravelinkList: TravelinkDataType[]
  favoriteList: FavoriteDataType[]
}

export const TabHome = ({
  userId,
  myTravelinkList,
  favoriteList
}: TabHomeProps) => {
  const [value, setValue] = useState<string>('all')
  const [joinedList, setJoinedList] = useState<TravelinkDataType[]>([])

  useEffect(() => {
    const list = myTravelinkList.filter((item) => item.ownerId !== userId)
    if (list) setJoinedList(list)
  }, [])

  return (
    <>
      <div css={styles.tabs}>
        <label>
          <input
            name="tab"
            type="radio"
            value="all"
            defaultChecked
            onChange={(e) => {
              setValue(e.target.value)
            }}
          />
          <span>すべて</span>
        </label>
        <label>
          <input
            name="tab"
            type="radio"
            value="join"
            onChange={(e) => {
              setValue(e.target.value)
            }}
          />
          <span>参加中</span>
        </label>
        <label>
          <input
            name="tab"
            type="radio"
            value="favorite"
            onChange={(e) => {
              setValue(e.target.value)
            }}
          />
          <span>いいね</span>
        </label>
      </div>
      {value === 'all' && (
        <>
          {myTravelinkList.length ? (
            <>
              {myTravelinkList.map((travelink) => (
                <div key={travelink.id} css={styles.layoutCardTravelink}>
                  <CardTravelink travelink={travelink} />
                </div>
              ))}
            </>
          ) : (
            <>
              <p>トラべリンクがないです</p>
            </>
          )}
        </>
      )}
      {value === 'join' && (
        <>
          {joinedList.length ? (
            <>
              {joinedList.map((item) => (
                <div css={styles.layoutCardTravelink} key={item.id}>
                  <CardTravelink travelink={item} />
                </div>
              ))}
            </>
          ) : (
            <>
              <p>参加中のトラべリンクがないです</p>
            </>
          )}
        </>
      )}
      {value === 'favorite' && (
        <>
          {favoriteList.length ? (
            <>
              {favoriteList.map((favorite) => (
                <div css={styles.layoutCardTravelink} key={favorite.puclicId}>
                  <CardTravelink favorite={favorite} />
                </div>
              ))}
            </>
          ) : (
            <>
              <p>いいねしたみんなのたびがないです</p>
            </>
          )}
        </>
      )}
    </>
  )
}

const styles = {
  layoutCardTravelink: css`
    margin-bottom: 16px;
  `,
  tabs: css`
    position: relative;
    width: 100%;
    height: 34px;
    margin-bottom: 16px;
    & input[type='radio'] {
      /* ラジオボタン消す */
      display: none;

      /* tab */
      @media screen and (prefers-reduced-motion: reduce) {
        & + span {
          display: inline-block;
          padding: 6px 12px;
          margin-right: 8px;
          font-size: ${theme.fontSize.md};
          color: ${theme.color.black};
          text-align: center;
          cursor: pointer;
          background-color: ${theme.color.white};
          border: 2px solid ${theme.color.outlineGray};
          border-radius: 100px;
          transition: none;

          &:hover,
          &:focus {
            background-color: ${theme.color.bgGray};
          }
        }
      }
      & + span {
        display: inline-block;
        padding: 6px 12px;
        margin-right: 8px;
        font-size: ${theme.fontSize.md};
        color: ${theme.color.black};
        text-align: center;
        cursor: pointer;
        background-color: ${theme.color.white};
        border: 2px solid ${theme.color.outlineGray};
        border-radius: 100px;
        transition: all 0.3s 0s ease;

        &:hover,
        &:focus {
          background-color: ${theme.color.bgGray};
        }
      }

      &:checked + span {
        color: ${theme.color.white};
        background-color: ${theme.color.black};
        border: 2px solid ${theme.color.black};
      }
    }
  `
}
