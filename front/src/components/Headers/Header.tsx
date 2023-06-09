import Link from 'next/link'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import { Container } from '@/components/Containers'
import { styles } from '@/styles/components/Headers/Header.styles'

type HeaderProps = {
  href?: `/${string}`
  title?: string
}

export const Header = ({ title, href }: HeaderProps) => {
  return (
    <header css={styles.header}>
      <Container bgColor="none">
        {href && (
          <Link css={styles.iconWrapper} href={href}>
            <HiOutlineChevronLeft size={24} />
          </Link>
        )}
        {title && <h1 css={styles.title}>{title}</h1>}
      </Container>
    </header>
  )
}
