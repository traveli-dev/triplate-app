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
  useGetTriplateQuery,
  useGetUserQuery
} from '@/redux/services/firestore'
import { useAppSelector } from '@/redux/store'
import {
  FillButtonStyles,
  OutlineButtonStyles,
  styles
} from '@/styles/pages/triplate/[triplateId]/index.styles'
import { calcStayDuration } from '@/utils/dates'

const TriplateDetails = () => {
  const router = useRouter()
  const { triplateId } = router.query

  const currentUser = useAppSelector(currentUserSelectors.currentUserData)
  const { data: userData, isLoading: isUserLoading } = useGetUserQuery(
    String(currentUser.uid)
  )
  const req: GetTriplateRequestType = {
    uid: String(currentUser.uid),
    triplateId: String(triplateId)
  }
  const { data: triplateData, isLoading: isTriplateLoading } =
    useGetTriplateQuery(req)

  return (
    <div>
      {!triplateData || !userData || isTriplateLoading || isUserLoading ? (
        <>LOADING</>
      ) : (
        <>
          <Header
            ToolIcon={HiOutlinePencil}
            href={`/${userData.userId}`}
            noBorder
            title={triplateData.title}
            toolHref={`/triplate/${triplateId}/edit/settings`}
          />
          <Container bgColor="white" isFull>
            <div css={styles.triplateInfosWrapper}>
              <div css={styles.thumbnailWrapper}>
                <Image
                  alt=""
                  css={styles.thumbnail}
                  fill
                  src={triplateData.thumbnail}
                />
              </div>
              <h1 css={styles.title}>{triplateData.title}</h1>
              <p css={styles.day}>
                {triplateData.date && calcStayDuration(triplateData.date)}
              </p>
              <div css={styles.hashtagsWrapper}>
                {triplateData.tags &&
                  triplateData.tags.map((tag, index) => (
                    <div css={styles.hashtag} key={index}>
                      <p>#{tag}</p>
                    </div>
                  ))}
              </div>
              <p css={styles.description}>{triplateData.description} </p>
            </div>
            <TabTriplate
              itineraries={triplateData.itineraries}
              memories={triplateData.memories}
            />
            {/* TODO:旅のテンプレートをアレンジとは？*/}
            <Link css={styles.linkHelp} href="">
              <HiOutlineQuestionMarkCircle size={20} />
              <p>旅のテンプレートをアレンジとは？</p>
            </Link>
            {/* TODO:旅のテンプレートをアレンジする！ */}
            <button css={FillButtonStyles.wrapper}>
              <HiOutlineDuplicate size={24} />
              <p>旅のテンプレートをアレンジする！</p>{' '}
            </button>
            {/* TODO: お気に入りに登録する */}
            <button css={OutlineButtonStyles.wrapper}>
              <HiOutlineHeart size={24} />
              <p>お気に入りに登録する</p>
            </button>

            <CardUserProfile userData={userData} />
          </Container>
        </>
      )}
    </div>
  )
}

export default TriplateDetails
