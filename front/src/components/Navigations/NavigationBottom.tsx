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
import { useAppSelector } from '@/redux/rootStore'
import { currentUserSelectors } from '@/redux/stores'
import { styles } from '@/styles/components/Navigations/NavigationBottom.styles'

export const NavigationBottom = () => {
  const router = useRouter()
  const currentPath = router.pathname
  const currentUserData = useAppSelector(currentUserSelectors.currentUserData)

  return (
    <nav css={styles.wrapper}>
      <ul css={styles.ul}>
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
            css={[styles.navItem, currentPath === '/explore' && styles.focus]}
            href="explore"
          >
            {currentPath === '/explore' ? (
              <HiGlobe size={24} />
            ) : (
              <HiOutlineGlobe size={24} />
            )}
            <p>みんなのたび</p>
          </Link>
        </li>
        <li css={styles.nav}>
          <Link
            css={[styles.navItem, currentPath === '/[userId]' && styles.focus]}
            href={currentUserData.userId}
          >
            {currentPath === '/[userId]' ? (
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
