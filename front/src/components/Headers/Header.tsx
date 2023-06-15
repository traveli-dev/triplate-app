import { IconType } from 'react-icons'
import Link from 'next/link'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import { Container } from '@/components/Containers'
import {
  styles,
  withoutBorder
} from '@/styles/components/Headers/Header.styles'

type HeaderProps = {
  href?: `/${string}`
  title?: string
  ToolIcon?: IconType
  toolHref?: `/${string}`
  noBorder?: boolean
}

export const Header = ({
  title,
  href,
  ToolIcon,
  toolHref,
  noBorder
}: HeaderProps) => {
  return (
    <header css={noBorder ? styles.header : [styles.header, withoutBorder]}>
      <Container bgColor="none">
        {href && (
          <Link css={styles.leftIconWrapper} href={href}>
            <HiOutlineChevronLeft size={24} />
          </Link>
        )}
        {title && <h1 css={styles.title}>{title}</h1>}
        {ToolIcon && toolHref && (
          <Link css={styles.rightIconWrapper} href={toolHref}>
            <ToolIcon size={24} />
          </Link>
        )}
      </Container>
    </header>
  )
}
