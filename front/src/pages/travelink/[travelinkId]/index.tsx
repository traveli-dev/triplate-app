import { ButtonIconWithText } from '@/components/Buttons'
import { Container } from '@/components/Containers'
import { ImageThumbnail } from '@/components/Images'
import {
  ModalEdit,
  ModalMemo,
  ModalShare,
  ModalMember
} from '@/components/Modals'
import { TabDaysWithTripLink } from '@/components/Tabs'
import { useDisclosure } from '@/hooks/modals'
import { styles } from '@/styles/pages/tripLink/[tripLinkId]/TripLink.styles'

const TripLink = () => {
  // example
  const data = {
    url: '/images/thumbnail_sample.jpg',
    tripLinks: [
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
        <ModalMemo isOpen={memoIsOpen} onClose={memoOnClose} />
        <ModalShare isOpen={shareIsOpen} onClose={shareOnClose} />
        <TabDaysWithTripLink tripLinks={data.tripLinks} />
      </div>
    </>
  )
}
export default TripLink
