import Link from 'next/link'
import { useRouter } from 'next/router'
import { Header } from '@/components/Headers'

const Help = () => {
  const router = useRouter()
  const { prev } = router.query

  return (
    <>
      <Header href={prev ? `/${prev}` : '/settings'} />
      <h1>よくある質問</h1>
      <Link href="/help/triplate">みんなのたびテンプレートとは</Link>
    </>
  )
}

export default Help
