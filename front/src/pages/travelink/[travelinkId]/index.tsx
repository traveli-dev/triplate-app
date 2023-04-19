import { ButtonIconWithText } from '@/components/Buttons'
import { Container } from '@/components/Containers'
import { ImageThumbnail } from '@/components/Images'
import { Tab } from '@/components/Tabs/Tab'
import { styles } from '@/styles/pages/travelink/[travelinkId]/Travelink.styles'

const Travelink = () => {
  // example
  const data = {
    url: '/images/thumbnail_sample.jpg',
    travelinks: [
      { day: 1, name: 'aaa' },
      { day: 2, name: 'bbb' },
      { day: 3, name: 'ccc' },
      { day: 4, name: 'ddd' },
      { day: 5, name: 'eee' },
      { day: 6, name: 'fff' },
      { day: 7, name: 'ggg' },
      { day: 8, name: 'hhh' },
      { day: 9, name: 'iii' },
      { day: 10, name: 'jjj' }
    ]
  }
  return (
    <>
      <ImageThumbnail url={data.url} />
      {/* モーダル */}
      <div css={styles.modalWrapper}>
        <div css={styles.handler}></div>
        <Container bgColor="white" isCenter>
          <h1 css={styles.title}>田舎にゆったり旅行</h1>
          <p css={styles.date}>2023.03.25 - 2023.03.27</p>
          <div css={styles.layoutButtonIconWithText}>
            <ButtonIconWithText iconType="members" />
            <ButtonIconWithText iconType="memo" />
            <ButtonIconWithText iconType="share" />
            <ButtonIconWithText iconType="edit" />
            <ButtonIconWithText iconType="public" />
          </div>
        </Container>
        <Tab />
      </div>
    </>
  )
}
export default Travelink
