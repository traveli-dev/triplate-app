import Link from 'next/link'
import { css } from '@emotion/react'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import { Container } from '@/components/Containers'
import { theme } from '@/styles/theme'

type HeaderProps = {
  href: `/${string}`
  title?: string
}

export const Header = ({ title, href }: HeaderProps) => {
  return (
    <header css={styles.header}>
      <Container bgColor="white">
        <Link href={href} css={styles.iconWrapper}>
          <HiOutlineChevronLeft size={24} />
        </Link>
        {title && <h1 css={styles.title}>{title}</h1>}
      </Container>
    </header>
  )
}

const styles = {
  header: css`
    /* 下に続く要素が重ならないようにする */
    position: sticky;
    top: 0;
    z-index: 999;
    width: 100%;
    min-width: ${theme.breakpoint.sm};
    max-width: ${theme.breakpoint.md};
    height: 56px;
    background-color: ${theme.color.white};
  `,
  iconWrapper: css`
    position: absolute;
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: ${theme.color.black};
    text-decoration: none;
    background-color: ${theme.color.white};
    border-radius: 50%;
    transform: translateY(-50%);
    &:hover,
    &:focus {
      background-color: ${theme.color.bgBlue};
    }
  `,
  title: css`
    margin: 0;
    font-size: ${theme.fontSize.md};
    /* 56px(height) / 16px (font size) */
    line-height: 3.5;
    text-align: center;
  `
}
