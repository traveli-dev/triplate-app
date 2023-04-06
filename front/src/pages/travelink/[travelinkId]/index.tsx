import { ButtonIconWithText } from '@/components/Buttons'
import { Container } from '@/components/Containers'
import { ImageThumbnail } from '@/components/Images'
import { TabDaysWithTravelink } from '@/components/Tabs'
import styles from '@/styles/pages/travelink/[travelinkId]/Travelink.module.scss'

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
      <div className={styles.modal_wrapper}>
        <div className={styles.handler}></div>
        <Container bgColor="white" isCenter>
          <h1 className={styles.title}>田舎にゆったり旅行</h1>
          <p className={styles.date}>2023.03.25 - 2023.03.27</p>
          <div className={styles.button_icon_with_text_layout}>
            <ButtonIconWithText iconType="members" />
            <ButtonIconWithText iconType="memo" />
            <ButtonIconWithText iconType="share" />
            <ButtonIconWithText iconType="edit" />
            <ButtonIconWithText iconType="public" />
          </div>
        </Container>
        <TabDaysWithTravelink travelinks={data.travelinks} />
      </div>
    </>
  )
}
export default Travelink
