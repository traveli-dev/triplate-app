import Image from 'next/image'
import { HiOutlineClock, HiOutlineDocumentText } from 'react-icons/hi'
import { styles } from '@/styles/components/Cards/CardTripListItem.styles'

type CardTripListItemType = {
  icon: 'map' | 'link' | 'ledger'
  title: string
  date?: string
  memo?: string
}

export const CardTripListItem = ({
  icon,
  title,
  date,
  memo
}: CardTripListItemType) => {
  return (
    <div css={styles.item}>
      <div css={styles.icon}>
        {icon == 'map' && (
          <Image
            alt=""
            height={24}
            src="/linkIcon/linkIcon_pin.svg"
            width={24}
          />
        )}
        {icon == 'link' && (
          <Image
            alt=""
            height={24}
            src="/linkIcon/linkIcon_link.svg"
            width={24}
          />
        )}
        {icon == 'ledger' && (
          <Image
            alt=""
            height={24}
            src="/linkIcon/linkIcon_ledger.svg"
            width={24}
          />
        )}
      </div>
      <div css={styles.values}>
        <div css={styles.title}>{title}</div>
        <div css={styles.sub}>
          {date && (
            <div css={styles.textWithIcon}>
              <HiOutlineClock css={styles.iconSmall} size={16} />
              <p>{date}</p>
            </div>
          )}
          {memo && (
            <div css={styles.textWithIcon}>
              <HiOutlineDocumentText css={styles.iconSmall} size={16} />
              <p>{memo}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
