import { useRouter } from 'next/router'
import { ButtonFill, ButtonOutline } from '@/components/Buttons'
import { Header } from '@/components/Headers'

const Support = () => {
  const router = useRouter()

  return (
    <>
      <Header href="/settings" title="お問い合わせ" />
      <h2>お問い合わせ</h2>
      <p>アプリに関するご要望やご意見をぜひお聞かせください！</p>
      <ButtonFill
        onClick={() =>
          router.push('https://www.google.com/intl/ja_jp/forms/about/')
        }
      >
        GoogleFormでお問い合わせ
      </ButtonFill>
      <p>アプリについてご不明な点ありましたら、こちらもご参照ください。</p>
      <ButtonOutline
        icon="none"
        onClick={() => router.push('/help?prev=support')}
      >
        ヘルプページ
      </ButtonOutline>
    </>
  )
}

export default Support
