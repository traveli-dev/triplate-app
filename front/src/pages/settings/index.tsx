import {
  HiOutlineChevronRight,
  HiOutlineUser,
  HiOutlineBell,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineShieldCheck,
  HiOutlineQrcode,
  HiOutlineQuestionMarkCircle,
  HiOutlinePencil
} from 'react-icons/hi'
import { Container } from '@/components/Containers'
import { Header } from '@/components/Headers'
import { List, ListItem } from '@/components/Lists'
import { styles } from '@/styles/pages/settings/index.styles'

const Settings = () => {
  const userId = 'ma_ma_hima'

  const mainSettings = [
    {
      title: 'プロフィール設定',
      path: '/settings/profile',
      icon: HiOutlineUser
    },
    {
      title: '通知設定',
      path: '/settings/notifications',
      icon: HiOutlineBell
    },
    {
      title: '位置情報設定',
      path: '/settings/location',
      icon: HiOutlineLocationMarker
    }
  ]

  const tripSettings = [
    {
      title: 'たびのテンプレートを管理',
      path: '/dashboard',
      icon: HiOutlinePencil
    },
    {
      title: 'QRコードリーダー',
      path: '/reader',
      icon: HiOutlineQrcode
    }
  ]

  const otherSettings = [
    {
      title: 'お問い合わせ',
      path: '/support',
      icon: HiOutlineMail
    },
    {
      title: 'ヘルプ',
      path: '/help',
      icon: HiOutlineQuestionMarkCircle
    },
    {
      title: 'プライバシーポリシー',
      path: '/privacy',
      icon: HiOutlineShieldCheck
    }
  ]

  return (
    <>
      <Header href={`/${userId}`} title="設定" />
      <Container bgColor="white" isFull isPaddingNone>
        <h2 css={styles.header}>全般</h2>
        <List border>
          {mainSettings.map((setting, index) => (
            <ListItem
              Icon={setting.icon}
              IconRight={HiOutlineChevronRight}
              href={setting.path}
              key={index}
              title={setting.title}
            />
          ))}
        </List>

        <h2 css={styles.header}>たび関連</h2>
        <List border>
          {tripSettings.map((setting, index) => (
            <ListItem
              Icon={setting.icon}
              IconRight={HiOutlineChevronRight}
              href={setting.path}
              key={index}
              title={setting.title}
            />
          ))}
        </List>

        <h2 css={styles.header}>その他</h2>
        <List border>
          {otherSettings.map((setting, index) => (
            <ListItem
              Icon={setting.icon}
              IconRight={HiOutlineChevronRight}
              href={setting.path}
              key={index}
              title={setting.title}
            />
          ))}
        </List>
      </Container>
    </>
  )
}

export default Settings
