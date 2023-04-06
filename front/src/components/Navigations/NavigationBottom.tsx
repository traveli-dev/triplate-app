import Link from 'next/link'
import { useRouter } from 'next/router'
import { css } from '@emotion/react'
import {
  HiOutlineHome,
  HiOutlineGlobe,
  HiOutlineUser,
  HiHome,
  HiGlobe,
  HiUser
} from 'react-icons/hi'
import { theme } from '@/styles/theme'

export const NavigationBottom = () => {
  const router = useRouter()
  const currentPath = router.pathname

  return (
    <nav>
      <ul css={styles.wrapper}>
        <li css={styles.nav}>
          <Link
            href="home"
            css={[styles.navItem, currentPath === '/home' && styles.focus]}
          >
            {currentPath === '/home' ? (
              <HiHome size={24} />
            ) : (
              <HiOutlineHome size={24} />
            )}
            <p>ホーム</p>
          </Link>
        </li>
        <li css={styles.nav}>
          <Link
            href="search"
            css={[styles.navItem, currentPath === '/search' && styles.focus]}
          >
            {currentPath === '/search' ? (
              <HiGlobe size={24} />
            ) : (
              <HiOutlineGlobe size={24} />
            )}

            <p>みんなのたび</p>
          </Link>
        </li>
        <li css={styles.nav}>
          <Link
            href="mypage"
            css={[styles.navItem, currentPath === '/mypage' && styles.focus]}
          >
            {currentPath === '/mypage' ? (
              <HiUser size={24} />
            ) : (
              <HiOutlineUser size={24} />
            )}
            <p>マイページ</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const styles = {
  wrapper: css`
    position: fixed;
    bottom: 0;
    z-index: 999;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.color.white};
    width: 100%;
    max-width: ${theme.breakpoint.md};
    height: 80px;
    margin: 0;
    padding: 0 48px;
    border-radius: 32px 32px 0 0;
    border: 1px solid ${theme.color.outlineGray};
    border-bottom: 0;
  `,
  nav: css`
    width: 100%;
    text-align: center;
    list-style: none;
    font-size: ${theme.fontSize.sm};
    p {
      margin: 4px 0 0;
    }
  `,
  navItem: css`
    color: ${theme.color.black};
    text-decoration: none;
  `,
  focus: css`
    font-weight: 700;
  `
}
