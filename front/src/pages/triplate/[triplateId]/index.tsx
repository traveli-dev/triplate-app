import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  HiOutlineDuplicate,
  HiOutlineHeart,
  HiOutlinePencil,
  HiOutlineQuestionMarkCircle
} from 'react-icons/hi'
import { CardUserProfile } from '@/components/Cards'
import { Container } from '@/components/Containers'
import { Header } from '@/components/Headers'
import { TabTriplate } from '@/components/Tabs'
import { TriplateType } from '@/redux/services/firestore'
import {
  FillButtonStyles,
  OutlineButtonStyles,
  styles
} from '@/styles/pages/triplate/[triplateId]/index.styles'

const TriplateDetails = () => {
  const router = useRouter()
  const { triplateId } = router.query

  const userId = 'ma_ma_hima'
  const thumbnail = '/images/thumbnail_sample.jpg'
  const hashtags: string[] = [
    'タグ１',
    'タグ２',
    'タグ３',
    'タグ４',
    'タグ５',
    'タグ６'
  ]
  type Itineraries = Pick<TriplateType, 'itineraries'>
  type Memories = Pick<TriplateType, 'memories'>
  const data: Itineraries & Memories = {
    memories: {
      day1: {
        itineraryId: 0,
        thumbnail: '/images/thumbnail_sample.jpg',
        description: 'aaaa'
      },
      day2: {
        itineraryId: 1,
        thumbnail: '/images/thumbnail_sample.jpg',
        description: 'bbbb'
      },
      day3: {
        itineraryId: 1,
        thumbnail: '/images/thumbnail_sample.jpg',
        description: 'cccc'
      }
    },
    itineraries: {
      day1: [
        {
          id: 0,
          isSecret: false,
          url: 'https://maps.google.com/?cid=13121875705491233800',
          name: '京都駅',
          time: null,
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
          time: null,
          memo: '荷物の回収忘れない'
        }
      ],
      day2: [
        {
          id: 0,
          isSecret: false,
          url: 'https://maps.google.com/?cid=14940864174397642651',
          name: 'アパホテル〈京都駅前〉',
          time: null,
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
          time: null,
          memo: null
        }
      ],
      day3: [
        {
          id: 0,
          isSecret: false,
          url: 'https://maps.google.com/?cid=14940864174397642651',
          name: 'ぱんだの散歩',
          time: null,
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
          time: null,
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

  return (
    <>
      <Header
        ToolIcon={HiOutlinePencil}
        href={`/${userId}`}
        noBorder
        title="タイトル"
        toolHref={`/triplate/${triplateId}/edit/settings`}
      />

      <Container bgColor="white">
        <div css={styles.triplateInfosWrapper}>
          <div css={styles.thumbnailWrapper}>
            <Image alt="" css={styles.thumbnail} fill src={thumbnail} />
          </div>
          <h1 css={styles.title}>タイトル</h1>
          <p css={styles.day}>２泊３日</p>
          <div css={styles.hashtagsWrapper}>
            {hashtags.map((hashtag, index) => (
              <div css={styles.hashtag} key={index}>
                <p>#{hashtag}</p>
              </div>
            ))}
          </div>
          <p css={styles.description}>
            いつメン３人で京都行ったよいつメン３人で京都行ったよいつメン３人で
          </p>
        </div>
      </Container>
      <div css={styles.layoutTabTriplate}>
        <TabTriplate itineraries={data.itineraries} memories={data.memories} />
      </div>
      <Container bgColor="white">
        {/* <TabContent day={0} thumbnail={thumbnail} tripList={items} /> */}
        <Link css={styles.linkHelp} href="">
          <HiOutlineQuestionMarkCircle size={20} />
          <p>旅のテンプレートをアレンジとは？</p>
        </Link>

        <button css={FillButtonStyles.wrapper}>
          <HiOutlineDuplicate size={24} />
          <p>旅のテンプレートをアレンジする！</p>{' '}
        </button>

        <button css={OutlineButtonStyles.wrapper}>
          <HiOutlineHeart size={24} />
          <p>お気に入りに登録する</p>
        </button>

        <CardUserProfile />
      </Container>
    </>
  )
}

export default TriplateDetails
