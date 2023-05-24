import Link from 'next/link'
import { Header } from '@/components/Headers'

const Notifications = () => {
  const userId = 'ma_ma_hima'

  return (
    <>
      <Header href={`/${userId}`} title="通知" />
      <Link href="/notifications/123">運営からのお知らせ</Link>
    </>
  )
}

export default Notifications
