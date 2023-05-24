import { useRouter } from 'next/router'
import { Header } from '@/components/Headers'

const HelpTriplate = () => {
  const router = useRouter()
  const { prev } = router.query

  return (
    <>
      <Header href={prev ? `/${prev}` : '/help'} title="ヘルプ" />
      <h2>みんなのたびテンプレートとは</h2>
    </>
  )
}

export default HelpTriplate
