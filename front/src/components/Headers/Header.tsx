import { MouseEventHandler } from 'react'
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
  onClick?: MouseEventHandler<HTMLButtonElement>
  ToolIcon?: IconType
  toolHref?: `/${string}`
  noBorder?: boolean
}

export const Header = ({
  title,
  href,
  onClick,
  ToolIcon,
  toolHref,
  noBorder = false
}: HeaderProps) => {
  return (
    <header css={[styles.header, noBorder && withoutBorder]}>
      <Container bgColor="none">
        {href && (
          <Link css={styles.leftIconWrapper} href={href}>
            <HiOutlineChevronLeft size={24} />
          </Link>
        )}
        {onClick && (
          <button css={styles.leftIconWrapper} onClick={onClick}>
            <HiOutlineChevronLeft size={24} />
          </button>
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
