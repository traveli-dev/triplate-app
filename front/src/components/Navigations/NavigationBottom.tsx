import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  HiOutlineHome,
  HiOutlineGlobe,
  HiOutlineUser,
  HiHome,
  HiGlobe,
  HiUser
} from 'react-icons/hi'
import { styles } from '@/styles/components/Navigations/NavigationBottom.styles'

export const NavigationBottom = () => {
  const router = useRouter()
  const currentPath = router.pathname

  return (
    <nav>
      <ul css={styles.wrapper}>
        <li css={styles.nav}>
          <Link
            css={[styles.navItem, currentPath === '/home' && styles.focus]}
            href="home"
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
            css={[styles.navItem, currentPath === '/search' && styles.focus]}
            href="search"
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
            css={[styles.navItem, currentPath === '/mypage' && styles.focus]}
            href="mypage"
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
