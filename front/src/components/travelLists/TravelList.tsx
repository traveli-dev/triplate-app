import { TravelListItem } from '@/components/travelLists'
import { styles } from '@/styles/components/TravelLists/TravelListItem.styles'

export type TravelListItemType = {
  icon: 'map' | 'link' | 'ledger'
  title: string
  date?: string
  memo?: string
}

type TravelListProps = {
  travelList: TravelListItemType[]
}

export const TravelList = ({ travelList }: TravelListProps) => {
  return (
    <>
      {travelList.map((item: TravelListItemType, index) => {
        return (
          <div css={styles.item} key={index}>
            <TravelListItem
              css={styles.item}
              date={item.date}
              icon={item.icon}
              memo={item.memo}
              title={item.title}
            />
          </div>
        )
      })}
    </>
  )
}
