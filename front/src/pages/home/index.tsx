import { Container } from '@/components/Containers'
import { NavigationBottom } from '@/components/Navigations'
import { TabHome } from '@/components/Tabs'
import { styles } from '@/styles/pages/home/index.styles'
import { TriplinkType, useCreateTriplinksByUserMutation,useGetTriplinksByUserQuery } from "@/redux/services/firestore/triplinks/triplinks";
import {useState} from "react";


const Home = () => {

  const { data, isLoading } = useGetTriplinksByUserQuery()
  return (
    <>
      <Container bgColor="white" isFull>
        <h1 css={styles.heading1}>私のトラべリンク</h1>
        {!data || isLoading ? (
          /*TODO: */
          <>{isLoading}</>
          ) : (
            <>
          <TabHome data={data} />
            </>
        )}

      </Container>
      <NavigationBottom />
    </>
  )
}

export default Home
