import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { HiOutlineBell, HiOutlineCog } from 'react-icons/hi'
import { Avatar } from '@/components/Avatars'
import { Container } from '@/components/Containers'
import { NavigationBottom } from '@/components/Navigations'
import { useAppSelector } from '@/redux/rootStore'
import { currentUserSelectors } from '@/redux/stores'
import { styles } from '@/styles/pages/[userId]/index.styles'

const Mypage = () => {
  const router = useRouter()
  const { userId } = router.query
  const triplateId = '123'

  // TODO: userIdからGETさせる （今は認証ユーザのデータを表示させてるだけ）
  const user = useAppSelector(currentUserSelectors.currentUserData)

  return (
    <>
      {/* TODO:NextSeoのタイトルは適切なものに */}
      <NextSeo title={user.name} />
      <Container bgColor="white" isCenter isFull>
        <div css={styles.header}>
          <h1 css={styles.heading1}>マイページ</h1>
          <div>
            <Link href="/settings">
              <HiOutlineCog size={18} />
            </Link>
            <Link href="/notifications">
              <HiOutlineBell size={18} />
            </Link>
          </div>
        </div>
        <div css={styles.wrapper}>
          <div css={styles.content}>
            <div css={styles.user}>
              <Avatar size="lg" url={user.icon || ''} />
              <h1>{user.name}</h1>
              <Link href={`/settings/profile?prev=${userId}`}>
                <HiOutlineCog size={15} />
                プロフィール設定
              </Link>
            </div>
            <div>
              <Link href="/triplate/new">作るのplusボタン</Link>
            </div>
            <div>
              <Link href={`/triplate/${triplateId}`}>かだと磯の浦</Link>
            </div>
          </div>
        </div>
      </Container>
      <NavigationBottom />
    </>
  )
}

export default Mypage
