import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import {
  HiOutlineBell,
  HiOutlineCog,
  HiOutlinePencil,
  HiOutlineShare,
  HiOutlinePlus,
  HiOutlineChevronRight
} from 'react-icons/hi'
import { Avatar } from '@/components/Avatars'
import { ButtonFill, ButtonSmall } from '@/components/Buttons'
import { CardTriplate } from '@/components/Cards'
import { Container } from '@/components/Containers'
import { NavigationBottom } from '@/components/Navigations'
import { useAppSelector } from '@/redux/rootStore'
import { currentUserSelectors } from '@/redux/stores'
import { styles } from '@/styles/pages/[userId]/index.styles'

const Mypage = () => {
  const router = useRouter()

  // TODO: userIdからGETさせる （今は認証ユーザのデータを表示させてるだけ）
  const user = useAppSelector(currentUserSelectors.currentUserData)

  return (
    <>
      {/* TODO:NextSeoのタイトルは適切なものに */}
      <NextSeo title={user.name} />
      <Container bgColor="white" isFull>
        {/* header */}
        <div css={styles.header}>
          <h1 css={styles.heading1}>{user.userId}</h1>
          <div>
            <Link css={styles.iconLink} href="/settings">
              <HiOutlineCog css={styles.icon} size={24} />
            </Link>
            <Link css={styles.iconLink} href="/notifications">
              <HiOutlineBell css={styles.icon} size={24} />
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
          <ButtonSmall
            Icon={HiOutlinePencil}
            onClick={() => router.push('/settings/profile?prev=mypage')}
          >
            プロフィール設定
          </ButtonSmall>
          <ButtonSmall Icon={HiOutlineShare}>プロフィール共有</ButtonSmall>
        </div>
        <div css={styles.layoutButtonFill}>
          <ButtonFill Icon={HiOutlinePlus} isSquare>
            たびのテンプレートを作成する
          </ButtonFill>
        </div>
        <div css={styles.header2}>
          <div css={styles.heading2}>
            <h2>たびのテンプレート</h2>
            <p>12</p>
          </div>
          <Link css={styles.iconLink} href="/dashboard">
            <HiOutlineChevronRight css={styles.icon} size={24} />
          </Link>
        </div>
        <Link href="/">
          <div css={styles.layoutCardTriplate}>
            <CardTriplate
              data={{
                title: 'わかやまデート',
                day: '2泊3日',
                thumbnail: '/images/thumbnail_sample.jpg',
                keywords: ['太平洋酒場', '太平洋酒場']
              }}
              isSquare
            />
          </div>
        </Link>
      </Container>
      <NavigationBottom />
    </>
  )
}

export default Mypage
