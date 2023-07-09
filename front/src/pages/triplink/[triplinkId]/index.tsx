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
import { TabDaysWithTriplink, TabTriplink } from '@/components/Tabs'
import { TravelListItemType } from '@/components/Tabs'
import { useDisclosure } from '@/hooks/modals'
import { styles } from '@/styles/pages/triplink/[triplinkId]/triplink.styles'
import { TriplinkType } from '@/redux/services/firestore'

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
  type Itineraries = Pick<TriplinkType, 'itineraries'>

  const data: Itineraries = {
    itineraries: {
      day1: [
        {
          id: 0,
          isSecret: false,
          url: 'https://maps.google.com/?cid=13121875705491233800',
          name: '京都駅',
          time: {
            _seconds: 1698195600,
            _nanoseconds: 0
          },
          memo: '駅に着いたら荷物預ける'
        },
        {
          id: 1,
          isSecret: false,
          url: 'https://maps.google.com/?cid=6059551674669155929',
          name: '京都水族館',
          time: null,
          memo: null
        },
        {
          id: 2,
          isSecret: false,
          url: 'https://maps.google.com/?cid=14940864174397642651',
          name: 'アパホテル〈京都駅前〉',
          time: {
            _seconds: 1698224400,
            _nanoseconds: 0
          },
          memo: '荷物の回収忘れない'
        }
      ],
      day2: [
        {
          id: 0,
          isSecret: false,
          url: 'https://maps.google.com/?cid=14940864174397642651',
          name: 'アパホテル〈京都駅前〉',
          time: {
            _seconds: 1698285600,
            _nanoseconds: 0
          },
          memo: null
        },
        {
          id: 1,
          isSecret: false,
          url: 'https://maps.google.com/?cid=13159134450370243740',
          name: '錦市場',
          time: null,
          memo: null
        },
        {
          id: 2,
          isSecret: false,
          url: null,
          name: 'ホテルで夕食',
          time: {
            _seconds: 1698314400,
            _nanoseconds: 0
          },
          memo: null
        }
      ],
      day3: [
        {
          id: 0,
          isSecret: false,
          url: 'https://maps.google.com/?cid=14940864174397642651',
          name: 'ぱんだの散歩',
          time: {
            _seconds: 1698372000,
            _nanoseconds: 0
          },
          memo: null
        },
        {
          id: 1,
          isSecret: false,
          url: 'https://maps.google.com/?cid=5767768846672272791',
          name: 'ぱんだの散歩',
          time: null,
          memo: 'みたらし団子'
        },
        {
          id: 2,
          isSecret: false,
          url: null,
          name: '新幹線乗って帰る',
          time: {
            _seconds: 1698404400,
            _nanoseconds: 0
          },
          memo: null
        },
        {
          id: 3,
          isSecret: true,
          url: 'http://rps.ana.co.jp/web/ncnv/uu/asm/all3216.php',
          name: '新幹線webチケット',
          time: null,
          memo: null
        }
      ],
      day4: [
        {
          id: 0,
          isSecret: false,
          url: 'https://maps.google.com/?cid=14940864174397642651',
          name: 'ぱんだの散歩',
          time: {
            _seconds: 1698372000,
            _nanoseconds: 0
          },
          memo: null
        },
        {
          id: 1,
          isSecret: false,
          url: 'https://maps.google.com/?cid=5767768846672272791',
          name: 'ぱんだの散歩',
          time: null,
          memo: 'みたらし団子'
        },
        {
          id: 2,
          isSecret: false,
          url: null,
          name: '新幹線乗って帰る',
          time: {
            _seconds: 1698404400,
            _nanoseconds: 0
          },
          memo: null
        },
        {
          id: 3,
          isSecret: true,
          url: 'http://rps.ana.co.jp/web/ncnv/uu/asm/all3216.php',
          name: '新幹線webチケット',
          time: null,
          memo: null
        }
      ],
      day5: [
        {
          id: 0,
          isSecret: false,
          url: 'https://maps.google.com/?cid=14940864174397642651',
          name: 'ぱんだの散歩',
          time: {
            _seconds: 1698372000,
            _nanoseconds: 0
          },
          memo: null
        },
        {
          id: 1,
          isSecret: false,
          url: 'https://maps.google.com/?cid=5767768846672272791',
          name: 'ぱんだの散歩',
          time: null,
          memo: 'みたらし団子'
        },
        {
          id: 2,
          isSecret: false,
          url: null,
          name: '新幹線乗って帰る',
          time: {
            _seconds: 1698404400,
            _nanoseconds: 0
          },
          memo: null
        },
        {
          id: 3,
          isSecret: true,
          url: 'http://rps.ana.co.jp/web/ncnv/uu/asm/all3216.php',
          name: '新幹線webチケット',
          time: null,
          memo: null
        }
      ],
      day6: [
        {
          id: 0,
          isSecret: false,
          url: 'https://maps.google.com/?cid=14940864174397642651',
          name: 'ぱんだの散歩',
          time: {
            _seconds: 1698372000,
            _nanoseconds: 0
          },
          memo: null
        },
        {
          id: 1,
          isSecret: false,
          url: 'https://maps.google.com/?cid=5767768846672272791',
          name: 'ぱんだの散歩',
          time: null,
          memo: 'みたらし団子'
        },
        {
          id: 2,
          isSecret: false,
          url: null,
          name: '新幹線乗って帰る',
          time: {
            _seconds: 1698404400,
            _nanoseconds: 0
          },
          memo: null
        },
        {
          id: 3,
          isSecret: true,
          url: 'http://rps.ana.co.jp/web/ncnv/uu/asm/all3216.php',
          name: '新幹線webチケット',
          time: null,
          memo: null
        }
      ],
      day7: [
        {
          id: 0,
          isSecret: false,
          url: 'https://maps.google.com/?cid=14940864174397642651',
          name: 'ぱんだの散歩',
          time: {
            _seconds: 1698372000,
            _nanoseconds: 0
          },
          memo: null
        },
        {
          id: 1,
          isSecret: false,
          url: 'https://maps.google.com/?cid=5767768846672272791',
          name: 'ぱんだの散歩',
          time: null,
          memo: 'みたらし団子'
        },
        {
          id: 2,
          isSecret: false,
          url: null,
          name: '新幹線乗って帰る',
          time: {
            _seconds: 1698404400,
            _nanoseconds: 0
          },
          memo: null
        },
        {
          id: 3,
          isSecret: true,
          url: 'http://rps.ana.co.jp/web/ncnv/uu/asm/all3216.php',
          name: '新幹線webチケット',
          time: null,
          memo: null
        }
      ],
      day8: [
        {
          id: 0,
          isSecret: false,
          url: 'https://maps.google.com/?cid=14940864174397642651',
          name: 'ぱんだの散歩',
          time: {
            _seconds: 1698372000,
            _nanoseconds: 0
          },
          memo: null
        },
        {
          id: 1,
          isSecret: false,
          url: 'https://maps.google.com/?cid=5767768846672272791',
          name: 'ぱんだの散歩',
          time: null,
          memo: 'みたらし団子'
        },
        {
          id: 2,
          isSecret: false,
          url: null,
          name: '新幹線乗って帰る',
          time: {
            _seconds: 1698404400,
            _nanoseconds: 0
          },
          memo: null
        },
        {
          id: 3,
          isSecret: true,
          url: 'http://rps.ana.co.jp/web/ncnv/uu/asm/all3216.php',
          name: '新幹線webチケット',
          time: null,
          memo: null
        }
      ],
      day9: [
        {
          id: 0,
          isSecret: false,
          url: 'https://maps.google.com/?cid=14940864174397642651',
          name: 'ぱんだの散歩',
          time: {
            _seconds: 1698372000,
            _nanoseconds: 0
          },
          memo: null
        },
        {
          id: 1,
          isSecret: false,
          url: 'https://maps.google.com/?cid=5767768846672272791',
          name: 'ぱんだの散歩',
          time: null,
          memo: 'みたらし団子'
        },
        {
          id: 2,
          isSecret: false,
          url: null,
          name: '新幹線乗って帰る',
          time: {
            _seconds: 1698404400,
            _nanoseconds: 0
          },
          memo: null
        },
        {
          id: 3,
          isSecret: true,
          url: 'http://rps.ana.co.jp/web/ncnv/uu/asm/all3216.php',
          name: '新幹線webチケット',
          time: null,
          memo: null
        }
      ]
    }
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
      <ImageThumbnail url="/images/thumbnail_sample.jpg" />
      {/* モーダル */}
      {/* TODO: 一旦モーダルやめて、スクロールしたらタブが上に止まるように */}
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
        <TabTriplink triplinks={data.itineraries} />
      </div>
    </>
  )
}
export default Triplink
