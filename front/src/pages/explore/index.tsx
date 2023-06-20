import Link from 'next/link'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi'
import { CardTriplate } from '@/components/Cards'
import { Container } from '@/components/Containers'
import { NavigationBottom } from '@/components/Navigations'
import { useGetAllTriplatesQuery } from '@/redux/services/firestore'
import { styles } from '@/styles/pages/explore/index.styles'

const Explore = () => {
  const { data, isLoading } = useGetAllTriplatesQuery()
  return (
    <>
      <Container bgColor="white" isFull>
        <div css={styles.header}>
          <h1 css={styles.heading1}>みんなのたびテンプレート</h1>
          <Link href="/help/triplate?prev=explore">
            <HiOutlineQuestionMarkCircle size={18} />
          </Link>
        </div>
        {!data || isLoading ? (
          <>LOADING</>
        ) : (
          <>
            {data.map((data, index) => (
              <div css={styles.exploreList} key={index}>
                <CardTriplate data={data} />
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
