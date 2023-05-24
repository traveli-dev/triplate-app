import Link from 'next/link'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi'
import { Container } from '@/components/Containers'
import { NavigationBottom } from '@/components/Navigations'
import { styles } from '@/styles/pages/explore/index.styles'

const Explore = () => {
  return (
    <>
      <Container bgColor="white" isFull>
        <div css={styles.header}>
          <h1 css={styles.heading1}>みんなのたびテンプレート</h1>
          <Link href="/help/triplate?prev=explore">
            <HiOutlineQuestionMarkCircle size={18} />
          </Link>
        </div>
      </Container>
      <NavigationBottom />
    </>
  )
}

export default Explore
