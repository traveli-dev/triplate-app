import { Container } from '@/components/Containers'
import { Header } from '@/components/Headers'
import { InputSwitch } from '@/components/Inputs/InputSwitch'
import { styles } from '@/styles/pages/settings/notifications.styles'

const Notifications = () => {
  // TODO: 以下、Inputにregisterを追加する
  return (
    <>
      <Header href="/settings" title="通知設定" />
      <Container bgColor="white" isFull>
        <h2 css={styles.headerMail}>メール通知</h2>
        <div css={styles.layoutInput}>
          {/* <InputSwitch id="mail-news" text="公式からのお知らせ" /> */}
        </div>
        <div css={styles.layoutInput}>
          {/* <InputSwitch id="mail-follow" text="フォロー通知" /> */}
        </div>
        <h2 css={styles.headerPush}>プッシュ通知</h2>
        <div css={styles.layoutInput}>
          {/* <InputSwitch id="push-news" text="公式からのお知らせ" /> */}
        </div>
        <div css={styles.layoutInput}>
          {/* <InputSwitch id="push-follow" text="フォロー通知" /> */}
        </div>
      </Container>
    </>
  )
}

export default Notifications
