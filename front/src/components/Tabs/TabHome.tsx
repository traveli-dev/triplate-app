import { useState } from 'react'
import { CardTravelink } from '@/components/Cards'
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
  const [isSquare, setIsSquare] = useState(false)

  const travelinkData = data.map(({ thumbnail, date, title, id }) => ({
    thumbnail,
    date,
    title,
    id
  }))

  return (
    <>
      <button
        onClick={() => {
          setIsSquare(!isSquare)
        }}
      >
        きりかえ
      </button>
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
      {value === 'all' && (
        <>
          {travelinkData.length ? (
            <div css={styles.grid(isSquare)}>
              {travelinkData.map((travelink) => (
                <div key={travelink.id}>
                  <CardTravelink data={travelink} isSquare={isSquare} />
                </div>
              ))}
            </div>
          ) : (
            <p>トラべリンクがないです</p>
          )}
        </>
      )}
      {value === 'join' && <p>参加中のトラべリンクがないです</p>}
      {value === 'favorite' && <p>いいねしたみんなのたびがないです</p>}
    </>
  )
}
