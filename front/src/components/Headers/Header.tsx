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
    // 下に続く要素が重ならないようにする
    position: sticky;
    height: 56px;
    width: 100%;
    top: 0;
    background-color: ${theme.color.white};
    max-width: ${theme.breakpoint.md};
    min-width: ${theme.breakpoint.sm};
    z-index: 999;
  `,
  iconWrapper: css`
    background-color: ${theme.color.white};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${theme.color.black};
    &:hover {
      background-color: ${theme.color.bgBlue};
    }
  `,
  title: css`
    margin: 0;
    text-align: center;
    // 56px(height) / 16px (font size)
    line-height: 3.5;
    font-size: ${theme.fontSize.md};
  `
}
