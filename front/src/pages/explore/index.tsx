import Link from 'next/link'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi'
import { CardTriplate } from '@/components/Cards'
import { Container } from '@/components/Containers'
import { NavigationBottom } from '@/components/Navigations'
import { useGetAllPublishedTriplatesQuery } from '@/redux/services/firestore'
import { styles } from '@/styles/pages/explore/index.styles'

const Explore = () => {
  const { data, isLoading } = useGetAllPublishedTriplatesQuery()

  return (
    <>
      <Container bgColor="white" isFull>
        <div css={styles.header}>
          <h1 css={styles.heading1}>みんなのたびテンプレート</h1>
          <a css={styles.helpButton} href="https://notion.com" target="_blank">
            <HiOutlineQuestionMarkCircle size={18} />
          </a>
        </div>
        {!data || isLoading ? (
          <>LOADING</>
        ) : (
          <>
            {data.map((data, index) => (
              <Link href={`/triplate/${data.id}`} key={index}>
                <div css={styles.exploreList}>
                  <CardTriplate {...data} />
                </div>
              </Link>
            ))}
          </>
        )}
      </Container>
      <NavigationBottom />
    </>
  )
}

export default Explore
