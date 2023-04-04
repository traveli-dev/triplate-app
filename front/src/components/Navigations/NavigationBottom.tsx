import { useRouter } from 'next/router'
import Link from 'next/link'
import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import {
  HiOutlineHome,
  HiOutlineGlobe,
  HiOutlineUser,
  HiHome,
  HiGlobe,
  HiUser
} from 'react-icons/hi'

export const NavigationBottom = () => {
  const router = useRouter()
  const currentPath = router.pathname

  return (
    <nav>
      <ul css={wrapper}>
        <li css={nav}>
          <Link href="home" css={[navItem, currentPath === '/home' && focus]}>
            {currentPath === '/home' ? (
              <HiHome size={24} />
            ) : (
              <HiOutlineHome size={24} />
            )}
            <p>ホーム</p>
          </Link>
        </li>
        <li css={nav}>
          <Link
            href="search"
            css={[navItem, currentPath === '/search' && focus]}
          >
            {currentPath === '/search' ? (
              <HiGlobe size={24} />
            ) : (
              <HiOutlineGlobe size={24} />
            )}

            <p>みんなのたび</p>
          </Link>
        </li>
        <li css={nav}>
          <Link
            href="mypage"
            css={[navItem, currentPath === '/mypage' && focus]}
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

const wrapper = css`
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
`

const nav = css`
  width: 100%;
  text-align: center;
  list-style: none;
  font-size: var(--font-size-sm);
  p {
    margin: 4px 0 0 0;
  }
`

const navItem = css`
  color: var(--c-black);
  text-decoration: none;
`

const focus = css`
  font-weight: 700;
`
