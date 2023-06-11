import Link from 'next/link'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi'
import { CardExplore } from '@/components/Cards'
import { Container } from '@/components/Containers'
import { NavigationBottom } from '@/components/Navigations'
import { useGetAllExploresQuery } from '@/redux/services/firestore/explores'
import { styles } from '@/styles/pages/explore/index.styles'

const Explore = () => {
  const { data: exploresData, isLoading } = useGetAllExploresQuery()
  return (
    <>
      <Container bgColor="white" isFull>
        <div css={styles.header}>
          <h1 css={styles.heading1}>みんなのたびテンプレート</h1>
          <Link href="/help/triplate?prev=explore">
            <HiOutlineQuestionMarkCircle size={18} />
          </Link>
        </div>
        {!exploresData || isLoading ? (
          <>LOADING</>
        ) : (
          <>
            {exploresData.map((data, _) => (
              <div css={styles.exploreList} key={_}>
                <CardExplore data={data} />
              </div>
            ))}
          </>
        )}
      </Container>
      <NavigationBottom />
    </>
  )
}

export default Explore
