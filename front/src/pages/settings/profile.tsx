import { useRouter } from 'next/router'
import { ButtonFill } from '@/components/Buttons'
import { Header } from '@/components/Headers'

const SettingsProfile = () => {
  const router = useRouter()
  const { prev } = router.query

  return (
    <>
      <Header href={prev ? `/${prev}` : '/settings'} title="プロフィール編集" />
      <ButtonFill>プロフィールを更新</ButtonFill>
    </>
  )
}

export default SettingsProfile
