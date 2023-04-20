import Image from 'next/image'
import { HiOutlineClock, HiOutlineDocumentText } from 'react-icons/hi'
import { TravelListItemType } from '@/components/travelLists/TravelList'
import { styles } from '@/styles/components/TravelLists/TravelListItem.styles'

export const TravelListItem = ({
  icon,
  title,
  date,
  memo
}: TravelListItemType) => {
  return (
    <div css={styles.item}>
      <div css={styles.icon}>
        {icon == 'map' && (
          <Image
            alt="img_pin"
            height={24}
            src="/linkIcon/linkIcon_pin.svg"
            width={24}
          />
        )}
        {icon == 'link' && (
          <Image
            alt="img_link"
            height={24}
            src="/linkIcon/linkIcon_link.svg"
            width={24}
          />
        )}
        {icon == 'ledger' && (
          <Image
            alt="img_ledger"
            height={24}
            src="/linkIcon/linkIcon_ledger.svg"
            width={24}
          />
        )}{' '}
      </div>
      <div css={styles.values}>
        <div css={styles.title}>{title}</div>
        <div css={styles.sub}>
          {date && (
            <div css={styles.text_with_icon}>
              <HiOutlineClock css={styles.icon_small} size={16} />
              <p>{date}</p>
            </div>
          )}
          {memo && (
            <div css={styles.text_with_icon}>
              <HiOutlineDocumentText css={styles.icon_small} size={16} />
              <p>{memo}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
