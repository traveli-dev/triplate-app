import { ButtonFill, ButtonOutline } from '@/components/Buttons'
import { Container } from '@/components/Containers'
import { Header } from '@/components/Headers'
import { styles } from '@/styles/pages/contact/index.styles'
import { useRouter } from 'next/router'

const Contact = () => {
  const router = useRouter()
  return (
    <>
      <Header href="/settings" title="お問い合わせ" />
      <Container bgColor="white" isFull>
        <h1 css={styles.header}>お問い合わせ</h1>
        <p css={styles.description}>
          アプリに関するご要望やご意見をぜひお聞かせください！
        </p>
        <div css={styles.layoutButton}>
          <ButtonFill onClick={() => (location.href = 'https://github.com')}>
            GoogleFormでお問い合わせ
          </ButtonFill>
        </div>
        <p css={styles.description}>
          アプリについてご不明な点ありましたら、こちらもご参照ください。
        </p>
        <div css={styles.layoutButton}>
          <ButtonOutline icon="none" onClick={() => router.push('/help')}>
            ヘルプページ
          </ButtonOutline>
        </div>
      </Container>
    </>
  )
}

export default Contact
