import { Container } from '@/components/Containers'
import { NavigationBottom } from '@/components/Navigations'
import { TabHome } from '@/components/Tabs/TabHome'
import styles from '@/styles/components/Pages/Home.module.scss'

const Home = () => {
  // 仮置きのサンプルデータ
  const userId = 'opanchu'
  const myTravelinkList = [
    {
      id: 'abc',
      ownerId: 'opanchu',
      title: 'いつメンの京都旅行',
      thumbnail: '/images/user_sample.jpeg',
      date: ['2023.03.25', '2023.03.27'],
      ownerName: 'おぱんちゅうさぎ',
      ownerIcon: '/images/user_sample.jpeg'
    },
    {
      id: 'def',
      ownerId: 'usagi',
      title: '鳥取４人旅',
      thumbnail: '/images/user_sample.jpeg',
      date: ['2023.03.25', '2023.03.27'],
      ownerName: 'うさぎ',
      ownerIcon: '/images/user_sample.jpeg'
    }
  ]
  const favoriteList = [
    {
      puclicId: '123',
      title: 'コスパ重視の京都旅行',
      tag: ['京都', '3人旅'],
      thumbnail: '/images/user_sample.jpeg'
    },
    {
      puclicId: '456',
      title: 'うどん巡り四国旅',
      tag: ['香川', '徳島', '愛媛', '高知', '2人旅'],
      thumbnail: '/images/user_sample.jpeg'
    }
  ]
  return (
    <>
      <Container bgColor="white" isFull>
        <h1 className={styles.heading1}>私のトラべリンク</h1>
        <TabHome
          userId={userId}
          myTravelinkList={myTravelinkList}
          favoriteList={favoriteList}
        />
      </Container>
      <NavigationBottom />
    </>
  )
}

export default Home
