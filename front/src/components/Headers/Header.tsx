import { MouseEventHandler } from 'react'
import Link from 'next/link'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import { Container } from '@/components/Containers'
import { styles } from '@/styles/components/Headers/Header.styles'

type HeaderProps = {
  href?: `/${string}`
  title?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Header = ({ title, href, onClick }: HeaderProps) => {
  return (
    <header css={styles.header}>
      <Container bgColor="none">
        {href && (
          <Link css={styles.iconWrapper} href={href}>
            <HiOutlineChevronLeft size={24} />
          </Link>
        )}
        {onClick && (
          <button css={styles.iconWrapper} onClick={onClick}>
            <HiOutlineChevronLeft size={24} />
          </button>
        )}
        {title && <h1 css={styles.title}>{title}</h1>}
      </Container>
    </header>
  )
}
