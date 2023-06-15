import Image from 'next/image'
import Link from 'next/link'
import { HiDotsVertical, HiOutlineDuplicate, HiOutlineHeart, HiOutlinePencil, HiOutlineQuestionMarkCircle, HiOutlineTag } from 'react-icons/hi'
import { ButtonFill, ButtonWithIcon } from '@/components/Buttons'
import { CardTripListItem } from '@/components/Cards'
import { Container } from '@/components/Containers'
import { TravelListItemType } from '@/components/Tabs/TabDaysWithTriplink'
import { styles, contentStyles, CardUserProfileStyles, FillButtonStyles, OutlineButtonStyles } from '@/styles/pages/triplink/triplate.styles'
import { Header } from '@/components/Headers'

const Triplate = () => {
  const items: TravelListItemType[] = [
    { icon: 'map', title: 'タイトル１', date: '18:00', memo: 'memomemo' },
    { icon: 'link', title: 'タイトル２', date: '18:00', memo: '' },
    { icon: 'ledger', title: 'タイトル３', date: '', memo: 'memomemo' },
    { icon: 'map', title: 'タイトル４', date: '', memo: '' }
  ]
  const thumbnail: string = '/images/thumbnail_sample.jpg'
  const hashtags: string[] = ['タグ１', 'タグ２', 'タグ３', 'タグ４', 'タグ５', 'タグ６']

  return (
    <Container bgColor="white" isFull>
      <Header href="/" title={"タイトル"} ToolIcon={HiOutlinePencil} toolHref='/' />
      <div css={styles.wrapper}>
        <div css={styles.triplateInfosWrapper}>
          <div css={styles.thumbnailWrapper}>
            <Image src={thumbnail} alt={''} fill css={styles.thumbnail} />
          </div>
          <div css={styles.title}>タイトル</div>
          <div css={styles.day}>２泊３日</div>
          <div css={styles.hashtagsWrapper}>
            {hashtags.map((hashtag, index) => (
              <div css={styles.hashtag} key={index}>
                <p>#{hashtag}</p>
              </div>
            ))}
          </div>
          <div css={styles.descriptionWrapper}>
            <p css={styles.description}>
              DESCRIPTIONDESCRIPTION.DESCRIPTIONDESCRIPTIONDESCRIPTION.DESCRIPTION
            </p>
          </div>
        </div>

        <TabContent day={0} tripList={items} thumbnail={thumbnail} />
        <Link css={styles.linkHelp} href="">
          <HiOutlineQuestionMarkCircle size={20} />
          <p>旅のテンプレートをアレンジとは？</p>
        </Link>


        <button css={FillButtonStyles.wrapper}>
          <HiOutlineDuplicate size={24} />
          <p>旅のテンプレートをアレンジする！
          </p>        </button>


        <button css={OutlineButtonStyles.wrapper}>
          <HiOutlineHeart size={24} />
          <p>
            お気に入りに登録する
          </p>
        </button>


        <CardUserProfile />

      </div>


    </Container>
  )
}
export default Triplate


type TabContentType = {
  day: number
  thumbnail: string
  tripList: TravelListItemType[]
}
const TabContent = ({ day, thumbnail, tripList }: TabContentType) => {
  return (
    <>
      <Image
        alt="thumbnail_image"
        css={contentStyles.thumbnail}
        height={329}
        src={thumbnail}
        width={329}
      />
      <div css={contentStyles.descriptionWrapper}>
        <div css={contentStyles.tag}>
          <HiOutlineTag size={20} />
          <p>タグ</p>
        </div>
        <div css={contentStyles.description}>説明DESCRIPTION説明DESCRIPTION説明DESCRIPTION</div>
        <div css={contentStyles.linkButton}>
          <ButtonWithIcon icon="link">Google Map</ButtonWithIcon>
          <ButtonWithIcon icon="link">Instagram</ButtonWithIcon>

        </div>
      </div>
      <div css={contentStyles.listItemsWrapper}>
        <div css={contentStyles.day}>Day{day}の旅程</div>
        {tripList.map((item, _) => {
          return (
            <div css={contentStyles.item} key={_}>
              <CardTripListItem
                css={contentStyles.item}
                date={item.date}
                icon={item.icon}
                memo={item.memo}
                title={item.title}
              />
            </div>
          )
        })}
      </div>

    </>
  )
}

const CardUserProfile = () => {
  return (
    <div css={CardUserProfileStyles.userProfileCardWrapper}>
      <div css={CardUserProfileStyles.userProfileWrapper}>
        <Image alt="" css={CardUserProfileStyles.userAvatar} height={64} src="/images/user_sample.jpeg" width={64} />
        <div>
          <div css={CardUserProfileStyles.userName}>み ゆ う</div>
          <div css={CardUserProfileStyles.userId}>@ma_ma_hima</div>
        </div>
      </div>
      <div css={CardUserProfileStyles.userStatus}>DESCRIPTIONが入りますDESCRIPTIONが入ります</div>
      <div css={CardUserProfileStyles.userFF}>3 フォロー | 12 フォロワー</div>
      <div css={CardUserProfileStyles.buttonFollow}>
        <ButtonFill>フォロー</ButtonFill>
      </div>
    </div>
  )
}