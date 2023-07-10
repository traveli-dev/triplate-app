import { useRouter } from 'next/router'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { ButtonFill, ButtonOutline } from '@/components/Buttons'
import { Container } from '@/components/Containers'
import { Header } from '@/components/Headers'
import { styles } from '@/styles/pages/support/index.styles'

const Support = () => {
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
          <ButtonFill
            Icon={HiOutlineExternalLink}
            onClick={() =>
              router.push('https://www.google.com/intl/ja_jp/forms/about/')
            }
          >
            GoogleFormでお問い合わせ
          </ButtonFill>
        </div>
        <p css={styles.description}>
          アプリについてご不明な点ありましたら、こちらをご参照ください！
        </p>
        <div css={styles.layoutButton}>
          <ButtonOutline
            Icon={HiOutlineExternalLink}
            onClick={() => router.push('https://notion.com')}
          >
            ヘルプ
          </ButtonOutline>
        </div>
      </Container>
    </>
  )
}

export default Support
