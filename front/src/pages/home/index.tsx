import { Container } from '@/components/Containers'
import { NavigationBottom } from '@/components/Navigations'
import { TabHome } from '@/components/Tabs'
import { styles } from '@/styles/pages/home/index.styles'

const Home = () => {
  // 仮置きのサンプルデータ
  const triplinkData = [
    {
      id: 'abc',
      ownerId: 'opanchu',
      title: 'いつメンの京都旅行',
      thumbnail: '/images/user_sample.jpeg',
      date: ['2023.03.25', '2023.03.27'] as [string, string],
      ownerName: 'おぱんちゅうさぎ',
      ownerIcon: '/images/user_sample.jpeg'
    },
    {
      id: 'def',
      ownerId: 'usagi',
      title: '鳥取４人旅',
      thumbnail: '/images/user_sample.jpeg',
      date: ['2023.03.25', '2023.03.27'] as [string, string],
      ownerName: 'うさぎ',
      ownerIcon: '/images/user_sample.jpeg'
    },
    {
      id: 'aie',
      ownerId: 'usagi',
      title: '鳥取４人旅',
      thumbnail: '/images/user_sample.jpeg',
      date: ['2023.03.25', '2023.03.27'] as [string, string],
      ownerName: 'うさぎ',
      ownerIcon: '/images/user_sample.jpeg'
    }
  ]

  return (
    <>
      <Container bgColor="white" isFull>
        <h1 css={styles.heading1}>私のトラべリンク</h1>
        <TabHome data={triplinkData} />
      </Container>
      <NavigationBottom />
    </>
  )
}

export default Home
