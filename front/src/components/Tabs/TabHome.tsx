import { useEffect, useState } from 'react'
import { CardTravelink } from '@/components/Cards'
import styles from '@/styles/components/Tabs/TabHome.module.scss'

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
      <div className={styles.tabs}>
        <label>
          <input
            name={'tab'}
            type={'radio'}
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
            name={'tab'}
            type={'radio'}
            value="join"
            onChange={(e) => {
              setValue(e.target.value)
            }}
          />
          <span>参加中</span>
        </label>
        <label>
          <input
            name={'tab'}
            type={'radio'}
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
                <>
                  <CardTravelink travelink={travelink} />
                </>
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
                <>
                  <CardTravelink travelink={item} />
                </>
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
                <>
                  <CardTravelink favorite={favorite} />
                </>
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
