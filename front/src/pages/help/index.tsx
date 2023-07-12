import { useRouter } from 'next/router'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { ButtonOutline } from '@/components/Buttons'
import { Container } from '@/components/Containers'
import { Header } from '@/components/Headers'
import { styles } from '@/styles/pages/help/index.styles'

const Help = () => {
  const router = useRouter()
  const { prev } = router.query
  // TODO: v1以降に静的なページに置き換え
  return (
    <>
      <Header href={prev ? `/${prev}` : '/settings'} title="ヘルプ" />
      <Container bgColor="white" isFull>
        <h1 css={styles.header}>よくある質問</h1>
        <p css={styles.description}>
          アプリについてご不明な点ありましたら、こちらをご参照ください！
        </p>
        <div css={styles.layoutButton}>
          <ButtonOutline
            Icon={HiOutlineExternalLink}
            onClick={() => window.open('https://notion.com')}
          >
            ヘルプ
          </ButtonOutline>
        </div>
      </Container>
    </>
  )
}

export default Help
