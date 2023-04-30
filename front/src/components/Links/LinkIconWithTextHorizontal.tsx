import { IconType } from 'react-icons'
import Link from 'next/link'
import { styles } from '@/styles/components/Links/LinkIconWithTextHorizontal.styles'

type LinkIconWithTextHorizontalProps = {
  href: `/${string}`
  Icon: IconType
  title: string
}

export const LinkIconWithTextHorizontal = ({
  href,
  Icon,
  title,
  ...props
}: LinkIconWithTextHorizontalProps) => {
  return (
    <Link css={styles.link} href={href} {...props}>
      <div css={styles.icon}>
        <Icon size={32} />
      </div>
      <p css={styles.title}>{title}</p>
    </Link>
  )
}
