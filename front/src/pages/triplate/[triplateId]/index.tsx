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
import { TabContent, TravelListItemType } from '@/components/Tabs'
import {
  FillButtonStyles,
  OutlineButtonStyles,
  styles
} from '@/styles/pages/triplate/[triplateId]/index.styles'

const TriplateDetails = () => {
  const router = useRouter()
  const { triplateId } = router.query
  const userId = 'ma_ma_hima'

  const items: TravelListItemType[] = [
    { icon: 'map', title: 'タイトル１', date: '18:00', memo: 'memomemo' },
    { icon: 'link', title: 'タイトル２', date: '18:00', memo: '' },
    { icon: 'ledger', title: 'タイトル３', date: '', memo: 'memomemo' },
    { icon: 'map', title: 'タイトル４', date: '', memo: '' }
  ]
  const thumbnail = '/images/thumbnail_sample.jpg'
  const hashtags: string[] = [
    'タグ１',
    'タグ２',
    'タグ３',
    'タグ４',
    'タグ５',
    'タグ６'
  ]

  return (
    <>
      <Header
        ToolIcon={HiOutlinePencil}
        href={`/${userId}`}
        title="タイトル"
        toolHref={`/triplate/${triplateId}/edit/settings`}
      />
      <Container bgColor="white" isFull>
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

        <TabContent day={0} thumbnail={thumbnail} tripList={items} />
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
