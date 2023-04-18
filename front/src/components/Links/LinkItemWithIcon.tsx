import { IconType } from 'react-icons'
import Link from 'next/link'
import { styles } from '@/styles/components/Links/LinkItemWithIcon.styles'

type LinkItemWithIconProps = {
  href: `/${string}`
  Icon: IconType
  title: string
}

export const LinkItemWithIcon = ({
  href,
  Icon,
  title
}: LinkItemWithIconProps) => {
  return (
    <Link css={styles.link} href={href}>
      <div css={styles.icon}>
        <Icon size={32} />
      </div>
      <p css={styles.title}>{title}</p>
    </Link>
  )
}
