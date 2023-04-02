import { Avatar } from '@/components/Avatars'
import { Container } from '@/components/Containers'
import { GridIconWithText } from '@/components/Grids'
import { NavigationBottom } from '@/components/Navigations'
import styles from '@/styles/pages/Mypage.module.scss'
import { NextSeo } from 'next-seo'

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
      <Container bgColor="white" isFull isCenter>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.user}>
              <Avatar url={user.url} size="lg" />
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
