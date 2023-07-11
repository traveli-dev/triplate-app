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
import { currentUserSelectors } from '@/redux/features'
import {
  GetTriplateRequestType,
  useGetTriplateQuery
} from '@/redux/services/firestore'
import { useAppSelector } from '@/redux/store'
import {
  FillButtonStyles,
  OutlineButtonStyles,
  styles
} from '@/styles/pages/triplate/[triplateId]/index.styles'

const TriplateDetails = () => {
  const router = useRouter()
  const { triplateId } = router.query

  const currentUser = useAppSelector(currentUserSelectors.currentUserData)
  const userId = currentUser.userId
  const req: GetTriplateRequestType = {
    uid: String(currentUser.uid),
    triplateId: String(triplateId)
  }
  const { data, isLoading } = useGetTriplateQuery(req)

  return (
    <>
      <></>
      {!data || isLoading ? (
        <>LOADING</>
      ) : (
        <>
          <Header
            ToolIcon={HiOutlinePencil}
            href={`/${userId}`}
            noBorder
            title={data.title}
            toolHref={`/triplate/${triplateId}/edit/settings`}
          />
          <Container bgColor="white" isFull>
            <div css={styles.triplateInfosWrapper}>
              <div css={styles.thumbnailWrapper}>
                <Image
                  alt=""
                  css={styles.thumbnail}
                  fill
                  src={data.thumbnail}
                />
              </div>
              <h1 css={styles.title}>{data.title}</h1>
              <p css={styles.day}>n泊m日</p>
              <div css={styles.hashtagsWrapper}>
                {data.tags &&
                  data.tags.map((hashtag, index) => (
                    <div css={styles.hashtag} key={index}>
                      <p>#{hashtag}</p>
                    </div>
                  ))}
              </div>
              <p css={styles.description}>{data.description} </p>
            </div>
            <TabTriplate
              itineraries={data.itineraries}
              memories={data.memories}
            />
            {/* TODO:テンプレートをアレンジとは？？ */}
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
      )}
    </>
  )
}

export default TriplateDetails
