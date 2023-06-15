import { useRouter } from 'next/router'
import { ButtonIconRound, ButtonIconWithText } from '@/components/Buttons'
import { Container } from '@/components/Containers'
import { ImageThumbnail } from '@/components/Images'
import {
  ModalEdit,
  ModalMemo,
  ModalShare,
  ModalMember
} from '@/components/Modals'
import { TabDaysWithTriplink } from '@/components/Tabs'
import { TravelListItemType } from '@/components/Tabs/TabDaysWithTriplink'
import { useDisclosure } from '@/hooks/modals'
import { styles } from '@/styles/pages/triplink/[triplinkId]/triplink.styles'

const Triplink = () => {
  const router = useRouter()
  const { triplinkId } = router.query

  // example
  const items: TravelListItemType[] = [
    { icon: 'map', title: 'タイトル１', date: '18:00', memo: 'memomemo' },
    { icon: 'link', title: 'タイトル２', date: '18:00', memo: '' },
    { icon: 'ledger', title: 'タイトル３', date: '', memo: 'memomemo' },
    { icon: 'map', title: 'タイトル４', date: '', memo: '' }
  ]
  const data = {
    url: '/images/thumbnail_sample.jpg',
    triplinks: [
      { day: 1, name: 'aaa', linkList: items },
      { day: 2, name: 'bbb', linkList: items },
      { day: 3, name: 'ccc', linkList: items },
      { day: 4, name: 'ddd', linkList: items },
      { day: 5, name: 'eee', linkList: items }
    ]
  }

  const {
    isOpen: editIsOpen,
    onClose: editOnClose,
    onOpen: editOnOpen
  } = useDisclosure()

  const {
    isOpen: memoIsOpen,
    onClose: memoOnClose,
    onOpen: memoOnOpen
  } = useDisclosure()

  const {
    isOpen: shareIsOpen,
    onClose: shareOnClose,
    onOpen: shareOnOpen
  } = useDisclosure()

  const {
    isOpen: memberIsOpen,
    onClose: memberOnClose,
    onOpen: memberOnOpen
  } = useDisclosure()

  return (
    <>
      <ButtonIconRound icon="back" onClick={() => router.push('/home')} />
      <ImageThumbnail url={data.url} />
      {/* モーダル */}
      <div css={styles.modalWrapper}>
        <div css={styles.handler}></div>
        <Container bgColor="white" isCenter>
          <h1 css={styles.title}>田舎にゆったり旅行</h1>
          <p css={styles.date}>2023.03.25 - 2023.03.27</p>
          <div css={styles.layoutButtonIconWithText}>
            <ButtonIconWithText iconType="members" onClick={memberOnOpen} />
            <ButtonIconWithText iconType="memo" onClick={memoOnOpen} />
            <ButtonIconWithText iconType="share" onClick={shareOnOpen} />
            <ButtonIconWithText iconType="edit" onClick={editOnOpen} />
          </div>
        </Container>
        <ModalMember isOpen={memberIsOpen} onClose={memberOnClose} />
        <ModalEdit isOpen={editIsOpen} onClose={editOnClose} />
        <ModalMemo
          isOpen={memoIsOpen}
          triplinkId={String(triplinkId)}
          onClose={memoOnClose}
        />
        <ModalShare isOpen={shareIsOpen} onClose={shareOnClose} />
        <TabDaysWithTriplink triplinks={data.triplinks} />
      </div>
    </>
  )
}
export default Triplink
