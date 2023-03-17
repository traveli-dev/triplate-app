import Link from 'next/link'
import style from '@/styles/components/Headers/Header.module.scss'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import { Container } from '@/components/Containers'

type HeaderProps = {
  href: `/${string}`
  title?: string
}

export const Header = ({ title, href }: HeaderProps) => {
  return (
    <header className={style.header}>
      <Container>
        <Link href={href} className={style.iconWrapper}>
          <HiOutlineChevronLeft className={style.icon} />
        </Link>
        {title && <h1 className={style.title}>{title}</h1>}
      </Container>
    </header>
  )
}
