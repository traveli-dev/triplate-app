import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import {
  HiOutlineBell,
  HiOutlineCog,
  HiOutlinePencil,
  HiOutlineShare,
  HiOutlinePlus
} from 'react-icons/hi'
import { Avatar } from '@/components/Avatars'
import { ButtonFill, ButtonSmall } from '@/components/Buttons'
import { Container } from '@/components/Containers'
import { NavigationBottom } from '@/components/Navigations'
import { useAppSelector } from '@/redux/rootStore'
import { currentUserSelectors } from '@/redux/stores'
import { styles } from '@/styles/pages/[userId]/index.styles'

const Mypage = () => {
  // const router = useRouter()
  // const { userId } = router.query
  // const triplateId = '123'

  // TODO: userIdからGETさせる （今は認証ユーザのデータを表示させてるだけ）
  const user = useAppSelector(currentUserSelectors.currentUserData)
  // console.log(user)

  return (
    <>
      {/* TODO:NextSeoのタイトルは適切なものに */}
      <NextSeo title={user.name} />
      <Container bgColor="white" isFull>
        {/* header */}
        <div css={styles.header}>
          <h1 css={styles.heading1}>{user.userId}</h1>
          <div>
            <Link href="/settings">
              <HiOutlineCog size={18} />
            </Link>
            <Link href="/notifications">
              <HiOutlineBell size={18} />
            </Link>
          </div>
        </div>
        {/* user_info */}
        <div css={styles.userInfoWrapper}>
          <Avatar size="lg" url={user.icon || ''} />
          <h1 css={styles.userName}>{user.name}</h1>
          <p css={styles.userDescription}>
            Designer & Engineer
            <br />
            デジタルデトックスなたびがスキ
          </p>
          <div css={styles.ffWrapper}>
            <Link css={styles.ffLink} href={`${user.userId}/following`}>
              <span css={styles.ffNumber}>3</span>
              <span css={styles.ffText}>フォロー</span>
            </Link>
            <span css={styles.ffBorder} />
            <Link css={styles.ffLink} href={`${user.userId}/follower`}>
              <span css={styles.ffNumber}>12</span>
              <span css={styles.ffText}>フォロワー</span>
            </Link>
          </div>
        </div>
        {/* user_action */}
        <div css={styles.actionWrapper}>
          <ButtonSmall Icon={HiOutlinePencil}>プロフィール設定</ButtonSmall>
          <ButtonSmall Icon={HiOutlineShare}>プロフィール共有</ButtonSmall>
        </div>
        <div css={styles.layoutButtonFill}>
          <ButtonFill Icon={HiOutlinePlus} isSquare>
            たびのテンプレートを作成する
          </ButtonFill>
        </div>
        <div css={styles.header2}>
          <h2 css={styles.heading2}>たびのテンプレート</h2>
          <p>0</p>
          <button>
            <HiOutlinePencil size={24}/>
          </button>
        </div>
      </Container>
      <NavigationBottom />
    </>
  )
}

export default Mypage
