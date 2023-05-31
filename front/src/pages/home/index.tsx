import { useRouter } from 'next/router'
import { FloatingActionButton } from '@/components/Buttons'
import { Container } from '@/components/Containers'
import { NavigationBottom } from '@/components/Navigations'
import { TabHome } from '@/components/Tabs'
import { styles } from '@/styles/pages/home/index.styles'
import {
  TriplinkType,
  useGetMyTriplinksByUserQuery
} from "@/redux/services/firestore/triplinks/triplinks";
import {useState} from "react";
import {authSelectors, currentUserSelectors} from "@/redux/stores";
import {CheckAuth} from "@/components/Auths";
import {useAppSelector} from "@/redux/rootStore";


const Home = () => {
  const router = useRouter()
  const currentUserUid = useAppSelector(authSelectors.currentUserUid)


  const { data, isLoading } = useGetMyTriplinksByUserQuery()
  return (
    <>
      <Container bgColor="white" isFull>
        <h1 css={styles.heading1}>私のトラべリンク</h1>
        <h1>{currentUserUid}</h1>
        {!data || isLoading ? (
          /*TODO: */
          <>{isLoading}</>
          ) : (
            <>
          <TabHome data={data} />
            </>
        )}

        <FloatingActionButton onClick={() => router.push('/triplink/new')} />
      </Container>
      <NavigationBottom />
    </>
  )
}

export default Home
