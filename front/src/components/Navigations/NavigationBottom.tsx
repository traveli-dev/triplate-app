import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '@/styles/components/Navigations/NavigationBottom.module.scss'
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
      <ul className={styles.wrapper}>
        <li className={styles.nav}>
          <Link
            href={'home'}
            className={`${styles.default} ${
              currentPath === '/home' && styles.focus
            }`}
          >
            {currentPath === '/home' ? (
              <HiHome size={24} />
            ) : (
              <HiOutlineHome size={24} />
            )}
            <p>ホーム</p>
          </Link>
        </li>
        <li className={styles.nav}>
          <Link
            href={'search'}
            className={`${styles.default} ${
              currentPath === '/search' && styles.focus
            }`}
          >
            {currentPath === '/search' ? (
              <HiGlobe size={24} />
            ) : (
              <HiOutlineGlobe size={24} />
            )}

            <p>みんなのたび</p>
          </Link>
        </li>
        <li className={styles.nav}>
          <Link
            href={'mypage'}
            className={`${styles.default} ${
              currentPath === '/mypage' && styles.focus
            }`}
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
