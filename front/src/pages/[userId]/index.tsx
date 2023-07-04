import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { Timestamp } from 'firebase/firestore'
import {
  HiOutlineBell,
  HiOutlineCog,
  HiOutlinePencil,
  HiOutlineShare,
  HiOutlinePlus,
  HiOutlineChevronRight
} from 'react-icons/hi'
import { Avatar } from '@/components/Avatars'
import { ButtonFill, ButtonFollow, ButtonSmall } from '@/components/Buttons'
import { CardTriplate } from '@/components/Cards'
import { Container } from '@/components/Containers'
import { Header } from '@/components/Headers'
import { NavigationBottom } from '@/components/Navigations'
import { currentUserSelectors } from '@/redux/features'
import { useAppSelector } from '@/redux/store'
import { styles } from '@/styles/pages/[userId]/index.styles'
import { useGetUserByUserIdQuery } from '@/redux/services/firestore'

const Mypage = () => {
  const router = useRouter()

  const currentUser = useAppSelector(currentUserSelectors.currentUserData)

  const userId = String(router.query.userId)
  console.log(userId)
  
  const { data, isLoading } = useGetUserByUserIdQuery(userId)
  const isMe = userId === currentUser.userId
 
  return (
    <>
      {!data || isLoading ? (
        <>LOADING</>
      ) : (<>
        {/* TODO:NextSeoのタイトルは適切なものに */}
        <NextSeo title={data.name} />
        {/* 他のユーザのマイページを表示する時 */}
        {!isMe && (
          <Header title={data.userId} onClick={() => router.back()} />
        )}
        <Container bgColor="white" isFull>
          {/* header */}
          {isMe && (
            <div css={styles.header}>
              <h1 css={styles.heading1}>{data.userId}</h1>
              <Link css={styles.iconLink} href="/settings">
                <HiOutlineCog css={styles.icon} size={24} />
              </Link>
              <Link css={styles.iconLink} href="/notifications">
                <HiOutlineBell css={styles.icon} size={24} />
              </Link>
            </div>
          )}

          {/* user_info */}
          <div css={styles.userInfoWrapper}>
            <Avatar size="lg" url={data.icon || ''} />
            <h1 css={styles.userName}>{data.name}</h1>
            <p css={styles.userDescription}>
              Designer & Engineer
              <br />
              デジタルデトックスなたびがスキ
            </p>
            <div css={styles.ffWrapper}>
              <Link css={styles.ffLink} href={`${data.userId}/following`}>
                <span css={styles.ffNumber}>3</span>
                <span css={styles.ffText}>フォロー</span>
              </Link>
              <span css={styles.ffBorder} />
              <Link css={styles.ffLink} href={`${data.userId}/follower`}>
                <span css={styles.ffNumber}>12</span>
                <span css={styles.ffText}>フォロワー</span>
              </Link>
            </div>
          </div>

          {/* user_action */}
          {isMe && (
            <>
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
            </>
          )}

          {/* 他のユーザのマイページを表示する時 */}
          {!isMe && (
            <div css={styles.layoutButtonFollow}>
              <ButtonFollow isFollowing={false} />
            </div>
          )}

          <div css={styles.header2}>
            <div css={styles.heading2}>
              <h2>たびのテンプレート</h2>
              <p>12</p>
            </div>
            {isMe && (
              <Link css={styles.iconLink} href="/dashboard">
                <HiOutlineChevronRight css={styles.icon} size={24} />
              </Link>
            )}
          </div>
          <Link href="/triplate/123">
            <div css={styles.layoutCardTriplate}>
              <CardTriplate {...{
                thumbnail:
                  'http://localhost:9199/v0/b/traveli-test.appspot.com/o/images%2Ftriplinks%2Fb533283c-adde-4107-aa0a-943ddccb5278%2Fthumbnail?alt=media',
                title: 'わかやまデート',
                date: [new Timestamp(1670684400, 0), new Timestamp(1670770800, 0)] as [
                  Timestamp,
                  Timestamp
                ],
                tags: ['太平洋酒場', '太平洋酒場']
              }} isSquare />
            </div>
          </Link>
        </Container>
        <NavigationBottom />
      </>)}</>

  )
}

export default Mypage
