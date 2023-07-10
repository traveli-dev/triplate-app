import { Container } from '@/components/Containers'
import { Header } from '@/components/Headers'
import { InputSwitch } from '@/components/Inputs'
import { styles } from '@/styles/pages/settings/settingsLocation.styles'

const SettingsLocation = () => {
  // TODO: 以下、Inputにregisterを追加する
  return (
    <>
      <Header href="/settings" title="位置情報設定" />
      <Container bgColor="white" isFull>
        <h2 css={styles.headerMail}>位置情報</h2>
        <div css={styles.layoutInput}>
          {/* <InputSwitch id="mail-news" text="位置情報の取得を許可する" /> */}
        </div>
      </Container>
    </>
  )
}

export default SettingsLocation
