import { Container } from '@/components/Containers'
import { NavigationBottom } from '@/components/Navigations'
import { TabHome } from '@/components/Tabs'
import { styles } from '@/styles/pages/home/index.styles'
import { TriplinkType, useCreateTriplinksByUserMutation,useGetTriplinksByUserQuery } from "@/redux/services/firestore/triplinks/triplinks";
import {useState} from "react";

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

  const { data, isLoading } = useGetTriplinksByUserQuery()
  console.log(data)
  return (
    <>
      <Container bgColor="white" isFull>
        <h1 css={styles.heading1}>私のトラべリンク</h1>
        {!data || isLoading ? (
          /*TODO: */
          <>{isLoading}</>
          ) : (
            <>
              {data.map((item,_) =>(
                <div key={_}>
                  {item.id}
                  {item.title}
                  {item.ownerId}
                  {item.ownerName}
                </div>
                )
              )}
          <TabHome data={triplinkData} />
            </>
        )}

      </Container>
      <NavigationBottom />
    </>
  )
}

export default Home
