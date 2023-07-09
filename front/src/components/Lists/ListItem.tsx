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
}

export const ListItem = ({
  href,
  Icon,
  title,
  IconRight,
  imgSrc
}: ListItemProps) => {
  return (
    <li css={styles.listItemWrapper}>
      <Link href={href}>
        <div css={styles.item}>
          {Icon && <Icon size={24} />}
          {imgSrc && (
            <div>
              <Image alt="" fill src={imgSrc} />
            </div>
          )}
          <span>{title}</span>
          {IconRight && <IconRight size={20} />}
        </div>
      </Link>
    </li>
  )
}
