import { useState } from 'react'
import Link from 'next/link'
import { HiViewGrid, HiOutlineViewList } from 'react-icons/hi'
import { CardTriplink } from '@/components/Cards'
import { styles } from '@/styles/components/Tabs/TabHome.styles'

type TabHomeProps = {
  data: {
    id: string
    ownerId: string
    title: string
    thumbnail: string
    date: [string, string]
    ownerName: string
    ownerIcon: string
  }[]
}

export const TabHome = ({ data }: TabHomeProps) => {
  const [value, setValue] = useState<string>('all')
  const [isGrid, setIsGrid] = useState(false)

  const triplinkData = data.map(({ thumbnail, date, title, id }) => ({
    thumbnail,
    date,
    title,
    id
  }))

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
          {triplinkData.length ? (
            <div css={styles.grid(isGrid)}>
              {triplinkData.map((triplink) => (
                <Link href="/triplink/123" key={triplink.id}>
                  <CardTriplink data={triplink} isGrid={isGrid} />
                </Link>
              ))}
            </div>
          ) : (
            <p>トラべリンクがないです</p>
          )}
        </div>
      )}
      {value === 'join' && <p>参加中のトラべリンクがないです</p>}
      {value === 'favorite' && <p>いいねしたみんなのたびがないです</p>}
    </>
  )
}
