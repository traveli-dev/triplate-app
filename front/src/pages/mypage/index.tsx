import { NextSeo } from 'next-seo'
import { Avatar } from '@/components/Avatars'
import { Container } from '@/components/Containers'
import { GridIconWithText } from '@/components/Grids'
import { NavigationBottom } from '@/components/Navigations'
import { styles } from '@/styles/pages/mypage/index.styles'

const Mypage = () => {
  // example
  const user = {
    name: 'おぱんちゅうさぎ',
    location: '東京都',
    url: '/images/user_sample.jpeg'
  }
  return (
    <>
      {/* TODO:NextSeoのタイトルは適切なものに */}
      <NextSeo title={user.name} />
      <Container bgColor="white" isCenter isFull>
        <div css={styles.wrapper}>
          <div css={styles.content}>
            <div css={styles.user}>
              <Avatar size="lg" url={user.url} />
              <h1>{user.name}</h1>
              <p>{user.location}</p>
            </div>
            <GridIconWithText />
          </div>
        </div>
      </Container>
      <NavigationBottom />
    </>
  )
}

export default Mypage
