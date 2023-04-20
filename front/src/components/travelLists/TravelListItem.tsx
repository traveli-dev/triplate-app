import Image from "next/image"
import { HiOutlineClock, HiOutlineDocumentText } from "react-icons/hi"
import { styles } from "@/styles/components/travelLists/TravelListItem.styles"

export type TravelListItemType = {
  icon: 'map' | 'link' | 'ledger'
  title: string
  date?: string
  memo?: string
}

export const TravelListItem = (item: TravelListItemType) => {
  return (
    <div css={styles.item}>
      <div css={styles.icon}>
      {item.icon == 'map' &&
      <Image alt="img_pin" height={24} src="/linkIcon/linkIcon_pin.svg" width={24}/>}
    {item.icon == 'link' &&
      <Image alt="img_link" height={24}src="/linkIcon/linkIcon_link.svg" width={24} />}
    {item.icon == 'ledger' &&
      <Image alt="img_ledger" height={24} src="/linkIcon/linkIcon_ledger.svg" width={24}/>}      </div>
      <div css={styles.values}>
        <div css={styles.title}>{item.title}</div>
        <div css={styles.sub}>
          {item.date && <div css={styles.text_with_icon}>
            <HiOutlineClock css={styles.icon_small} size={16} />
            <p>{item.date}</p>
          </div>}
          {item.memo && <div css={styles.text_with_icon}>
            <HiOutlineDocumentText css={styles.icon_small} size={16} />
            <p>{item.memo}</p>
          </div>}
        </div>
      </div>
    </div>
  )
}
