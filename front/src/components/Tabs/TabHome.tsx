import { useState } from 'react'
import Link from 'next/link'
import { HiViewGrid, HiOutlineViewList } from 'react-icons/hi'
import { CardTriplink } from '@/components/Cards'
import { TriplinkType } from '@/redux/services/firestore'
import { styles } from '@/styles/components/Tabs/TabHome.styles'

type TabHomeProps = {
  myTriplinksData: TriplinkType[]
  joinTriplinksData: TriplinkType[]
  favoriteTriplinksData: TriplinkType[]
}

export const TabHome = ({
  myTriplinksData,
  joinTriplinksData,
  favoriteTriplinksData
}: TabHomeProps) => {
  const [value, setValue] = useState<string>('all')
  const [isGrid, setIsGrid] = useState(false)

  const formattedMyTriplinksData = myTriplinksData.map(
    ({ thumbnail, date, title, id }) => ({
      thumbnail,
      date,
      title,
      id
    })
  )
  const formattedJoinTriplinksData = joinTriplinksData.map(
    ({ thumbnail, date, title, id }) => ({
      thumbnail,
      date,
      title,
      id
    })
  )
  const formattedFavoriteTriplinksData = favoriteTriplinksData.map(
    ({ thumbnail, date, title, id }) => ({
      thumbnail,
      date,
      title,
      id
    })
  )

  return (
    <>
      <div css={styles.tabsWrapper}>
        <div css={styles.tabs}>
          <label>
            <input
              defaultChecked
              name="tab"
              type="radio"
              value="all"
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
        <button
          css={styles.buttonGrid}
          onClick={() => {
            setIsGrid(!isGrid)
          }}
        >
          {isGrid ? <HiOutlineViewList size={20} /> : <HiViewGrid size={20} />}
        </button>
      </div>
      {value === 'all' && (
        <div>
          {formattedMyTriplinksData.length ? (
            <div css={styles.grid(isGrid)}>
              {formattedMyTriplinksData.map((triplink) => (
                <Link href={`/triplink/${triplink.id}`} key={triplink.id}>
                  <CardTriplink data={triplink} isGrid={isGrid} />
                </Link>
              ))}
            </div>
          ) : (
            <p>トラべリンクがないです</p>
          )}
        </div>
      )}
      {value === 'join' && (
        <div>
          {formattedJoinTriplinksData.length ? (
            <div css={styles.grid(isGrid)}>
              {formattedJoinTriplinksData.map((triplink) => (
                <Link href={`/triplink/${triplink.id}`} key={triplink.id}>
                  <CardTriplink data={triplink} isGrid={isGrid} />
                </Link>
              ))}
            </div>
          ) : (
            <p>トラべリンクがないです</p>
          )}
        </div>
      )}
      {value === 'favorite' && (
        <div>
          {formattedFavoriteTriplinksData.length ? (
            <div css={styles.grid(isGrid)}>
              {formattedFavoriteTriplinksData.map((triplink) => (
                <Link href={`/triplink/${triplink.id}`} key={triplink.id}>
                  <CardTriplink data={triplink} isGrid={isGrid} />
                </Link>
              ))}
            </div>
          ) : (
            <p>トラべリンクがないです</p>
          )}
        </div>
      )}
    </>
  )
}
