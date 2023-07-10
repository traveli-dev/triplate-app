import { IconType } from 'react-icons'
import Image from 'next/image'
import Link from 'next/link'
import { styles } from '@/styles/components/Lists/ListItem.styles'

type ListItemProps = {
  Icon?: IconType
  title: string
  href: string
  IconRight?: IconType
  imgSrc?: string
  subText?: string
}

export const ListItem = ({
  href,
  Icon,
  title,
  IconRight,
  subText,
  imgSrc
}: ListItemProps) => {
  return (
    <li css={styles.listItemWrapper(imgSrc)}>
      <Link href={href}>
        <div css={styles.item}>
          {Icon && <Icon size={24} />}
          {imgSrc && (
            <div css={styles.imgWrapper}>
              <Image alt="" fill src={imgSrc} css={styles.img} />
            </div>
          )}
          <div css={styles.textWrapper}>
            <span css={styles.title}>{title}</span>
            {subText && <span css={styles.subText}>{subText}</span>}
          </div>
          {IconRight && (
            <div>
              <IconRight size={20} />
            </div>
          )}
        </div>
      </Link>
    </li>
  )
}
