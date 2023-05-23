import Link from 'next/link'
import { Header } from '@/components/Headers'

const Settings = () => {
  const userId = 'ma_ma_hima'

  return (
    <>
      <Header href={`/${userId}`} title="設定" />
      <h2>全般</h2>
      <div>
        <Link href="/settings/profile">プロフィール設定</Link>
      </div>
      <div>
        <Link href="/settings/notifications">通知設定</Link>
      </div>
      <div>
        <Link href="/settings/location">位置情報設定</Link>
      </div>
      <h2>その他</h2>
      <div>
        <Link href="/support">お問い合わせ</Link>
      </div>
      <div>
        <Link href="/help">ヘルプ</Link>
      </div>
      <div>
        <Link href="/privacy">プライバシーポリシー</Link>
      </div>
    </>
  )
}

export default Settings
