import { HiOutlineClock, HiOutlineDocumentText } from "react-icons/hi"
import { styles } from "@/styles/components/travelLists/TravelListItem.styles"

type TravelListItemProps = {
    icon: 'map' | 'link'
    title: string
    date: string
    title_memo: string
}

export const TravelListItem = ({title, date, title_memo,...props}:TravelListItemProps) => {
    return (
      <div css={styles.item}>
        <div css={styles.icon}></div>
        <div css={styles.values}>
          <div css={styles.title}>title</div>
          <div css={styles.sub}>
            <div css={styles.text_with_icon}>
              <HiOutlineClock size={16} />
              <span>18:00</span>
            </div>
            <div css={styles.text_with_icon}>
              <HiOutlineDocumentText size={16} />
              <HiOutlineDocumentText size={16} />
              <p>memomemo</p>
            </div>
          </div>
        </div>
      </div>
    )
}
