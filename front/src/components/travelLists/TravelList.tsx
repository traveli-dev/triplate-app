import { TravelListItem } from "@/components/travelLists"
import { styles } from "@/styles/components/TravelLists/TravelList.style"
import { TravelListItemType } from "./TravelListItem"

type TravelListProps = {
    travelList: TravelListItemType[]
}

export const TravelList = ({ travelList }: TravelListProps) => {
    return (<>
        {travelList.map((item: TravelListItemType) => {
            return (
                <div css={styles.item}>
                    <TravelListItem css={styles.item} date={item.date} icon={item.icon} memo={item.memo} title={item.title} />
                </div>)
        })}
    </>
    )
}