import Image from 'next/image'
import { HiOutlineTag } from 'react-icons/hi'
import { ButtonWithIcon } from '@/components/Buttons'
import { CardTripListItem } from '@/components/Cards'
import { TravelListItemType } from '@/components/Tabs'
import { styles } from '@/styles/components/Tabs/TabContent.styles'

type TabContentType = {
  day: number
  thumbnail: string
  tripList: TravelListItemType[]
}
export const TabContent = ({ day, thumbnail, tripList }: TabContentType) => {
  return (
    <>
      <Image
        alt="thumbnail_image"
        css={styles.thumbnail}
        height={329}
        src={thumbnail}
        width={329}
      />
      <div css={styles.descriptionWrapper}>
        <div css={styles.tag}>
          <HiOutlineTag size={20} />
          <p>タグ</p>
        </div>
        <p css={styles.description}>
          ちょっとお金かかるけどショーみたほうがいいで！
        </p>
        <div css={styles.linkButton}>
          <ButtonWithIcon icon="link">Google Map</ButtonWithIcon>
          <ButtonWithIcon icon="link">Instagram</ButtonWithIcon>
        </div>
      </div>
      <div css={styles.listItemsWrapper}>
        <div css={styles.day}>Day{day}の旅程</div>
        {tripList.map((item, _) => {
          return (
            <div css={styles.item} key={_}>
              <CardTripListItem
                css={styles.item}
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
