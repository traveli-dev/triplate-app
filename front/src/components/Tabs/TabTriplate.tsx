import Image from 'next/image'
import { HiOutlineLink, HiOutlineTag } from 'react-icons/hi'
import { ButtonSmall } from '@/components/Buttons'
import { CardTripListItem } from '@/components/Cards'
import { Tab, TabList, TabPanel, Tabs } from '@/components/Tabs'
import { useTabNavigation } from '@/hooks/tabs'
import type { TriplateType } from '@/redux/services/firestore'
import { styles } from '@/styles/components/Tabs/TabTriplate.styles'

type TabTriplateProps = {
  itineraries: TriplateType['itineraries']
  memories: TriplateType['memories']
}

export const TabTriplate = ({ itineraries, memories }: TabTriplateProps) => {
  const tabLength = Object.keys(itineraries).length
  const invalidScroll = true // scrollIntoViewでy軸方向にscrollさせない
  const { focusedTab, tabListRef, handleTabClick, selectedTab } =
    useTabNavigation(tabLength, invalidScroll)

  return (
    <Tabs>
      <TabList fitContent isSticky ref={tabListRef}>
        {Object.keys(itineraries).map((_, index) => (
          <Tab
            focusedTab={focusedTab}
            handleTabClick={handleTabClick}
            key={index}
            selectedTab={selectedTab}
            tabName={`tab-${index}`}
            type="simple"
          >
            {index + 1}日目
          </Tab>
        ))}
      </TabList>
      {Object.values(itineraries).map((value, index) => (
        <TabPanel
          bgColor="white"
          key={index}
          panelName={`day-${index + 1}`}
          selectedTab={selectedTab}
          tabName={`tab-${index}`}
        >
          {memories[`day${index + 1}`] && (
            <>
              <div css={styles.imgWrapper}>
                <Image
                  alt=""
                  css={styles.thumbnail}
                  fill
                  src={memories[`day${index + 1}`].thumbnail ?? ''}
                />
              </div>
              <div css={styles.descriptionWrapper}>
                <div css={styles.tag}>
                  <HiOutlineTag size={20} />
                  <p>
                    {value[memories[`day${index + 1}`].itineraryId ?? 0].name}
                  </p>
                </div>
                <p css={styles.description}>
                  {memories[`day${index + 1}`].description}
                </p>
                <div css={styles.linkButton}>
                  <ButtonSmall Icon={HiOutlineLink} isFit>
                    Google Map
                  </ButtonSmall>
                </div>
              </div>
            </>
          )}
          <div css={styles.cardTripListItemWrapper}>
            <h2 css={styles.day}>{`Day${index + 1}の旅程`}</h2>
            {value.map((plan, index) => (
              <div css={styles.layoutCardTripListItem} key={index}>
                <CardTripListItem
                  date={null}
                  icon="map"
                  // TODO: iconを動的に
                  memo={plan.memo}
                  title={plan.name}
                  // TODO: date={plan.time}
                />
              </div>
            ))}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  )
}
