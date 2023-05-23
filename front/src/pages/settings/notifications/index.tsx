import Link from 'next/link'
import { Header } from '@/components/Headers'

const SettingsNotifications = () => {
  return (
    <>
      <Header href="/settings" title="通知" />
      <Link href="/settings/notifications/123">運営からのお知らせ</Link>
    </>
  )
}

export default SettingsNotifications
