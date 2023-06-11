import Image from 'next/image'
import { HiDotsVertical } from 'react-icons/hi'
import { ButtonFill } from '@/components/Buttons'
import { Container } from '@/components/Containers'
import { TabDaysWithTriplink } from '@/components/Tabs'
import { TravelListItemType } from '@/components/Tabs/TabDaysWithTriplink'
import { styles } from '@/styles/pages/triplink/triplate.styles'

const Triplate = () => {
  const items: TravelListItemType[] = [
    { icon: 'map', title: 'タイトル１', date: '18:00', memo: 'memomemo' },
    { icon: 'link', title: 'タイトル２', date: '18:00', memo: '' },
    { icon: 'ledger', title: 'タイトル３', date: '', memo: 'memomemo' },
    { icon: 'map', title: 'タイトル４', date: '', memo: '' }
  ]
  const _triplinks = [
    { day: 1, name: 'aaa', linkList: items },
    { day: 2, name: 'bbb', linkList: items },
    { day: 3, name: 'ccc', linkList: items },
    { day: 4, name: 'ccc', linkList: items },
    { day: 5, name: 'ccc', linkList: items }
  ]
  return (
    <Container bgColor="white" isFull>
      <div css={styles.wrapper}>
        {/*TODO: ヘッダー的な*/}
        <div css={styles.headWrapper}>
          <div>
            <div css={styles.textHead}>タイトル</div>
            <div css={styles.textSub}>サブタイトル</div>
          </div>
          <button>
            <HiDotsVertical size={24} />
          </button>
        </div>
        <div css={styles.tab}></div>
        <TabDaysWithTriplink tabType="view" triplinks={_triplinks} />
      </div>
      
      <div css={styles.userProfileCardWrapper}>
        <div  css={styles.userProfileWrapper}>
          <div css={styles.userAvatarWrapper}>
          <Image src={'/images/user_sample.jpeg'}  alt={''} fill css={styles.userAvatar}/>
        </div>
        <div>
            <div css={styles.userName}>み ゆ う</div>
            <div css={styles.userId}>@ma_ma_hima</div>
          </div>
        </div>
      <div  css={styles.userStatus}>DESCRIPTIONが入りますDESCRIPTIONが入ります</div>
      <div css={styles.userFF}>3 フォロー | 12 フォロワー</div>
      <div css={styles.buttonFollow}>
        <ButtonFill>フォロー</ButtonFill>
      </div>
      </div>
    </Container>
  )
}
export default Triplate
