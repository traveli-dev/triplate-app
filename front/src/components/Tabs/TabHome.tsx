import { useState } from 'react'
import { HiViewGrid, HiOutlineViewList } from 'react-icons/hi'
import { CardTripLink } from '@/components/Cards'
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

  const tripLinkData = data.map(({ thumbnail, date, title, id }) => ({
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
          {tripLinkData.length ? (
            <div css={styles.grid(isGrid)}>
              {tripLinkData.map((tripLink) => (
                <div key={tripLink.id}>
                  <CardTripLink data={tripLink} isGrid={isGrid} />
                </div>
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
