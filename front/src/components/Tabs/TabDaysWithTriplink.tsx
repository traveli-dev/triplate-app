import React from 'react'
import Image from 'next/image'
import { HiOutlineTag } from 'react-icons/hi'
import { ButtonWithIcon } from '@/components/Buttons'
import { CardTripListItem } from '@/components/Cards'
import { Container } from '@/components/Containers'
import {
  contentStyles,
  styles,
  viewStyles
} from '@/styles/components/Tabs/TabDaysWithTriplink.styles'

export type TravelListItemType = {
  icon: 'map' | 'link' | 'ledger'
  title: string
  date?: string
  memo?: string
}

type TabDaysWithTriplinkProps = {
  triplinks: {
    day: number
    name: string
    linkList: TravelListItemType[]
  }[]
  tabType: 'view' | 'edit'
}

export const TabDaysWithTriplink = ({
  triplinks,
  tabType
}: TabDaysWithTriplinkProps) => {
  return (
    <>
      {tabType == 'edit' && (
        <div css={styles.wrapper}>
          <div css={styles.tabs} id="tabs">
            <input
              css={styles.tabSwitch}
              defaultChecked
              id="day1"
              name="tab"
              type="radio"
            />
            <label css={styles.tabLabel} htmlFor="day1" id="tab1">
              {triplinks[0].day}日目
            </label>
            <div css={styles.tabContent}>
              <Container bgColor="blue">{triplinks[0].name}</Container>
            </div>

            {triplinks.map((item) => (
              <React.Fragment key={item.day}>
                {item.day !== 1 && (
                  <>
                    <input
                      css={styles.tabSwitch}
                      id={`day${item.day}`}
                      key={item.day}
                      name="tab"
                      type="radio"
                    />
                    <label css={styles.tabLabel} htmlFor={`day${item.day}`}>
                      {item.day}日目
                    </label>
                    <div css={styles.tabContent}>
                      <Container bgColor="blue">{item.name}</Container>
                    </div>
                    f
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {tabType == 'view' && (
        <div css={viewStyles.wrapper}>
          <div css={viewStyles.tabs} id="tabs">
            {triplinks.map((item) => (
              <React.Fragment key={item.day}>
                <>
                  <input
                    css={viewStyles.tabSwitch}
                    defaultChecked={item.day == 1}
                    id={`day${item.day}`}
                    key={item.day}
                    name="tab"
                    type="radio"
                  />
                  <label css={viewStyles.tabLabel} htmlFor={`day${item.day}`}>
                    {item.day}日目
                  </label>
                  <div css={viewStyles.tabContent}>
                    {/*TODO: 両端のmarginがContainerでずれてる*/}
                    <TabContent day={item.day} tripList={item.linkList} />
                  </div>
                </>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

type TabContentType = {
  day: number
  tripList: TravelListItemType[]
}
const TabContent = ({ day, tripList }: TabContentType) => {
  return (
    <>
      <Image
        alt="thumbnail_image"
        css={contentStyles.thumbnail}
        height={329}
        src="/images/thumbnail_sample.jpg"
        width={329}
      />
      <div css={contentStyles.tag}>
        <HiOutlineTag size={20} />
        <p>タグ</p>
      </div>
      <div css={contentStyles.description}>説明DESCRIPTION</div>
      <div css={contentStyles.linkButton}>
        <ButtonWithIcon icon="link">Google Map</ButtonWithIcon>
        <ButtonWithIcon icon="link">Instagram</ButtonWithIcon>
      </div>
      <div css={contentStyles.day}>Day{day}</div>
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
    </>
  )
}
