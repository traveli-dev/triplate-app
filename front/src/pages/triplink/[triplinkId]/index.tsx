import { useRouter } from 'next/router'
import { ButtonIconRound, ButtonIconWithText } from '@/components/Buttons'
import { Container } from '@/components/Containers'
import { ImageThumbnail } from '@/components/Images'
import {
  ModalEdit,
  ModalMember,
  ModalMemo,
  ModalShare
} from '@/components/Modals'
import { TabTriplink } from '@/components/Tabs'
import { useDisclosure } from '@/hooks/modals'
import { useGetTriplinkQuery } from '@/redux/services/firestore'
import { styles } from '@/styles/pages/triplink/[triplinkId]/triplink.styles'
import { formatDate } from '@/utils/dates'

const Triplink = () => {
  const router = useRouter()
  const { triplinkId } = router.query

  const { data, isLoading } = useGetTriplinkQuery(String(triplinkId))

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
      <ImageThumbnail url="/images/thumbnail_sample.jpg" />
      {/* モーダル */}
      {/* TODO: 一旦モーダルやめて、スクロールしたらタブが上に止まるように */}
      <div css={styles.modalWrapper}>
        <div css={styles.handler}></div>
        {!data || isLoading ? (
          <>LOADING</>
        ) : (
          <>
            <Container bgColor="white" isCenter>
              <h1 css={styles.title}>{data.title}</h1>
              <p css={styles.date}>
                {formatDate(data.date[0])}{' '}
                {data.date[1] && (
                  <> - {data.date[1] && formatDate(data.date[1])}</>
                )}
              </p>
              <div css={styles.layoutButtonIconWithText}>
                <ButtonIconWithText iconType="members" onClick={memberOnOpen} />
                <ButtonIconWithText iconType="memo" onClick={memoOnOpen} />
                <ButtonIconWithText iconType="share" onClick={shareOnOpen} />
                <ButtonIconWithText iconType="edit" onClick={editOnOpen} />
              </div>
            </Container>
            <TabTriplink triplinks={data.itineraries} />
          </>
        )}

        <ModalMember isOpen={memberIsOpen} onClose={memberOnClose} />
        <ModalEdit isOpen={editIsOpen} onClose={editOnClose} />
        <ModalMemo
          isOpen={memoIsOpen}
          triplinkId={String(triplinkId)}
          onClose={memoOnClose}
        />
        <ModalShare isOpen={shareIsOpen} onClose={shareOnClose} />
      </div>
    </>
  )
}
export default Triplink
