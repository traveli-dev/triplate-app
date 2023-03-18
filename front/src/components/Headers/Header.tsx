import Link from 'next/link'
import styles from '@/styles/components/Headers/Header.module.scss'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import { Container } from '@/components/Containers'

type HeaderProps = {
  href: `/${string}`
  title?: string
}

export const Header = ({ title, href }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Container bgColor="white">
        <Link href={href} className={styles.iconWrapper}>
          <HiOutlineChevronLeft size={24} />
        </Link>
        {title && <h1 className={styles.title}>{title}</h1>}
      </Container>
    </header>
  )
}
