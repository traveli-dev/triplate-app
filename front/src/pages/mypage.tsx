import { Avatar } from '@/components/Avatars'
import { Container } from '@/components/Containers'
import { GridIconWithText } from '@/components/Grids'
import { NavigationBottom } from '@/components/Navigations'
import styles from '@/styles/components/Pages/Mypage.module.scss'

const Mypage = () => {
  // example
  const user = {
    name: 'おぱんちゅうさぎ',
    location: '東京都',
    url: '/images/user_sample.jpeg'
  }
  return (
    <>
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
